import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import { ToastContainer,  } from 'react-toastify';
import SignIn from './components/Signin/SignIn.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path:"books/:bookId",
          element:<BookDetails></BookDetails>,
          loader:()=>fetch('/booksData.json'),
        },
        {
          path:"listedBooks",
          element:<ListedBooks></ListedBooks>,
          loader: ()=>fetch('/booksData.json'),
        },
        {
          path: "/dashboard",
          element:<DashBoard></DashBoard>,
          
        },
        {
          path: "/signin",
          element:<SignIn></SignIn>,
          
        },
        {
          path: "/signup",
          element:<SignUp></SignUp>,
          
        }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
