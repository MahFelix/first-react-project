import styled from "styled-components";


export const Button = styled.button`
width: 342px;
height: 74px;

background: ${ props => props.isBack ? 'transparent': ' rgba(0, 0, 0, 0.8);' };
border-radius: 14px;
margin-top: 150px;
padding-left: 14x;
border: ${ props => props.isBack ? '1px solid #ffff' :'none' };

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
  margin-left: 20px;
}

img{
  transform: ${ props => props.isBack && 'rotateY(180deg)'};
}



`;