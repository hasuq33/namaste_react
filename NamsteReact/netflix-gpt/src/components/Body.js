import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constants";

const Body = () => {
  const appRouter = createBrowserRouter([{
    path:"/", 
    element:<Login />,
  },{
    path:"/browse",
    element:<Browse />,
  }
  ])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body