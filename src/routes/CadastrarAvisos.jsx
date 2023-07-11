import menuFetch from '../axios/config';
import { useState } from "react";
import React from 'react';
import './cadastrarAvisos.css'; // arquivo CSS aqui
import { useNavigate } from "react-router-dom";

const CadastrarAvisos = () => {
 
    const navigate = useNavigate()
    const [titulo, setTitulo] = useState()
    //const [data, setData] = useState()
    const [autor, setAutor] = useState()
    const [texto, setTexto] = useState()
 

    const createAvisos =  async (e) => {
        e.preventDefault();
        const avisos = {titulo, autor, texto }
        console.log(avisos);
        await menuFetch.post("/avisos", 
        {titulo, autor, texto },
        )
    }


    return (
      
    <div className="new-avisos">
      <h2>Cadastrar Avisos</h2>
      <form onSubmit={(e) => createAvisos(e)}>
        <div className="form-control">
          <label htmlFor="titulo">Título:</label>
          <input 
            type="titulo" 
            name="titulo" 
            id="titulo" 
            placeholder="Digite o titulo do aviso" 
            onChange={(e) => setTitulo(e.target.value)}
            className="input titulo" 
            required
          /> 
        </div>
        <div className="form-control">
          <label htmlFor="autor">Autor:</label>
          <input 
            type="autor" 
            name="autor" 
            id="autor" 
            placeholder="Autor" 
            onChange={(e) => setAutor(e.target.value)}
            className="input autor" 
            required
          /> 
        </div>
        <div className="form-control">
          <label htmlFor="texto">Texto:</label>
          <input 
            type="texto" 
            name="texto" 
            id="texto" 
            placeholder="Digite o conteudo da mensagem" 
            onChange={(e) => setTexto(e.target.value)}
            className="input texto" 
            required
          /> 
        </div>
       
        <input 
          type="submit" 
          value="Cadastrar Aviso" 
          className="button" 
        />
      </form>
    </div>
  );
}

export default CadastrarAvisos;
