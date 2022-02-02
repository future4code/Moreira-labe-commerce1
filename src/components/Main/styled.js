import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    padding: 30px;
    grid-template-columns: 1fr 1fr ;
    background-color: #c5d1eb;
    height: 100vh;

    @media only screen and (max-width: 600px) {
    
    display: grid;
    grid-template-columns: 1fr ;
    height: 100%;
  }
`
export const ContainerLeft = styled.div`
    display: flex;
    align-items: center;
    //background-color: red;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 90%;
        margin: 0 auto;
        padding: 30px;
        //background-color: grey;
        height: 100vh;
    }
    h1 {
        font-size: 2.5rem;
        color: #3f3d56;
        font-weight: bold;
    }
    p {
        width: 100%;
        font-size: 1.5rem;
        line-height: 120%;

        letter-spacing: 0.1em;
        color: #3f3d56;
        font-weight: bold;
        
    }

`
export const Button = styled.button`
    background-color:#3f3d56;
    height: 50px;
    width: 50%;
    border: 0;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 20px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    :hover {
        background-color:#FFFFFF;
        color: #3f3d56;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`
export const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    div {
        width: 90%;
        margin: 0 auto;
        padding: 30px;
        //background-color: grey;
        height: 80vh;
    }
    img {
        width: 42%;
        padding: 10px;
    }
    img.img3 {
        margin-left: 20%;
    }
    
    @media only screen and (max-width: 600px) {
        div{
            height: 100%;
            display: grid;
            grid-template-columns: 1fr;
            align-items: center;
        }
        img {
            width: 80%;
        
        }
        img.img3 {
        margin-left: 0;
    }
    }   
`