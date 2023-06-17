import React, { useState,useRef,} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';

import People from '../../Assets/social.svg'
import Arrow from '../../Assets/Arrow.svg'

import H1 from '../../components/Title';
import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button'

import {Container,
  Image,
  InputLabel,
  Input,
} from "./styles";



function App() {
   const [ users,setUsers] = useState([]);
  const history = useHistory()
  const inputName = useRef()
  const inputAge = useRef()



 async function addNewUser(){

  const response  = await axios.post("http://localhost:3000/users", {
    name:inputName.current.value,
    age:inputAge.current.value,


  });

  console.log(response.data)

 setUsers([
  ...users, response.data
  ]);


  history.push('/usuarios')

}



  return (
      <Container>
        <Image alt='Logo-Imagem ' src={People} />
        <ContainerItens>
          <H1>Olá</H1>

          <InputLabel> Nome </InputLabel>
        <Input ref={inputName} placeholder='Nome'/>

            <InputLabel> Idade </InputLabel>
          <Input ref={inputAge} placeholder='Idade'/>

          <Button onClick={addNewUser}> Cadastrar <img alt="seta" src={Arrow} />
            </Button>


          </ContainerItens>
      </Container>
);

};


export default App;
