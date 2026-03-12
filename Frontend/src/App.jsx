import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Components/RootLayout";
import { Children } from "react";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import UserProfile from "./Components/UserProfile";
import AuthorProfile from "./Components/AuthorProfile";
import { Toaster } from "react-hot-toast";
import ArticleById from "./Components/ArticleById";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "user-profile",
          element: <UserProfile />,
        },
        {
          path: "author-profile",
          element: <AuthorProfile />,
        },
        {
          path: "article",
          element: <ArticleById />,
        },
      ],
    },
  ]);

  return (
    <div>
      <Toaster position="top-center"></Toaster>
      <RouterProvider router={routerObj} />
    </div>
  );
}

export default App;
