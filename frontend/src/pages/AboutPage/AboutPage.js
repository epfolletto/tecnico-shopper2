import React from 'react';
import { useNavigate } from "react-router-dom";
import { Text, Textos, ButtonBack } from "./styled-AboutPage";
import * as s from "./styled-AboutPage";
import { goToStartPage } from "../../router/coordinator.js";

export default function About(props) {

  const navigate = useNavigate();

  return (
    <s.General>
      
      <s.CenterBox>
        <s.Title>Projeto Shopper</s.Title>

        <s.Texts>
          <Text>
            Este projeto faz parte do processo de seleção da empresa Shopper, o qual consiste em um formulário de cadastro de pedidos de supermercado.
          </Text>

          <Text>
            Trata-se de uma ferramenta onde o usuário navega por uma lista de produtos e adiciona os mesmos ao seu carrinho. Na sequência, informa o nome e a data de entrega e salva sua compra (além de editar os itens do carrinho caso queira). É possível ter acesso a uma lista de todas as compras salvas, obter detalhes e deletar as mesmas.
          </Text>

          <Text>
            Foram desenvolvidos tanto o frontend quanto backend. O projeto foi hospedado na aws.
            <br />
            <b>Frontend:</b> foram utilizados HTML, JavaScript, Styled-Components e paradigma funcional.
            <br />
            <b>Backend:</b> foram utilizados TypeScript, MySQL, Express, Knex (usando query raw e query builder), paradigma de orientação a objetos e conceito de APIs REST.
          </Text>
        </s.Texts>

        <Text>
          <b>Desenvolvido por: Evandro Paulo Folletto</b>
        </Text>

        <ButtonBack onClick={() => goToStartPage(navigate)}>Voltar</ButtonBack>
      </s.CenterBox>

    </s.General>
  );
};