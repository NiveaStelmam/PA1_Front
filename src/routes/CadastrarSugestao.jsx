import menuFetch from '../axios/config';
import { useState } from "react";
import React from 'react';
import './CadastrarSugestao.css'; // arquivo CSS aqui
import { useNavigate } from "react-router-dom";

const CadastrarSugestao = () => {
 
    const navigate = useNavigate()
    const [nome_aluno, setNome_aluno] = useState() 
    const [email_aluno, setEmail_aluno] = useState()
    const [comentario_aluno, setComentario_aluno] = useState()
    

    const createSugestao =  async (e) => {
        e.preventDefault();
        const sugestao = {nome_aluno, email_aluno, comentario_aluno }
        console.log(sugestao);
        await menuFetch.post("/sugestoes", 
        {nome_aluno, email_aluno, comentario_aluno },
        )
    }


    return (
    <div className="new-sugestao">
      <h2>Cadastrar Sugestão</h2>
      <form onSubmit={(e) => createSugestao(e)}>
        <div className="form-control">
          <label htmlFor="nome_aluno">Nome:</label>
          <input 
            type="nome_aluno" 
            name="nome_aluno" 
            id="nome_aluno" 
            placeholder="Digite seu email" 
            onChange={(e) => setNome_aluno(e.target.value)}
            className="input nome_aluno" 
            required
          /> 
        </div>
        <div className="form-control">
          <label htmlFor="email_aluno">Email:</label>
          <input 
            type="email_aluno" 
            name="email_aluno" 
            id="email_aluno" 
            placeholder="Digite seu email" 
            onChange={(e) => setEmail_aluno(e.target.value)}
            className="input email_aluno"
            required
          /> 
        </div>
        <div className="form-control">
          <label htmlFor="comentario_aluno">Dê sua sugestão:</label>
          <input 
            type="comentario_aluno" 
            name="comentario_aluno" 
            id="comentario_aluno" 
            placeholder="Deixe seu comentário" 
            onChange={(e) => setComentario_aluno(e.target.value)}
            className="input comentario_aluno" 
            required
          /> 
        </div>
       
        <input 
          type="submit" 
          value="Cadastrar Sugestão" 
          className="button" 
        />
      </form>
    </div>
  );
}

export default CadastrarSugestao;
