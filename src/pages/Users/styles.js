import styled from 'styled-components';
import Background from '../../Assets/background1.svg';
import { Link } from 'react-router-dom'


export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  height: 100vh;




`;
export const Image = styled.img`

margin-top: 50px;
`;

export const ContainerItens = styled.div`

width: 414px;
padding: 36px;
display: flex;
height: 100vh;

background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;

flex-direction:column;

backdrop-filter: blur(45px);

`;


export const H1 = styled.h1`

 font-weight: 700;
font-size: 34px;
line-height: 40px;

text-align: center;

color: white;

`;


export const Button = styled(Link)`
width: 342px;
height: 74px;
background: transparent;
border-radius: 14px;


margin-top: 120px;
padding-left: 14x;

border: 1px solid #ffff;

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;


/* identical to box height, or 165% */

display: flex;
align-items: center;
justify-content: center;


color: #FFFFFF;

cursor: pointer;

&:hover{
  opacity: 0.8;
}

&:active{
  opacity: 0.5;
}

img{
  transform: rotateY(180deg);
  margin-right: 10px;
}

`;



export const User = styled.li `
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;

background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;


width: 342px;
height: 58px;

border: none;
outline: none;

p{
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;

  color: white;
}


button {
  background: none;
  border: none;
  cursor: pointer;

}
`;

