import React from 'react';

import GlobalStyle from './AppStyled'

import {Container} from './AppStyled'

import RoutesApp from './routes'

export default class App extends React.Component {

  render() {
    
    return (
      <>
        <GlobalStyle /> 
        <Container>
         <RoutesApp />
        </Container>
      </>
    )
  }
  
}

 


