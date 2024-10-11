import {useState , useRef} from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import {createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addUser} from "../utils/userSlice";

const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true);
  const [errorMessage , seterrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleButtonClick = () =>{
    // Validate the form Data
    const message = checkValidateData(email.current.value, password.current.value);
    seterrorMessage(message);

    if(message) return

    if(!isSignInForm){
      // Sign Up Logic
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential)=>{
        // Signed Up User
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/128901875?s=400&u=59378bd21c0c70afaccc68ee45f6cbfde62ae392&v=4"
        }).then(() => {
          const {displayName , photoURL , email , uid} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName ,photoURL:photoURL}));
          navigate("/browse");
        }).catch((error) => {
          const errorCode = error.code;
          seterrorMessage(errorCode+"-"+" Error while setting up Profile Name!")
        });
      }).catch((error)=>{
        const errorCode = error.code;
        const message = error.message
        seterrorMessage(errorCode+"-"+message);
      })
    }else{
      // Sign In Logic
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential)=>{
        // Signed in 
        const user = userCredential.user;
        navigate("/browse");
      }).catch((error)=>{
        const errorCode = error.code;
        const message = error.message;
        seterrorMessage(errorCode+"-"+message);
      })
    }

  }

  const toggleSigninForm=() =>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg'/>
      </div>
      <form onSubmit={(ev)=>ev.preventDefault()} className='w-3/12 absolute mx-auto my-36 right-0 left-0 p-12 bg-black bg-opacity-80 rounded-lg text-white'>
        <h1 className='font-bold text-3xl  my-2 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type='text' ref={name} placeholder='Full Name' className='p-3 bg-gray-800 rounded-lg my-4 w-full'/>}
        <input ref={email} type='text' placeholder='Email Address' className='p-3 bg-gray-800 rounded-lg my-4 w-full'/>
        <input ref={password} type='password' placeholder='Password' className='p-3 my-4 bg-gray-800 rounded-lg w-full'/>
        <p className='text-red-500 py-4 font-bold text-lg'>{errorMessage}</p>
        <button className='p-3 my-3 rounded-lg bg-red-700 w-full' onClick={handleButtonClick}>Submit</button>
        <p className='py-4 cursor-pointer' onClick={toggleSigninForm}>{isSignInForm ? "New to Netflix? Sign Up Now":"Already Have an Account? Sign In"}</p>
      </form>
    </div>
  )
}

export default Login;