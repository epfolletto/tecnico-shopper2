import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  background-color: #fffafa;
  box-sizing: border-box;
  width: 100%;
`

export const Left = styled.p`
  margin: 0 0 0 20px;
  font-size: 16px;
`

export const Center = styled.p`
  font-size: 16px;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 0;
`

export const TextFollow = styled.p`
  margin: 0 0 4px 0;
  font-size: 14px;
`

export const SocialMidias = styled.div`
  display: flex;
  justify-content: center;
  margin: 4px 0 0 0;
`

export const ImageSocialMidia = styled.img`
  width: 30px;
  margin: 0 10px 0 5px;
  :hover{
		cursor: pointer;
    transform: scale(1.05);
    transition: transform .1s;
  }
`