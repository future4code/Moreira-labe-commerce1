import React from 'react';
import Header from './components/Header' 
import Main from './components/Main'
import Footer from './components/Footer'

import GlobalStyle from './AppStyled'

import {Container} from './AppStyled'

function App() {
  return (
    <Container>
     <GlobalStyle /> 
     <Header /> 
     <Main />
     <Footer />
    </Container>
  )
}

export default App


