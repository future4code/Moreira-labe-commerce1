import React, { Component } from 'react';

import Card from '../Card/index'

import { Container, ContainerCards, ContainerInput} from './styled'
import api from '../../services/api.js'

class MarketPlaceMain extends Component {

    state = {
        search : ''
    }
    hadlechange =(e) =>{
        this.setState({
            search : e.target.value
        })
    }
    render() {
        
        return (
            <>
            <Container>
                <ContainerInput>
                    <input 
                    placeholder="Pesquisar"
                    type="text" 
                    onChange={this.handleChange}
                    />
                </ContainerInput>
                <ContainerCards>
                    {api.map( (item, index ) => (
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
