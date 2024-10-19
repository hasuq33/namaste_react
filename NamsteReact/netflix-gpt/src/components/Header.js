import { signOut , onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect , useRef} from "react";
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO , SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate(); 
  const user = useSelector(store => store.user);
  const isGptSearch = useSelector(store => store.gpt.showGptSearch)
  debugger
  const dispatch = useDispatch();
  const selectLanguageRef = useRef(null); 

  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth,(user)=>{
      if(user){
        const { uid , email , displayName , photoURL } = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName ,photoURL:photoURL}));
        navigate("/browse");
      }else{
        // User Signed Out 
        dispatch(removeUser());
        navigate("/");
      }
    })

    return ()=> unsubscribe();
  },[]);

  const handleSignout = ()=>{
      signOut(auth).then(()=>{
        // Signout Successfully 
        // navigate("/"); 
      }).catch((error)=>{
        navigate("/error"); 
      })
  }

  const handleGptSearch=()=>{
    dispatch(toggleGptSearchView())
  }

  const handleLanguageOnchange = (ev)=>{
    dispatch(changeLanguage(selectLanguageRef.current.value)); 
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10  flex justify-between' style={{width:'-webkit-fill-available',width:'100%',}}>
      <img className='w-44' src={LOGO}/>
      {user&&<div className="flex p-2">
        {isGptSearch&&<select ref={selectLanguageRef} className="bg-gray-900 text-white m-2 p-2 rounded-lg" onChange={handleLanguageOnchange}>
          {SUPPORTED_LANGUAGE.map((language)=><option key={language.identifier} value={language.identifier}>{language.name}</option>)}
        </select>}
        <button className="py-2 px-4 mx-4 my-2  bg-purple-800 text-white rounded-lg"
        onClick={handleGptSearch}>{isGptSearch ? "Home Page":"Gpt Search"}</button>
        <img alt='user'  className="w-12 h-12" src={user.photoURL}
             />
        <button onClick={handleSignout} className='font-bold text-white'>(Sign Out)</button>
      </div>
      }
    </div>
  )
}

export default Header