import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Jobs from './Components/Jobs/Jobs';
import Blog from './Components/Blogs/Blog';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : '/statistics',
        element : <Statistics></Statistics>
      },
      {
        path :  '/jobs',
        element : <Jobs></Jobs>
      },
      {
        path : '/blog',
        element : <Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
