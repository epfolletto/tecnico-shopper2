import styled from 'styled-components';

export const General = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
  background-color: #d4ffef;
`

export const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 475px;
  height: 600px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  background-color: #8AF2CC;
`

export const Title = styled.h1`
  text-align: center;
  margin: 10px 0 10px 0;
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 0;
`

export const Text = styled.div`
  font-size: 19px;
  text-align: justify;
  margin: 0 10px 10px 10px;
  word-wrap: break-word;
`

export const ButtonBack = styled.button`
  font-size: 20px;
  height: 40px;
  margin: 10px;
  text-align: center;
  border: none;
  border-radius: 10px;
  background-color: #2CA378;
  &:hover {
    cursor: pointer;
    background-color: green;
    transform: scale(1.03);
    transition: transform .2s;
  }
`