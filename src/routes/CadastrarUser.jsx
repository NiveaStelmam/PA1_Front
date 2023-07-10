import menuFetch from '../axios/config';
import { useState } from "react";
import React from 'react';
import './cadastrarUser.css'; // Importe o arquivo CSS aqui
import { useNavigate } from "react-router-dom";


const CadastrarUser = () => {
 
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()
    //const [cargo, setCargo] = useState()

    const createUser =  async (e) => {
        e.preventDefault();
        const user = {email, nome, senha }
        console.log(user);
        await menuFetch.post("/", 
            {email, nome, senha},
        )
    }


    return (
    <div className="new-user">
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={(e) => createUser(e)}>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Digite seu email" 
            onChange={(e) => setEmail(e.target.value)}
            className="input email" // Adicione a classe 'email' aqui
            required
          /> 
        </div>
        <div className="form-control">
          <label htmlFor="nome">Nome:</label>
          <input 
            type="text" 
            name="nome" 
            id="nome" 
            placeholder="Digite seu nome" 
            onChange={(e) => setNome(e.target.value)}
            className="input nome" // Adicione a classe 'nome' aqui
            required
          /> 
        </div>
        <div className="form-control">
          <label htmlFor="senha">Senha:</label>
          <input 
            type="password" 
            name="senha" 
            id="senha" 
            placeholder="Digite sua senha" 
            onChange={(e) => setSenha(e.target.value)}
            className="input senha" // Adicione a classe 'senha' aqui
            required
          /> 
        </div>
       
        <input 
          type="submit" 
          value="Cadastrar Usuário" 
          className="button" // Adicione a classe 'button' aqui
        />
      </form>
    </div>
  );
}

export default CadastrarUser;
