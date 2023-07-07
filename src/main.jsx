import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import {createBrowserRouter, RouterProvider, Router} from "react-router-dom";

// páginas de conteúdos
import LoginPage from "./routes/LoginPage";
import CadastrarUser from "./routes/CadastrarUser";
import CadastrarCardapioDiario from "./routes/CadastrarCardapioDiario";

const router = createBrowserRouter ([
  {
    element: <App/>, // container da aplicação
    children: [ // rotas
      {
        path: "/", 
        element: <LoginPage/>,
      },
      {
        path: "/CadastrarUsuario",
        element: <CadastrarUser/>,
      },
      {
        path: "/CadastrarCardapioDiario",
        element: <CadastrarCardapioDiario/>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
