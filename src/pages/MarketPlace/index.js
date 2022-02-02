import React, { Component } from 'react';
import MarketplaceHeader from '../../components/MarketplaceHeader'
import MarketPlaceMain from '../../components/MarketPlaceMain'
import Footer from '../../components/Footer'
import Cart from '../../components/Cart/'

import api from '../../services/api'

import {Container} from './styled'

class MarketPlace extends Component {

    state = {
        api: api,
        search: '',
        minPrice: '',
        maxPrice: '',
        order: 'name',
        cartItems: []
    }
    onAdd = (productId) => {
        const productInCart = this.state.cartItems.find(product => productId === product.id)

        if (productInCart) {
          const newProductsInCart = this.state.cartItems.map(product =>{
              if(productId === product.id) {
                  return {
                      ...product,
                      quantity: product.quantity + 1
                  }
              }

              return product
          })

          this.setState({cartItems: newProductsInCart})

        } else {
          const productToAdd = api.find(product => productId === product.id)

          const newProductsInCart = [...this.state.cartItems, {...productToAdd, quantity: 1}]
            
          this.setState({cartItems: newProductsInCart})
        }
      };
    onRemove = (productId) => {
        const productsInCart = this.state.cartItems.find(product => productId === product.id)

        if (productsInCart) {
          const newProductsInCart = this.state.cartItems.map(product =>{
              if(productId === product.id) {
                  return {
                      ...product,
                      quantity: product.quantity - 1
                  }
              }

              return product
          }).filter((product) => product.quantity > 0)

          this.setState({cartItems: newProductsInCart})
        }
      };
    render() {
        
        return (
            <Container>
                <MarketplaceHeader countCartItems={this.state.cartItems.length}/>
                <MarketPlaceMain products={this.state.api} onAdd={this.onAdd}/>
                <Cart cartItems={this.state.cartItems} onAdd={this.onAdd} onRemove={this.onRemove}/>
                <Footer />
            </Container>
        );
    }
}

export default MarketPlace;
