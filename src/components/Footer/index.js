import React from 'react';
import logo from '../../assets/logospace.png'
import {Img, Rodape, Links, A, H1, H2, Div}  from './styled'

class Footer extends React.Component {
    render() {
        return (
            <Rodape>
                <Div>
                <Img src={logo}></Img>
                </Div>
                <Links>
                <H1>LabenuSpace</H1>
                <A href='https://twitter.com/home' target="_blank" >Twitter</A>
                <A href='https://youtube.com/' target="_blank" >YouTube</A>
                <A href='https://instagram.com/' target="_blank" >Instagram</A>
                <A href='https://facebook.com/' target="_blank" >Facebook</A>
                <A href='https://linkedin.com/' target="_blank" >Linkedin</A>
                <H2> &copy; Copyright - Todos os direitos reservados</H2>
                </Links>
            </Rodape>);
    }
}


export default Footer

