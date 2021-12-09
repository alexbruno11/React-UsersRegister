
import styled from "styled-components";
import Background from '../../assets/back1.png'


export const Container = styled.div` 


background: url("${Background}");
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;


 `;

export const Img = styled.img` 

margin-top: 30px;


 `;

export const ContainerItens = styled.div`


padding: 50px 36px;
display: flex;
flex-direction: column;
background: linear-gradient(157.44deg,
rgba(255, 255, 255, 0.6) 0.84%,
rgba(255, 255, 255, 0.6) 0.85%, 
rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 61px 61px;
height: 90vh;
margin-bottom: 50px;







 `

export const H1 = styled.div`
margin-bottom: 80px;
font-style: normal;
font-weight: bold;
font-size: 34px;
line-height: 40px;
text-align: center;
color: #FFFFFF;

`;

export const InputLabel = styled.p`

margin-bottom: 1px;
font-weight: bold;
font-size: 18px;
line-height: 22px;
display: flex;
align-items: center;
letter-spacing: -0.408px;
color: #EEEEEE;
padding-left: 25px;

`;

export const Input = styled.input`

margin-bottom: 56px;
width: 342px;
height: 58px;
left: 36px;
top: 193px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
outline: none;
border: none;
padding-left: 25px;

font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 28px;
color: #FFFFFF;






`;

export const Button = styled.button`

width: 342px;
height: 74px;
left: 35px;
top: 497px;
font-size:17px;
line-height:28px;
color: white;
background: rgba(0, 0, 0, 0.8);
border-radius: 14px;
outline: none;
border: none;
margin-top: 100px;








cursor: pointer;
display: flex;
justify-content: center;
gap: 20px;
align-items: center;
&:hover {

    opacity: 0.8;
    
}

&:active {

    opacity: 0.5;
    

}

`;





