import { signOut , onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate(); 
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

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
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10  flex justify-between' style={{width:'-webkit-fill-available',width:'100%',}}>
      <img className='w-44' src={LOGO}/>
      {user&&<div>
        <img alt='user'  width="60" src={user.photoURL}
             />
        <button onClick={handleSignout} className='font-bold text-white'>(Sign Out)</button>
      </div>
      }
    </div>
  )
}

export default Header