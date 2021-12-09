import React, {useState, useEffect} from 'react';
import Avatar from '../../assets/avatar.png';
import Arrow from '../../assets/arrow.png';
import Trash from '../../assets/trash.png';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

 // eh chamado quando a aplicacao inicia (pag carregou, eh chamndo) ou quando se altera alguma info no array

import {
  Container,
  Img,
  ContainerItens,
  H1,
  Button,
  User
}

  from "./styles";


const Users = () => {

  const [users, setUsers] =useState ([]);
  const navigate = useNavigate()
 


  useEffect (()=> {

    async function fetchUsers() {
      const {data: newUsers1} =  await axios.get(
 
        "http://localhost:3001/users")

        setUsers (newUsers1);
    }
    
  fetchUsers()

},[])

function goBackPage() {
  navigate("/")
}



   async function deleteUser (userId) {

   await axios.delete(`http://localhost:3001/users/${userId}`);
     const newUsers1 = users.filter ((user)=> user.id !== userId)
     
     setUsers (newUsers1);
   }



  return (

    <Container>

      <Img alt="first-image" src={Avatar} />

      <ContainerItens>



        <H1>Users</H1>

        

         

       

        <ul >

          {users.map((user) => (

            <User key={user.id}>

              <p>{user.name} </p>   <p>{user.age}</p>

              <button onClick={()=> deleteUser(user.id)}> 
               
                <img src={Trash} alt="latalixo"></img> 
              
              </button>

            </User>

          ))}

        </ul>

        <Button onClick = {goBackPage}>
        <img alt="arrow" src={Arrow}/> Back
        </Button>

      </ContainerItens>

    </Container>)
}

export default Users;