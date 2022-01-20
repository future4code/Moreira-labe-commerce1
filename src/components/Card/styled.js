import styled from "styled-components";

export const Container = styled.div`
    ul {
        display: flex;
    }
    img {
        width: 100%;
        height: 30vh;
    }
    .btn {
        color: #ffffff;
        padding: 0.8rem;
        font-size: 14px;
        text-transform: uppercase;
        border-radius: 4px;
        font-weight: 400;
        display: block;
        width: 100%;
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: transparent;
    }

    .btn:hover {
    background-color: rgba(255, 255, 255, 0.12);
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .cards_item {
        display: flex;
        padding: 1rem;
    }

    .card {
        background-color: white;
        border-radius: 0.25rem;
        box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        height: 48vh ;
        width: 100%;
    }
    .card_content {
        padding: 1.5rem;
        background: #616161;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #9bc5c3, #616161);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #9bc5c3, #616161); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }       

    .card_title {
      color: #ffffff;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: capitalize;
      margin: 0px;
    }

    .card_text {
      color: #ffffff;
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 1.25rem;    
      font-weight: 900;
    }

`