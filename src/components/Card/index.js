import React, { Component } from 'react';

import {Container} from './styled'

class Card extends Component {
    render() {
        return (
            <Container>
                <div className="main">
                    <ul className="cards">
                      <li className="cards_item">
                        <div className="card">
                          <div className="card_image"><img src={this.props.img} alt={`img${this.props.id}`}/></div>
                          <div className="card_content">
                            <h3 className="card_title">{this.props.name}</h3>
                            <p className="card_text">R$ : {this.props.price}</p>
                            <button className="btn card_btn">Comprar</button>
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
