import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import MYEnroll from "../Pages/Dashboard/MyEntroll/MYEnroll";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
     
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/instructors",
          element: <Instructors/>,
        },
        {
          path: "/classes",
          element: <Classes/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/signup",
          element: <SignUp/>,
        },
        {
          path: "secret",
          element: <PrivateRoute><Secret/></PrivateRoute>,
        },
      ],
     
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "myselectedclass",
          element: <MySelectedClass/>,
        },
        {
          path: "myenroll",
          element: <MYEnroll/>,
        },
        {
          path: "paymenthistory",
          element: <PaymentHistory/>,
        },
        {
          path: "allusers",
          element: <AllUsers/>,
        },
        
      ],
    },
  ]);