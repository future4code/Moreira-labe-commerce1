import styled from 'styled-components';


export const Rodape = styled.div`
    display: flex;
    background-color: #3f3d56;
    height: 120px;
    justify-content: center;
   /*  padding-top: 10px;
    padding-bottom: 40px; */
    @media only screen and (max-width: 600px) {
    
    display: block;
    height: 170px;
  }
`
export const Img = styled.img` 
    width: 70px;
    height: 70px;
    margin-top: auto;
    margin-bottom: auto;

    @media only screen and (max-width: 600px) {
    
    display: flex;
    height: 50px;
    width: 50px;
    margin-top: 10px;
    text-align: center;
  } 
   
    `
export const Links = styled.div`
    height: 20px;
    margin-top: 1vh;
    margin-left: 20px;

    @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    font-size: 11px;
    margin-left:0px ;
} 
`
    
export const A = styled.a`
    color: white;
    padding-right: 30px;
    text-decoration: none;
    font-weight: bold;
    :hover{
        color: #989898
    }
    @media only screen and (max-width: 600px) {    
    text-align: center;
    font-size: 10px;
    padding-right: 15px;
}
`

export const H1 = styled.h1`
    color: white;
    font-size: 16px;
    text-align: center;
    @media only screen and (max-width: 600px) {    
    text-align: center;
    font-size: 12px;
} 
`

export const H2 = styled.div`
    font-size: 14px;
    color: white;
    text-align: center;
    padding-top: 10px ;
    @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    font-size: 10px;
} 
`

export const Div = styled.div`
margin-top: auto;
margin-bottom: auto;

@media only screen and (max-width: 600px) {

width: 100%;
display: flex;
justify-content: center;

}`