import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom';
import Cuisines from './pages/cuisines';
import Chefs from './pages/chefs';
import Aboutus from './pages/about';
import Home from './pages/home';
import Foodindex from './pages/foodindex';
import Indian from './pages/indian';
import Chinese from './pages/chinese';
import Mexican from './pages/mexican';
import Italian from './pages/italian';
import French from './pages/french';
import Spanish from './pages/spanish';
import Japan from './pages/japan';
import American from './pages/american';
import Sanjeev from './pages/sanjeev';
import Vikas from './pages/vikas';
import Jamie from './pages/jamie';
import Gordon from './pages/gordon';
import Pooja from './pages/pooja';
import Ranveer from './pages/ranveer';
import Yannick from './pages/yannick';
import Clare from './pages/clare';
import Backend from './pages/backendcode';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Foodindex/>
  },
  {
    path: '/home',
    element: <Home/>
  },,
  {
    path: '/aboutus',
    element: <Aboutus/>
  },
  {
    path : '/cuisines',
    element: <Cuisines/>
  },
  {
    path : '/chefs',
    element: <Chefs/>
  },
  {
    path : '/aboutus',
    element: <Aboutus/>
  },
  {
    path : '/indian',
    element: <Indian/>
  },
  {
    path : '/chinese',
    element: <Chinese/>
  },
  {
    path : '/mexican',
    element: <Mexican/>
  },
  {
    path : '/italian',
    element: <Italian/>
  },
  {
    path : '/american',
    element: <American/>
  },
  {
    path : '/french',
    element: <French/>
  },
  {
    path : '/spanish',
    element: <Spanish/>
  },
  {
    path : '/japanese',
    element: <Japan/>
  },
  {
    path: '/sanjeev',
    element: <Sanjeev/>
  },
  {
    path: '/vikas',
    element: <Vikas/>
  },
  {
    path: '/jamie',
    element: <Jamie/>
  },
  {
    path: '/gordon',
    element: <Gordon/>
  },
  {
    path: '/pooja',
    element: <Pooja/>
  },
  {
    path: '/ranveer',
    element: <Ranveer/>
  },
  {
    path: '/yannick',
    element: <Yannick/>
  },
  {
    path: '/clare',
    element: <Clare/>
  },
  // {
  //   path:'/backcode',
  //   element: <Backend/>
  // }
  

])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
