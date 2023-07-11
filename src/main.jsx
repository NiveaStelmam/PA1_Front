import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import {createBrowserRouter, RouterProvider, Router} from "react-router-dom";

// páginas de conteúdos
import LoginPage from "./routes/LoginPage";
//import ListarUser from "./routes/ListarUser";
import CadastrarUser from "./routes/CadastrarUser";
import CadastrarAvisos from "./routes/CadastrarAvisos";
import CadastrarPratos from "./routes/CadastrarPratos";
import CardapioSemanal from "./routes/cardapiosemanal";
import CadastrarSugestao from "./routes/CadastrarSugestao";
import Avaliacao from "./routes/Avaliacao";


const router = createBrowserRouter ([
  {
    element: <App/>, // container da aplicação
    children: [ // rotas
      {
        path: "/LoginPage", 
        element: <LoginPage/>,
      },
      {
        path: "/avisos",  // OK
        element: <CadastrarAvisos/>,
      },
      {
        path: "/pratos",  // OK
        element: <CadastrarPratos/>,
      },
      {
        path: "/CadastrarUser", // OK
        element: <CadastrarUser/>,
      },
      {
        path: "/cardapiosemanal", // OK
        element: <CardapioSemanal/>,
      },
      {
        path: "/sugestoes", 
        element: <CadastrarSugestao/>, // OK
      },
      {
        path: "/avaliacoes", 
        element: <Avaliacao/>,
      },
    
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
