import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Login from './Components/Accounts/Login';
import Register from './Components/Accounts/Register';
import Accounts from './Components/Accounts/Accounts';
import ViewRecipes from './Components/ViewRecipes/ViewRecipes';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import PrivateRouter from './Components/Private_Router/PrivateRouter';
import Blog from './Components/Blog/Blog';
import Error from './Components/Error/Error';
import Terms from './Components/Terms/Terms';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://wabisabi-server-be-naima.vercel.app/chefs')

      },
      {
        path:"blog",
        element:<Blog></Blog>
      },
      {
        path: ":id",
        element:<PrivateRouter><ViewRecipes></ViewRecipes></PrivateRouter> ,
        loader: ({ params }) => fetch(`https://wabisabi-server-be-naima.vercel.app/chefs/${params.id}`)
      }
    ]
  },
  {
    path: "/",
    element: <Accounts></Accounts>,
    errorElement:<Error></Error>,
    children: [

      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path:"termsAndConditions",
        element:<Terms></Terms>
      }

    ]
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>,
)
