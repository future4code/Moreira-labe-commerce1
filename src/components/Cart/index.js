import React, { Component } from 'react';
import { Container } from './styled';

class Cart extends Component {
    state = {
        closeDropdown: ""
    }

    closeDropdown = () => {
        let container = document.getElementById("open");

        this.setState(container.style.display = 'none');

    };
    render() {

        const { cartItems, onAdd, onRemove } = this.props;

        const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.value, 0);
       
        return (

            this.props.cartItems.length === 0 ?

                <Container style={{ display: "none" }}>
                    <button onClick={this.closeDropdown}>X</button>
                    <h2>Cart Items</h2>
                    <div>

                        {cartItems.length === 0 && <div>Cart is empty</div>}
                        {cartItems.map((item) => (
                            <div key={item.id} className="row">
                                <div className="col-2">{item.name}</div>
                                <div className="col-2">
                                    <button onClick={() => onRemove(item)} className="remove">
                                        -
                                    </button>{' '}
                                    <button onClick={() => onAdd(item)} className="add">
                                        +
                                    </button>
                                </div>

                                <div className="col-2 text-right">
                                    {item.quantity} x ${item.value}
                                </div>
                            </div>
                        ))}

                        {cartItems.length !== 0 && (
                            <>
                                <hr></hr>
                                <div className="row">
                                    <div className="col-2">Items Price</div>
                                    <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
                                </div>

                               
                                <hr />
                            </>
                        )}
                    </div>
                </Container>
                :
                <Container id="open">
                    <button onClick={this.closeDropdown}>X</button>
                    <h2>Itens do carrinho</h2>
                    <div>

                        {cartItems.length === 0 && <div>Carrinho vazio</div>}
                        {cartItems.map((item) => (
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
                                    {item.quantity} x ${item.value}
                                </div>
                                <hr></hr>
                            </div>
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
