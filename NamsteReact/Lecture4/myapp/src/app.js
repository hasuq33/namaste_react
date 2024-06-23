import React,{lazy, Suspense , useState , useEffect  } from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './components/Error';
import UserContext from './utils/UserContext.js';

// Chunking
// Code Splitting
// Dynamic Bundling 
// lazy loading
//ondemand loading 
const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=>import("./components/About"));
const AppLayout = () =>{

    const [userName , setUserName ] = useState("Harshiv Joshi");

    // Authentication
    useEffect(()=>{
        const data = {
            name: "Harshiv Joshi",
        }
        setUserName(data.name);
    },[])

    return <div className='app'>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
            <Header/>
            <Outlet/>
        </UserContext.Provider>
    </div>
}
const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>,
            }
            ,{
                path:'/about',
                element:<Suspense fallback={<h1>Loading.....</h1>}><About/></Suspense>
            },{
                path:'/contact',
                element: <Contact/>
            },{
                path:'/restaurants/:resId',
                element: <RestaurantMenu/>
            },{
                path:'/grocery', 
                element:<Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement: <Error />,
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);