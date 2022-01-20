import React from 'react';
import Logo from '../../assets/logospace.png';
import './styled';
import { Boxheader } from './styled'
import { Listas } from './styled'
import { Imagem } from './styled'
import { Notlist } from './styled'
import { Botao } from './styled'

class Header extends React.Component{
    render(){
        return(
            <Boxheader>
                <Imagem src={Logo} alt='Logo SpaceLabenu'/>
                <Notlist>
                    <Listas>Naves</Listas>
                    <Listas>Foguetes</Listas>
                    <Listas>Ônibus Espacial</Listas>
                    <Listas><Botao>Entrar</Botao></Listas>
                </Notlist>
            </Boxheader>
        )
    }
}

export default Header