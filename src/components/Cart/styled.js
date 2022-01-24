import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    right: 0px;
    top: 100px;
    height: 40%;
    width: 24%;
    background-color:#FFFFFF;
    border-radius: 10px;
    padding: 10px;
    overflow-y: scroll;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
    .cart {
        display: flex;
        font-size: 18px;
        flex-direction: column;
        align-content: flex-end;
        align-items: center;
    }
    .buttons {
        display: flex;
        width: 20%;
        justify-content: space-around;
    }
    .total {
        padding-top: 10px;
        
    }
    .valor_total {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        font-weight: bold;
    }
`