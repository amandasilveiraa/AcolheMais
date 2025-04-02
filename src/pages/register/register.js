import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Background} from '../../StyledGlobal.js';
import {LinkStyle, Container, Esquerda, Direita} from './register.jsx';

export function Register () {
    return (
        <>
            <Container>
                <Esquerda>
                    <LinkStyle to='/'>Vai pro home</LinkStyle>
                </Esquerda>
                <Direita>
                    
                </Direita>
            </Container>
            
        </>
    )
}