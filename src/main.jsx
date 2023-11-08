import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Login from "./Authentication/Login";
import Main from "./Components/Home/Main";
import AuthProviders from "./Provider/AuthProviders";
import SignUp from "./Authentication/SignUp";
import AddBooks from "./PrivateRoute/AddBooks";
import AllBooks from "./PrivateRoute/AllBooks";
import Details from "./PrivateRoute/Details";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ShowAllBooks from "./Components/ShowAllBooks/ShowAllBooks";
import ErrorPage from "./ErrorPage/ErrorPage";
import BorrowedBooks from "./PrivateRoute/BorrowedBooks";
import UpdateBooks from "./PrivateRoute/UpdateBooks";
import Read from "./PrivateRoute/Read";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/categories"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBooks></AddBooks>,
          </PrivateRoute>
        ),
      },
      {
        path: "/showAllBooks",
        element: <ShowAllBooks></ShowAllBooks>,
        loader: () =>
          fetch(`http://localhost:5000/books`),
      },
      {
        path: "/:category",
        element: <AllBooks></AllBooks>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.category}`),
      },
      {
        path: "/seeDetails/:id",
        element: <PrivateRoute>
          <Details></Details>
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booksId/${params.id}`),
      },
      {
        path: "/read/:id",
        element: <Read></Read>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booksId/${params.id}`),
      },
      {
        path: "/borrowedBooks",
        element: <PrivateRoute>
          <BorrowedBooks></BorrowedBooks>
        </PrivateRoute>,
        loader: () =>
          fetch(`http://localhost:5000/seeDetails`),
      },
      {
        path: "/updateBooks/:id",
        element: <PrivateRoute>
          <UpdateBooks></UpdateBooks>
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booksId/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
