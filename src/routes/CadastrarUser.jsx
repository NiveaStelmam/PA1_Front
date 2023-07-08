import React from 'react';
import './cadastrarUser.css'; // Importe o arquivo CSS aqui

const CadastrarUser = () => {
  return (
    <div className="new-user">
      <h2>Cadastrar Usuário</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Digite seu email" 
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
            className="input senha" // Adicione a classe 'senha' aqui
            required
          /> 
        </div>
        <div className="form-control">
          <label htmlFor="cargo">Cargo:</label>
          <input 
            type="text" 
            name="cargo" 
            id="cargo" 
            placeholder="Digite seu cargo" 
            className="input cargo" // Adicione a classe 'cargo' aqui
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
