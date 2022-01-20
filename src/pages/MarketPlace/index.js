import React, { Component } from 'react';
import MarketplaceHeader from '../../components/MarketplaceHeader'
import MarketPlaceMain from '../../components/MarketPlaceMain'
import Footer from '../../components/Footer'

import {Container} from './styled'

class MarketPlace extends Component {
    render() {
        return (
            <Container>
                <MarketplaceHeader/>
                <MarketPlaceMain />
                <Footer />
            </Container>
        );
    }
}

export default MarketPlace;
