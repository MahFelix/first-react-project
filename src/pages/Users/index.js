import React, { useState,useRef, useEffect } from 'react';
import axios from 'axios';
import {Container,
  Image,
  ContainerItens,
  H1 , InputLabel,
  Input, Button,
  User} from "./styles";
import Avatar from '../../Assets/Avatar.svg'
import Arrow from '../../Assets/Arrow.svg'
import lixeira from '../../Assets/lixeira.svg'



function App() {
   const [ users,setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()


 async function addNewUser(){

  const response  = await axios.post("http://localhost:3001/users", {
    name: inputName.current.value,
    age:inputAge.current.value,


  });

  console.log(response.data)

 setUsers([
  ...users, response.data
  ]);



}

useEffect(() => {
  async function fecthUsers (){
 const {data: newUsers } = await axios.get("http://localhost:3001/users")

setUsers(newUsers)
}

fecthUsers()
}, [users])

async function deleteUser(userId) {
 await axios.delete(`http://localhost:3001/users/${userId}`)

  const newUsers = users.filter(user => user.id !== userId)
  setUsers(newUsers)

}


  return (
      <Container>
        <Image alt='Logo-Imagem ' src={Avatar} />
        <ContainerItens>
          <H1>Olá</H1>

          <InputLabel> Nome </InputLabel>
        <Input ref={inputName} placeholder='Nome'/>

            <InputLabel> Idade </InputLabel>
          <Input ref={inputAge} placeholder='Idade'/>

          <Button onClick={addNewUser}>
            Cadastrar <img alt="seta" src={Arrow} />
            </Button>

          <ul>
            {users.map(user => (
              <User key={user.id}>

              <p> {user.name}</p><p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)} ><img src={lixeira} alt="lata-de-lixo"></img></button>

              </User>
            ))}
          </ul>


          </ContainerItens>
      </Container>
);

};


export default App;
