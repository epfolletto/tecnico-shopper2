import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fffafa;
  margin: 30px;
  padding: 10px;
  width: 190px;
  height: 270px;
  border-radius: 10px;
  box-shadow: 0 4px 3px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
`

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  height: 50%;
`

export const Price = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: green;
`

export const Qty_stock = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: gray;
`

export const Button_add_cart = styled.button`
  font-size: 16px;
  width: 95%;
  height: 30px;
  margin: 10px 0;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: ${props => !props.isInCar ? "#2DA679" : "#a7a7a7"};
  &:hover {
		cursor: pointer;
    transform: scale(1.03);
    transition: transform .2s;
    background-color: #1E7052;
	};
  :disabled {
    cursor: default;
    transform: none;
    transition: none;
    background-color: #a7a7a7;
    color: #646464;
  };
  @media screen and (max-device-width : 480px){
    width: 90%;
    margin-bottom: 5px;
    border-radius: 5px;
  };
`