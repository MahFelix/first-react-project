import styled from 'styled-components'

export const ContainerItens = styled.div`

width: 414px;
padding: 36px;
display: flex;
height: 100vh;

background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;

flex-direction:column;

${ props => props.isBlur && `

  backdrop-filter: blur(45px);
  min-height: calc(100vh - 170px);

`}

`;
