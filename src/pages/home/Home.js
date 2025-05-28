import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Background} from '../../StyledGlobal.js';
import { Header } from '../../components/header/header.js';
import { GlobalStyle, LinkStyle } from '../../StyledGlobal.js';
import {Title, TituloPerfil} from '../../components/Title/title.js'
import { InformacoesPessoais } from '../../components/squares/square.js';
import { HisoricoMedico } from '../../components/squares/historicoMedico.js';

export const DivHistorico = styled.div`
    display: flex;
    justify-content: space-between;
`

function Home () {
    return (
        <>
        
        <Background>
             <Header></Header>
             <LinkStyle to='/register'>Vai pro cadastro</LinkStyle>
             <TituloPerfil></TituloPerfil>
             <DivHistorico>
                <InformacoesPessoais></InformacoesPessoais>
                <HisoricoMedico></HisoricoMedico>
             </DivHistorico>
             
        </Background>
        </>
        
    );
}

export default Home;