import styled from "styled-components";

export const Container = styled.div`
    background-color: #c5d1eb;
    
`
export const ContainerCards = styled.div`
    width: 80%;
    display: grid;
    padding:50px;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(300px, 3fr));
    grid-gap: 10px;
    justify-items: center;
    align-content: space-evenly;
    
`
export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 10px;
    justify-content: space-around;
    margin-top: 30px;
    margin-left: 100px;
    margin-right: 100px;
    input { 
        border: 0;
        width: 20%;
        height: 20px;
        padding: 10px;
        border-radius: 4px;
    }
`
export const Select = styled.select `
    height: 40px;
    width: 80px;
    text-align: center;
    font-weight: bolder;
    border-radius: 4px;
`

export const ContainerDiv = styled.div `
    height: 40px;
    font-weight: bolder;

`