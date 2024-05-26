import React,{useState} from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';

const AppLayout = () =>{
    return <div className='app'>
        <Header/>
        <Outlet/>
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
                element: <About></About>
            },{
                path:'/contact',
                element: <Contact/>
            },{
                path:'/restaurants/:resId',
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error />,
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);