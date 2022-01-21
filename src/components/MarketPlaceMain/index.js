import React, { Component } from 'react';

import Card from '../Card/index'

import { Container, ContainerCards, ContainerInput, Select, ContainerDiv } from './styled'
import api from '../../services/api.js'

class MarketPlaceMain extends Component {

    state = {
        api: api,
        search: '',
        minPrice: '',
        maxPrice: '',
        order: 'name'
    }
    OnChangeMinPrice = (event) => {
        this.setState({ minPrice: event.target.value })
    }
    OnChangeMaxPrice = (event) => {
        this.setState({ maxPrice: event.target.value })
    }
    OnChangeSearch = (event) => {
        this.setState({ search: event.target.value })
    }
    OnChangeOrder = (event) => {
        this.setState({ order: event.target.value })
    }
    render() {

        return (
            <>
                <Container>
                    <ContainerInput>
                        <input
                            placeholder="Pesquisar"
                            type="text"
                            onChange={this.OnChangeSearch}
                            value={this.state.search}
                        />
                        <input
                            placeholder="Preço Mínimo"
                            type="number"
                            onChange={this.OnChangeMinPrice}
                            value={this.state.minPrice}
                        />
                        <input
                            placeholder="Preço Máximo"
                            type="number"
                            onChange={this.OnChangeMaxPrice}
                        />
                        <ContainerDiv>
                        <label for="sort">Ordem: </label>
                        <Select 
                            name="sort"
                            value={this.state.order}
                            onChange={this.OnChangeOrder}
                            >
                            <option value="name"> Título </option>
                            <option value="value"> Preço </option>
                        </Select>
                        </ContainerDiv>
                    </ContainerInput>

                    <ContainerCards>
                        {this.state.api
                            .filter(item => {
                                return item.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())
                            })
                            .filter(item => {
                                return this.state.minPrice === '' || item.value >= this.state.minPrice
                            })
                            .filter(item => {
                                return this.state.maxPrice === '' || item.value <= this.state.maxPrice
                            })
                            .sort((a, b) => {
                                switch (this.state.order) {
                                    case "name":
                                        return a.name.localeCompare(b.name)
                                    default:
                                        return a.value - b.value
                                }
                            })
                            .map
                            ((item, index) => (
                                <Card
                                    key={index}
                                    id={item.id}
                                    name={item.name}
                                    price={item.value.toFixed(2)}
                                    img={item.imageUrl}
                                />
                            ))}
                    </ContainerCards>
                </Container>

            </>
        );
    }
}

export default MarketPlaceMain;
