import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from "./pages/Login/index"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import CustomHeader from './components/CustomHeader/CustomHeader';
import { UserProvider } from './contexts/UserProvider';
import ProfileBox from './components/ProfileBox/ProfileBox';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
  <React.StrictMode>
    <CustomHeader/>
    <RouterProvider router={router} />
  </React.StrictMode>
  </UserProvider>
);