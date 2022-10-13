import * as s from './styled-Header';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { goToCartPage, goToProductsPage, goToPurchasePage, goToStartPage } from "./../../router/coordinator.js";
import logo from "./../../assets/images/logo.png";
import cart from "./../../assets/images/cart.png";

export default function Header(props) {
  
  const navigate = useNavigate();
  let location = useLocation()

  return (
    <s.Header>
      {
        location.pathname === "/products" ? 
          <>
            <s.ImgLogo src={logo} onClick={() => goToStartPage(navigate)} alt="Home" />
            <s.ImgCart src={cart} onClick={() => goToCartPage(navigate)} alt="Carrinho" />
          </>
        :
        location.pathname === "/cart" ? 
          <>
            <s.ButtonBackOrPurchase onClick={() => goToProductsPage(navigate)} alt="Voltar">Voltar</s.ButtonBackOrPurchase>
            <s.ButtonBackOrPurchase onClick={() => goToPurchasePage(navigate)} alt="Histórico">Histórico</s.ButtonBackOrPurchase>
          </>
        :
          <>
            <s.ImgLogo src={logo} onClick={() => goToProductsPage(navigate)} alt="Home" />
            <s.ButtonBackOrPurchase onClick={() => goToCartPage(navigate)} alt="Voltar">Voltar</s.ButtonBackOrPurchase>
          </>
      }
    </s.Header>
  )
};