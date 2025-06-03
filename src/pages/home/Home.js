import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Background} from '../../StyledGlobal.js';
import { Header } from '../../components/header/header.js';
import { GlobalStyle, LinkStyle } from '../../StyledGlobal.js';
import {Title, TituloPerfil} from '../../components/Title/title.js'
import { InformacoesPessoaisPerfil } from '../../components/squares/square.js';
import { InformacoesPessoais } from '../../components/squares/InformacoesPessoais.js';

export const DivHistorico = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px){
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; // aqui centraliza os filhos
    width: 100%;
    }
`


function Home () {
    return (
        <>
        
        <Background>
             <Header></Header>
             <LinkStyle to='/register'>Vai pro cadastro</LinkStyle>
             <TituloPerfil></TituloPerfil>
             <DivHistorico>
                <InformacoesPessoaisPerfil></InformacoesPessoaisPerfil>
                <InformacoesPessoais></InformacoesPessoais>
             </DivHistorico>
             
        </Background>
        </>
        
    );
}

export default Home;