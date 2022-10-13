import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  border-top: solid 6px #2DA679;
  background-color: #fffafa;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
`

export const ImgLogo = styled.img`
  width: 160px;
  margin: 0 0 0 20px;
  &:hover {
		cursor: pointer;
    transform: scale(1.03);
    transition: transform .2s;
	}
`

export const ImgCart = styled.img`
  width: 40px;
  margin: 0 20px 0 0;
  &:hover {
		cursor: pointer;
    transform: scale(1.03);
    transition: transform .2s;
	}
`

export const ButtonBackOrPurchase = styled.button`
  font-size: 18px;
  color: #ddd9ce;
  height: 35px;
  width: 100px;
  margin: 0 20px;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #2DA679;
  &:hover {
    cursor: pointer;
    background-color: #1E7052;
    transform: scale(1.03);
    transition: transform .2s;
  }
`

export const Search = styled.input`
  width: 200px;
  font-size: 16px;
  height: 35px;
  margin: 0;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: lightgray;
  &:focus {
    border: solid 1px gray;
    box-shadow: 0;
    outline: 0;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 5px 0 5px 0;
  }
`

export const OrderBy = styled.select`
  width: 200px;
  font-size: 16px;
  height: 35px;
  margin: 0;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: lightgray;
  &:focus {
    border: solid 1px gray;
    box-shadow: 0;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 5px 0 5px 0;
    color: black;
  }
`

export const MinPrice = styled.input`
  width: 200px;
  font-size: 16px;
  height: 35px;
  margin: 0;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: lightgray;
  &:focus {
    border: solid 1px gray;
    box-shadow: 0;
    outline: 0;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 5px 0 5px 0;
  }  
`

export const MaxPrice = styled.input`
  width: 200px;
  font-size: 16px;
  height: 35px;
  margin: 0;
  border: none;
  border-radius: 10px;
  padding-left: 10px;
  background-color: lightgray;
  &:focus {
    border: solid 1px gray;
    box-shadow: 0;
    outline: 0;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 5px 0 5px 0;
  }
`