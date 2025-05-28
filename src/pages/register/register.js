import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Background} from '../../StyledGlobal.js';
import {LinkStyle, Container, Esquerda, Direita, Logo, Titulo, Subtitulo} from './register.jsx';
import imgLogo from '../../assets/LogoBrancaAcolheMais.svg'
import { CadastroForm } from '../../components/CadastroForm/cadastroForm.js'
import { useState } from 'react';

export const Register = () => {
    const [menu, setMenu] = useState();

    function ExibirMenu(){
        if(menu){
            setMenu(false)
        } else{
            setMenu(true)
        }
    }
    
    return (
        

        <>
            <Container>
                <Esquerda>
                    <Logo src={imgLogo}></Logo>
                    <Titulo>Crie sua conta</Titulo>
                    <Subtitulo>Complete esses simples passos para se registrar</Subtitulo>
                    
                </Esquerda>
                <Direita>
                    <CadastroForm></CadastroForm>
                </Direita>
            </Container>
            
        </>
    )
}