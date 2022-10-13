import React from 'react';
import { useNavigate } from "react-router-dom";
import * as s from "./styled-StartPage";
import img_logo from './../../assets/images/logo.png';
import { goToProductsPage, goToAboutPage } from "./../../router/coordinator.js";

export default function Inicio(props) {

  const navigate = useNavigate();

  return (
    <s.General>

      <s.CenterBox>
        <s.Title>Seja bem vindo(a) a</s.Title>

        <s.Center>
          <s.ImgLogo src={img_logo} />
        </s.Center>

        <s.Buttons>
          <s.ButtonShopper onClick={() => goToProductsPage(navigate)}>Shopper</s.ButtonShopper>
          <s.ButtonAbout onClick={() => goToAboutPage(navigate)}>Sobre</s.ButtonAbout>
        </s.Buttons>
      </s.CenterBox>

    </s.General>
  );
};