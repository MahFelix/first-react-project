import styled from 'styled-components';
import Background from '../../Assets/background.svg';


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






export const InputLabel = styled.p`
letter-spacing: -0.408px;
color: #EEEEEE;
color: white;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
`;

export const Input = styled.input`

width: 342px;
height: 58px;
padding-left: 25px;

background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;

margin-bottom: 36px;
border: none;
border-radius: 10px;
outline: none;

font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 28px;

color: #FFFFFF;


`;




