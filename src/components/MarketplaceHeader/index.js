/* import React from 'react'; */
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
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
              <span>{this.props.countCartItems}</span>
            </button>
        </Div>
    )
  }
}

export default Index