import React, { Component } from 'react';
import Header from '../../components/Header' 
import Main from '../../components/Main'
import Footer from '../../components/Footer'

import {Container} from './styled'

class Home extends Component {

    render() {
        return (
            <Container>
                <Header/>
                <Main/>
                <Footer />
            </Container>
        );
    }
}

export default Home;
