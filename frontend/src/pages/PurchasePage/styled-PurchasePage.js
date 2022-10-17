import styled from 'styled-components';

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  box-sizing: border-box;
  background-color: white;
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
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    flex-direction: column;
  }
`

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 10px 0 0;
  padding: 10px;
  height: 450px;
  width: 35%;
  border-radius: 15px;
  background-color: #8AF2CC;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 100%;
    margin: 5px 0;
  }
`

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 0 10px;
  padding: 10px;
  height: 450px;
  width: 35%;
  border-radius: 15px;
  background-color: #b1b1b1;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 100%;
    margin: 0 0 5px 0;
  }
`

export const RightBoxUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80%;
  width: 100%;
  overflow: auto;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    overflow-x: hidden;
  }
`

export const RightBoxDown = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: end;
  padding: 5px;
  height: 20%;
  width: 100%;
`

export const ButtonClose = styled.button`
  font-size: 18px;
  color: #f3f2ef;
  height: 35px;
  width: 100px;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #f37272;
  &:hover {
    cursor: pointer;
    background-color: #f55151;
    transform: scale(1.03);
    transition: transform .2s;
  }
`

export const BoxListSummary = styled.div`
  width: 100%;
  overflow-y: auto;
  background-color: #ece6e6;
  padding: 2px 2px 2px 2px;
  border-radius: 10px;
`

export const LineFooter = styled.div`
`

export const PurchaseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 14px;
  border-radius: 10px;
  margin: 5px 0;
  background-color: ${props => props.status === true && props.value === props.id ? "orange" : "#6DBFA1"};
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 100%;
  }
`

export const PurchaseName = styled.div`
  display: flex;
  padding: 5px;
  flex: 1 0 30%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    flex: 1 0 20%;
  }
`

export const PurchaseDate = styled.div`
  display: flex;
  padding: 5px;
  flex: 1 0 20%;
`

export const PurchaseQtyProd = styled.div`
  padding: 5px;
  flex: 1 0 10%;
`

export const PurchaseQtyItens = styled.div`
  padding: 5px;
  flex: 1 0 10%;
`

export const PurchaseTotalValue = styled.div`
  padding: 5px;
  flex: 1 0 10%;
`

export const PurchaseDetail = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  flex: 1 0 10%;
`

export const PurchaseTrash = styled.div`
  display: flex;
  justify-content: start;
  padding: 5px;
  flex: 1 0 10%;
`

export const SummaryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  border-radius: 10px;
  margin: 5px 0;  
  background-color: #6DBFA1;
`

export const SummaryName = styled.div`
  display: flex;
  padding: 5px;
  flex: 1 0 60%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`

export const SummaryPrice = styled.div`
  padding: 5px;
  flex: 1 0 15%;
`

export const SummaryQty = styled.div`
  padding: 5px;
  flex: 1 0 10%;
`

export const SummaryTotalValue = styled.div`
  padding: 5px;
  flex-basis: 10%;
  flex: 1 0 15%;
`

export const ImgDetail = styled.img`
  width: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
  }
`

export const ImgTrash = styled.img`
  width: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s;
  }
`

export const ProductInfo2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 14px;
  border-radius: 10px;
  margin: 30px 0 5px 0;
  background-color: #1E7052;
`

export const PurchaseName2 = styled.div`
  text-align: left;
  font-weight: bold;
  padding: 5px;
  flex-basis: 30%;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    flex: 1 0 20%;
  }
`

export const PurchaseDate2 = styled.div`
  font-weight: bold;
  padding: 5px;
  flex-basis: 20%;
`

export const PurchaseQtyProd2 = styled.div`
  font-weight: bold;
  padding: 5px;
  flex-basis: 10%;
`

export const PurchaseQtyItens2 = styled.div`
  font-weight: bold;
  padding: 5px;
  flex-basis: 10%;
`

export const PurchaseTotalValue2 = styled.div`
  font-weight: bold;
  padding: 5px;
  flex-basis: 10%;
`

export const ProductDetail2 = styled.div`
  flex-basis: 10%;
  padding: 5px;
`

export const ProductTrash2 = styled.div`
  flex-basis: 10%;
  padding: 5px;
`

export const SummaryInfo2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 14px;
  border-radius: 10px;
  margin: 30px 0 5px 0;
  background-color: #1E7052;
`

export const SummaryName2 = styled.div`
  text-align: left;
  font-weight: bold;
  padding: 5px;
  flex: 1 0 60%;
`

export const SummaryPrice2 = styled.div`
  font-weight: bold;
  padding: 5px;
  flex: 1 0 15%;
`

export const SummaryQty2 = styled.div`
  font-weight: bold;
  padding: 5px;
  flex-basis: 10%;
  flex: 1 0 10%;
`

export const SummaryTotalValue2 = styled.div`
  font-weight: bold;
  padding: 5px;
  flex-basis: 10%;
  flex: 1 0 15%;
`

export const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92%;
`