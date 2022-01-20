import React, { Component } from 'react';
import {
    Container,
    Container_left,
    Container_right

} from './styled'

import Img1 from '../../assets/img1.svg';
import Img2 from '../../assets/img2.svg';
import Img3 from '../../assets/img3.svg';

class Main extends Component {
    render() {
        return (
            <Container>
              <Container_left>
                <div>
                    <h1>LabenuSpace</h1>
                    <p>Loja LabenuSpace Atacado, compre online e receba onde quiser com entrega rápida e segura. Garanta o sucesso da sua Loja Geek com produtos incriveís. Ofertas para lojistas.
                    </p>
                    <button>Descubra</button>
                </div>
                
              </Container_left>
              <Container_right>
                <div>
                  <img src={Img1} alt={"logo1"}/>
                  <img src={Img2} alt={"logo2"}/>
                  <img className="img3" src={Img3} alt={"logo3"}/>
                </div> 
              </Container_right>
            </Container>
        );
    }
}

export default Main;
