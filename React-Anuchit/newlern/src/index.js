import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import BorrowList from './components/Content';
import Aiconnect from './components/Aiconnect';
import { BrowserRouter,RouterProvider, Route, Link, createBrowserRouter } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />
  }
  ,
  {
    path: "content",
    element: <BorrowList/>
  }
  ,
  {
    path: "login",
    element: <Login/>
  }
  ,
  {
    path: "Aiconnect",
    element: <Aiconnect/>
  }

]);


// ReactDOM.render(<HelloComponent/>,document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={router}/>
</React.StrictMode>); // ใช้ root.render แทน ReactDOM.render
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
