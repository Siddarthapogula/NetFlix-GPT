import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import Login1 from './Login1';

const  Body = () => {


    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login1/>
        },
        {
          path:"/browse",
          element:<Browse/>
        }
    ])

   

  return (
    <div className=''><RouterProvider router={appRouter}/></div>
  )
}

export default Body;