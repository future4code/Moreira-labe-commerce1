/* import React from 'react'; */
import React, { Component } from 'react';
import './styled'
import { FiShoppingCart } from 'react-icons/fi';

import LogoMarket from '../../assets/logospace.png'
import { ImagemLogo } from './styled'
import { Div } from './styled'

import Modal from '../Modal/modal'

class Index extends Component {
  render() {
    return (
        <Div>
            <ImagemLogo src={LogoMarket} alt='Logo-Space-labenu' />
            <FiShoppingCart style={{fontSize: 35, color: "white"}}/>   
        </Div>
    )
  }
}

export default Index