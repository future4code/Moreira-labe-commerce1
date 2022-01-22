
import styled from "styled-components";

export const Boxheader = styled.header`
    display: flex;
    background-color:#3f3d56;
    justify-content: space-evenly;
    align-items: center;
    height: 90px;
    @media only screen and (max-width:600px){
        display: flex;
        justify-content: space-between;
        padding: 0px 20px;
    }  
`
export const Listas = styled.li`
    list-style: none;
    font-weight: bold;
    color: #FFFFFF;
    cursor: pointer;
    &:nth-child(1){
        &:hover{
        border-bottom: 1px solid black;
    }
    }
    &:nth-child(2){
        &:hover{
        border-bottom: 1px solid black;
    }
    }
    &:nth-child(3){
        &:hover{
        border-bottom: 1px solid black;
    }
    }     
`
export const BtnHamb = styled.button`
    display: none;
    @media only screen and (max-width:600px){
        display: block;
        cursor: pointer;
        height: 50px;
        background-color: white;
        border:none;
        border-radius: 5px;
    }
`
export const ImgHamb = styled.img`
    width:30px
`
export const Notlist = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 85%;
    @media only screen and (max-width:600px){
        background-color: red;
        display: none;
    }
    
`
export const Imagem = styled.img`
    margin:5px ;
    width: 70px;
    cursor: pointer;
`
export const Botao = styled.button`
    
    width: 150px;
    border-radius: 10px;
    border:none;
    background-color:#1A181B ;
    cursor: pointer;
    color: white;   
    font-weight: bold;
    padding: 12px;
    &:hover{
        background-color:white;
        color:black;
        border: 1px solid black;
    }
` 

