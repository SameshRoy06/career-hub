import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserRouter, RouterProvider 
} from "react-router-dom";
import Home from './Component/Home/Home';
import Routes from './Component/Routes/Routes';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Jobs from './Component/Jobs/Jobs';
import Applied from './Component/Applied/Applied';
import Statistics from './Component/Statistics/Statistics';
import JobDetails from './Component/JobDetails/JobDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes></Routes>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/applied',
        element: <Applied></Applied>,
        loader: () => fetch(`jobs.json`)
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path:'/job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch(`categories.json`)    
      
      } 
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
