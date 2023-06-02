import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container,
  Image,
  ContainerItens,
  H1 ,
  Button,
  User} from "./styles";
import Avatar from '../../Assets/Avatar.svg'
import Arrow from '../../Assets/Arrow.svg'
import lixeira from '../../Assets/lixeira.svg'



function Users() {
   const [ users,setUsers] = useState([]);


 async function addNewUser(){

  const response  = await axios.post("http://localhost:3001/users", {



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
          <H1>Usuários</H1>


          <ul>
            {users.map(user => (
              <User key={user.id}>

              <p> {user.name}</p><p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)} ><img src={lixeira} alt="lata-de-lixo"></img></button>

              </User>
            ))}
          </ul>


            <Button to='/'>
             <img alt="seta" src={Arrow} /> Voltar

            </Button>

          </ContainerItens>
      </Container>
);

};


export default Users;
