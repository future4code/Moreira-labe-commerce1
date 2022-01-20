import React, { Component } from 'react';
import MarketplaceHeader from '../../components/MarketplaceHeader'
import Footer from '../../components/Footer'

class MarketPlace extends Component {
    render() {
        return (
            <div>
                <MarketplaceHeader/>
                <Footer />
            </div>
        );
    }
}

export default MarketPlace;
