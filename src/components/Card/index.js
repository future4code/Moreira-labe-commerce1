import React, { Component } from 'react';

import {Container} from './styled'

class Card extends Component {
    render() {

      const { product, onAdd } = this.props;
        return (
            <Container>
                <div className="main">
                    <ul className="cards">
                      <li className="cards_item">
                        <div className="card">
                          <div className="card_image"><img src={product.imageUrl} alt={`img${product.id}`}/></div>
                          <div className="card_content">
                            <h3 className="card_title">{product.name}</h3>
                            <p className="card_text">R$ : {product.value}</p>
                            <button className="btn card_btn" onClick={() => onAdd(product.id)}>Comprar</button>
                          </div>
                        </div>
                      </li>
                    </ul>
                </div>

            </Container>
        );
    }
}

export default Card;
