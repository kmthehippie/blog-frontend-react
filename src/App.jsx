import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout";

import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import Error from "./components/pages/Error";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/post/:postId", element: <Post /> },
      { path: "*", element: <Error /> },
      {
        //TODO: START LOOKING AT PROTECTED ROUTES. AUTH AND CONTEXT. HOW TO KEEP THE ACCESSTOKEN ON LOGIN IN THE AUTH CONTEXT. ETC
        element: <ProtectedRoutes />,
        children: [{ path: "/profile", element: <Profile /> }],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
