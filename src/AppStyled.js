import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";

export default createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif;
  }  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`  
export const Container = styled.div`
    display: flex;
    flex-direction: column;
`