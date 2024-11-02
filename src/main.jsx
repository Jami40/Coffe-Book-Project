import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Pages/Home';
import Coffe from './Pages/Coffe';
import DashBoard from './Pages/DashBoard';
import CoffeCard from './Components/CoffeCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path : "/",
        element:<Home></Home>,
        loader:()=>fetch('../categories.json'),
        children:[
          {
            path:'/',
            element:<CoffeCard></CoffeCard>,
            loader:()=>fetch('../coffees.json')
          },
          {
            path:'/category/:category',
            element:<CoffeCard></CoffeCard>,
            loader:()=>fetch('../coffees.json')
          }
        ]

      },
      {
        path:"/coffees",
        element:<Coffe></Coffe>
      },
      {
        path:"/dashboard",
        element:<DashBoard></DashBoard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
