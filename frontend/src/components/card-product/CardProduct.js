import React from 'react'
import * as s from "./styled-CardProduct"

export default function CardProduct(props) {

  return (
    <s.Card>
      <s.Title>
        {props.name}
      </s.Title>

      <s.Price>
        R$ {props.price}
      </s.Price>

      <s.Qty_stock>
        Disponíveis: { props.qty_stock > 0 ? props.qty_stock : "Indisponível"}
      </s.Qty_stock>

      <s.Button_add_cart 
        onClick={() => props.addProductCart(props.id, props.name, props.price, props.qty_stock)} 
        disabled={ (props.found || props.qty_stock < 1) ? true : false}
      >
        {props.qty_stock < 1 ? "Indisponível" : props.found ? "Já adicionado" : "Adicionar ao carrinho"}
      </s.Button_add_cart>
    </s.Card>
  )
}