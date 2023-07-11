import menuFetch from '../axios/config';
import { useState } from "react";
import React from 'react';
import './cadastrarAvisos.css'; 
import { useNavigate } from "react-router-dom";

const CadastrarPratos = () => {
 
    const navigate = useNavigate()
    const [nome, setNome] = useState()
    const [tipo, setTipo] = useState()
    //const [avaliacoes, setAvaliacoes] = useState()
    

    const createPratos =  async (e) => {
        e.preventDefault();
        const pratos = {nome, tipo }
        console.log(pratos);
        await menuFetch.post("/pratos", 
            {nome, tipo },
        )
    }

    return (
    <div className="new-prato">
      <h2>Cadastrar Prato</h2>
      <form onSubmit={(e) => createPratos(e)}>
        <div className="form-control">
          <label htmlFor="nome">Nome:</label>
          <input 
            type="nome" 
            name="nome" 
            id="nome" 
            placeholder="Digite o nome do prato" 
            onChange={(e) => setNome(e.target.value)}
            className="input nome"
            required
          /> 
        </div>
        <div className="form-control">
          <label htmlFor="tipo">Tipo:</label>
          <input 
            type="text" 
            name="tipo" 
            id="tipo" 
            placeholder="Digite o tipo" 
            onChange={(e) => setTipo(e.target.value)}
            className="input tipo"
            required
          /> 
        </div>
        <input 
          type="submit" 
          value="Cadastrar Prato" 
          className="button" 
        />
      </form>
    </div>
  );
}

export default CadastrarPratos;
