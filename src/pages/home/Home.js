import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Background} from '../../StyledGlobal.js';
import { Header } from '../../components/header/header.js';
import { GlobalStyle, LinkStyle } from '../../StyledGlobal.js';

function Home () {
    return (
        <>
        <Background>
             <Header></Header>
             <LinkStyle to='/register'>Vai pro cadastro</LinkStyle>
        </Background>
        
        </>
        
    );
}

export default Home;