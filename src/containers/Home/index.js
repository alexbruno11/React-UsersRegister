import React, {useState, useRef} from "react";
import People from '../../assets/first-image.png';
import Arrow from '../../assets/arrow.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";


 // eh chamado quando a aplicacao inicia (pag carregou, eh chamndo) ou quando se altera alguma info no array

import {
  Container,
  Img,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
}

  from "./styles";


const App = () => {

  const [users, setUsers] =useState ([]);
  const inputName = useRef()
  const inputAge = useRef()
  const navigate  =useNavigate()

   async function addNewUser() {
    
   const {data: newUsers1} =  await axios.post(
     
    "http://localhost:3001/users",
    {name: inputName.current.value, age: inputAge.current.value })
   
    setUsers ([...users, newUsers1] );

    navigate('/usuarios')

  
  }


  return (

    <Container>

      <Img alt="first-image" src={People} />

      <ContainerItens>

        <H1>Hello!</H1>

        <InputLabel>Name</InputLabel>

        <Input ref={inputName}  placeholder= "Name"></Input>

        <InputLabel>Age</InputLabel>

        <Input ref={inputAge}    placeholder= "Age"></Input>

      
        <Button onClick= {addNewUser} >
          Register <img alt="arrow" src={Arrow} />
        </Button>

       

      </ContainerItens>

    </Container>)
};

export default App;