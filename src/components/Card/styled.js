import styled from "styled-components";
export const Container = styled.div`
    ul {
        display: flex;
        list-style: none;
    }
     img {
        width: 300px;
        height: 300px ;
    } 
    
    .card {
        
        width: 300px;
        height:450px;
    }
    .card_content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #616161;  
        background: -webkit-linear-gradient(to right, #9bc5c3, #616161);  
        background: linear-gradient(to right, #9bc5c3, #616161); 
        
        width: 300px;
        margin-top: -5px;
    }       
    .card_title {
      color: #ffffff;
      font-size: 19px;
      font-weight: 700; 
      text-transform: capitalize;
      margin: 15px 0px;
    }
    .card_text {
      color: #ffffff;
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 20px;    
      font-weight: 900;
    }
    .btn {
        color: #ffffff;
        padding: 3px 5px;
        font-size: 14px;
        text-transform: uppercase;
        border-radius: 4px;
        font-weight: 400; 
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: transparent;
        margin-bottom:10px;
        
    }
    .btn:hover {
    background-color: rgba(255, 255, 255, 0.12);
    }
`