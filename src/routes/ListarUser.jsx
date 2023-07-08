import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
//import "./CadastrarUser.css"
import axios from "axios";

// LISTAR OS USUARIOS (METODO GET)

const ListarUser = () => {

  const [user, setUser] = useState([]);

  const getUser = async () => {

      try {
        
        const response = await axios.get(
          'http://localhost:3000/usuarioru'
        );

        const data = response.data;
        
        setUser(data);

      } catch (error) {
        console.log(error);
      }
  }

  useEffect(() => {

    getUser();

  }, [])



  return (
    <div>Listar User aaaaaaaaaaaaaaaaaaaa</div>
    
  )
}

export default ListarUser;