import menuFetch from '../axios/config';
import { useState } from "react";
import React from 'react';
import './CardapioSemanal.css'; 
import { useNavigate } from "react-router-dom";

const CardapioSemanal = () => {
 
    const navigate = useNavigate()
    const [cardapio, setCardapio] = useState()
    //const [data, setData] = useState()
    const [dia_da_semana, setDia_da_semana] = useState()
   

    const createCardapioSemanal =  async (e) => {
        e.preventDefault();
        const cardapioSem = {cardapio, dia_da_semana }
        console.log(cardapioSem);
        await menuFetch.post("/cardapiosemanal", 
        {cardapio, dia_da_semana },
        )
    }


    return (
    <div className="new-cardapioSemanal">
      <h2>Cadastrar Cardápio Semanal</h2>
      <form onSubmit={(e) => createCardapioSemanal(e)}>
        <div className="form-control">
          <label htmlFor="cardapio">Cardápio:</label>
          <input 
            type="cardapio" 
            name="cardapio" 
            id="cardapio" 
            placeholder="Digite seu email" 
            onChange={(e) => setCardapio(e.target.value)}
            className="input cardapio" 
            required
          /> 
        </div>
        <div className="form-control">
          <label htmlFor="dia_da_semana">Dia da Semana:</label>
          <input 
            type="dia_da_semana" 
            name="dia_da_semana" 
            id="dia_da_semana" 
            placeholder="Digite o dia da semana" 
            onChange={(e) => setDia_da_semana(e.target.value)}
            className="input dia_da_semana" 
            required
          /> 
        </div>
       
        <input 
          type="submit" 
          value="Cadastrar Cardápio Semanal" 
          className="button" 
        />
      </form>
    </div>
  );
}

export default CardapioSemanal;
