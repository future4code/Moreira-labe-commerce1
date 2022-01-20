import React from "react";
import styled from "styled-components";

export const Boxheader = styled.header`
    display: flex;
    background-color:#DADAD9;
    justify-content: space-evenly;
    height: 80px;
    
`
export const Listas = styled.li`
    list-style: none;
    font-weight: bold;
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
export const Notlist = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 85%;
    
`
export const Imagem = styled.img`
    margin:5px ;
`
export const Botao = styled.button`
    height: 22px;
    width: 80px;
    border-radius: 15px;
    border:none;
    background-color:#1A181B ;
    cursor: pointer;
    color: white;   
    &:hover{
        background-color:white;
        color:black;
        border: 1px solid black;
    }
` 

