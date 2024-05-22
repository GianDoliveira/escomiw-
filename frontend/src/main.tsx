import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home/Home.tsx';
import About from './Pages/About/About.tsx';
import Page from './Pages/ESCOMIW/Page.tsx';
import ProjetoPai from './Pages/PAI/ProjetoPai.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "", element: <Home/>},
      {path: "sobre", element: <About/>},
      {path: "escomiw", element: <Page/>},
      {path: "projetopai", element: <ProjetoPai/>},
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
