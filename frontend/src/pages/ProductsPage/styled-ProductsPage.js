import styled from 'styled-components';

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  box-sizing: border-box;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    grid-template-rows: 60px 1fr 140px;
  }
`


export const LineHeader = styled.div`
`

export const Main = styled.div`
  display: flex;
  overflow: auto;
`

export const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  width: 12%;
  height: 100%;
  background-color: #575780;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 30%;
  }
`

export const Filter = styled.div`
  color: white;
  margin: 20px 0;
`

export const MainRight = styled.div`
  display: flex;
  width: 88%;
  background-color: #d4ffef;
  overflow: auto;
`

export const Box = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 1fr 60px;
`

export const ListProducts = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`

export const LinePagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const NumProdPgn = styled.select`
  width: 80%;
  font-size: 16px;
  height: 35px;
  margin: 20px 0;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: lightgray;
  &:focus {
    border: solid 1px gray;
    box-shadow: 0;
  }
`

export const Search = styled.input`
  width: 80%;
  font-size: 16px;
  height: 35px;
  margin: 20px 0;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: lightgray;
  &:focus {
    border: solid 1px gray;
    box-shadow: 0;
    outline: 0;
  }
`

export const OrderBy = styled.select`
  width: 80%;
  font-size: 16px;
  height: 35px;
  margin: 20px 0;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: lightgray;
  &:focus {
    border: solid 1px gray;
    box-shadow: 0;
  }
`

export const MinPrice = styled.input`
  width: 80%;
  font-size: 16px;
  height: 35px;
  margin: 20px 0;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: lightgray;
  &:focus {
    border: solid 1px gray;
    box-shadow: 0;
    outline: 0;
  }
`

export const MaxPrice = styled.input`
  width: 80%;
  font-size: 16px;
  height: 35px;
  margin: 20px 0;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: lightgray;
  &:focus {
    border: solid 1px gray;
    box-shadow: 0;
    outline: 0;
  }
`

export const ButtonApplyFilter = styled.button`
  width: 80%;
  font-size: 18px;
  font-weight: bold;
  height: 40px;
  text-align: center;
  margin: 40px 0;
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

export const LineFooter = styled.div`
`