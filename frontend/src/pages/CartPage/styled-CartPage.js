import styled from 'styled-components';

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  background-color: white;
  overflow-x: hidden;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    grid-template-rows: 60px 1fr 140px;
  }
`

export const LineHeader = styled.div`
`

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dcece6;
  height: 100%;
`

export const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95%;
  width: 35%;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 95%;
  }
`

export const BoxListTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100%;
  /* height: 65%; */
  border-radius: 15px;
  background-color: #8AF2CC;
`

export const BoxListDown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  /* height: 35%; */
`

export const Title = styled.div`
`

export const ProductsInCart = styled.div`
  height: 145px;
  width: 100%;
  overflow-y: auto;
`

export const LineFooter = styled.div`
`

export const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 10px;
  margin: 5px 0;
  background-color: #6DBFA1;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 70vw;
    height: 20px;
    font-size: 12px;
    margin: 5px 0 5px 38px;
  }
`

export const ProductName = styled.div`
  padding: 5px;
  flex: 1 1 60%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`

export const ProductPrice = styled.div`
  padding: 5px;
  flex: 1 1 10%;
`

export const ProductQtt = styled.div`
  padding: 5px;
  flex: 1 1 12%;
`

export const Input = styled.input`
  width: 40px;
`

export const ProductTotalValue = styled.div`
  padding: 5px;
  flex: 1 1 13%;
`

export const ProductTrash = styled.div`
  display: flex;
  justify-content: start;
  padding: 5px;
  flex: 1 1 5%;
`

export const ImgTrash = styled.img`
  width: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
  }
`

export const ProductTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px;
  margin: 10px 0 5px 0;
  background-color: #1E7052;
`

export const ProductInfo2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 14px;
  border-radius: 10px;
  margin: 5px 0 10px 0;
  background-color: #1E7052;
`

export const ProductName2 = styled.div`
text-align: left;
  font-weight: bold;
  padding: 5px;
  flex-basis: 58%;
`

export const ProductPrice2 = styled.div`
  font-weight: bold;
  padding: 5px;
  flex-basis: 10%;
`

export const ProductQty2 = styled.div`
  font-weight: bold;
  padding: 5px;
  flex-basis: 12%;
`

export const ProductTotalValue2 = styled.div`
  font-weight: bold;
  padding: 5px;
  flex-basis: 13%;
`

export const ProductTrash2 = styled.div`
 flex-basis: 5%;
 padding: 5px;
`

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`

export const BuyerName = styled.input`
  width: 100%;
  height: 35px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  margin: 0 0 20px 0;
  padding: 0 0 0 5px;
  &:focus {
    border: solid 1px gray;
    outline: 0;
  }
`

export const DeliveryDate = styled.input`
  width: 100%;
  height: 35px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  margin: 0 0 20px 0;
  padding: 0 0 0 5px;
  &:focus {
    border: solid 1px gray;
    outline: 0;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 0;
  width: 100%;
  height: 50px;
`

export const ButtonCancel = styled.button`
  font-size: 18px;
  height: 30px;
  width: 100%;
  margin: 0 5px 0 0;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: orange;
  &:hover {
    cursor: pointer;
    background-color: #ff8800;
    transform: scale(1.03);
    transition: transform .2s;
  };
  :disabled {
    cursor: default;
    transform: none;
    transition: none;
    background-color: #a7a7a7;
  };
`

export const ButtonSave = styled.button`
  font-size: 18px;
  height: 30px;
  width: 100%;
  margin: 0 0 0 5px;
  text-align: center;
  background-color: green;
  border: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #1E7052;
    transform: scale(1.03);
    transition: transform .2s;
  };
  :disabled {
    cursor: default;
    transform: none;
    transition: none;
    background-color: #a7a7a7;
  };
`

export const ButtonSaveBuy = styled.button`
  font-size: 18px;
  font-weight: bold;
  height: 40px;
  width: 100%;
  text-align: center;
  background-color: #5391c7;
  border: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background-color: #3d87c7;
    transform: scale(1.01);
    transition: transform .2s;
  }
`