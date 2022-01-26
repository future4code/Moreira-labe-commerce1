/* import React from 'react'; */
import React, { Component } from 'react';
import './styled'
import { FiShoppingCart } from 'react-icons/fi';

import LogoMarket from '../../assets/logospace.png'
import { ImagemLogo } from './styled'
import { Div } from './styled'

class Index extends Component {
  render() {
    return (
        <Div>

            <Link to="/">
              <ImagemLogo src={LogoMarket} alt='Logo-Space-labenu' />
            </Link>
            
            <button>
              <FiShoppingCart style={{fontSize: 35, color: "white"}}/>
              {this.props.countCartItems ? (
              <span>{this.props.countCartItems}</span>
              ) : (
                ''
              )}
            </button>
            <ImagemLogo src={LogoMarket} alt='Logo-Space-labenu' />
            <FiShoppingCart style={{fontSize: 35, color: "white"}}/>   
        </Div>
    )
  }
}

export default Index