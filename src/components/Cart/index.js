import React, { Component } from 'react';
import { Container } from './styled';

class Cart extends Component {
    
    render() {

        const { cartItems, onAdd, onRemove } = this.props;

        const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.value, 0);
       
        return (

            this.props.cartItems.length === 0 ?

                <Container style={{ display: "none" }}>
                </Container>
                :
                <Container id="open">
                    <h2>Itens do carrinho</h2>
                    <div>

                        {cartItems.length === 0 && <div>Carrinho vazio</div>}
                        {cartItems.map((item) => (
                             item.quantity !== 0 && (
                            <div key={item.id} className="cart">
                                
                                <div className="name">{item.name}</div>
                                <hr></hr>
                                <div className="buttons">
                                    <button onClick={() => onRemove(item.id)} className="remove">
                                        -
                                    </button>{' '}
                                    <button onClick={() => onAdd(item.id)} className="add">
                                        +
                                    </button>
                                </div>
                                <div className="total">
                                    {item.quantity} x R${item.value.toFixed(2)}
                                </div>
                                <hr></hr>
                            </div>
                             )
                        ))}

                        {cartItems.length !== 0 && (
                            <>
                                <hr></hr>
                                <div className="valor_total">
                                    <div className="col-2">Valor Total</div>
                                    <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                                </div>

                                <hr />
                            </>
                        )}
                    </div>
                </Container>
        );
    }
}

export default Cart;
