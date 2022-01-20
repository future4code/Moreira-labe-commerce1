import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/index' 

const Container = styled.div`
  background-color: blue;
  border-bottom: 1px solid black;
`
export default function App() {
  return (
    <Container>
      <Header />
    </Container>
    
    
  );
}


