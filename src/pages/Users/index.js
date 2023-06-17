import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router'

import {Container,
  Image,
  User} from "./styles";

import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens"
import Button from "../../components/Button"


import Avatar from '../../Assets/Avatar.svg'
import Arrow from '../../Assets/Arrow.svg'
import lixeira from '../../Assets/lixeira.svg'



function Mail() {
   const [users,setUsers] = useState([]);
   const history = useHistory()


 // eslint-disable-next-line no-unused-vars
 async function addNewUser(){

  const response  = await axios.post("https://nodeproject-n7l9.vercel.app/users", {



  });

  console.log(response.data)

 setUsers([
  ...users, response.data
  ]);



}

useEffect(() => {
  async function fecthUsers (){
 const {data: newUsers } = await axios.get("https://nodeproject-n7l9.vercel.app/users")

setUsers(newUsers)
}

fecthUsers()
}, [users])

async function deleteUser(userId) {
 await axios.delete(`https://nodeproject-n7l9.vercel.app/users/${userId}`)

  const newUsers = users.filter(user => user.id !== userId)
  setUsers(newUsers)

}


function goBackPage(){
    history.push('/')

}

  return (
      <Container>
        <Image alt='Logo-Imagem ' src={Avatar} />
        <ContainerItens isBlur={true} >
          <H1>Usuários</H1>


          <ul>
            { users.map(user =>(
              <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)} ><img src={lixeira} alt="lata-de-lixo"></img></button>
              </User>

            ))};
         </ul>

            <Button isBack={true} onClick={goBackPage}>
             <img alt="seta" src={Arrow} /> Voltar

            </Button>

          </ContainerItens>
      </Container>
);

};


export default Mail;
