import React from "react";
import styled from "styled-components";
import House from "../../assets/house.webp"
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 25vw;
    padding: 10px;
    border-radius: 10px;
    margin: 40px;
    margin-left: 4%;
    @media (max-width: 768px) {

    margin: 1rem auto; // centraliza no mobile
    display: flex;
    flex-direction: column;
    width: 70vw;
    align-items: center;
    text-align: center;
  }
`
export const TextoPerfil = styled.h2`
    font-weight: 600;
    font-size: 24px;
    margin-top: 8px;
    margin-bottom: 8px;
`

export const TextoCinza = styled.p`
    color: grey;
    font-size: 22px;
`

export const TextoVerde = styled.p`
    color: green;
    font-size: 22px;
`

export const ImagemPerfil = styled.img`
    border-radius: 50%;
    width: 130px;
    height: 110px;
    display: block;

`
export const LinkStyle = styled(Link)`
  text-decoration: none;
  font-size: 20px;
`



export const InformacoesPessoaisPerfil = () => {
    return (
        <Container>
            <ImagemPerfil src={House}></ImagemPerfil>
            <TextoPerfil>Fulana de Tal</TextoPerfil>
            <TextoCinza>fulanadetal@gmail.com.br</TextoCinza>
            <br></br><br></br>
            <LinkStyle><TextoVerde>Informações pessoais</TextoVerde></LinkStyle>
            <LinkStyle><TextoCinza>Histórico Médico</TextoCinza></LinkStyle>
            <LinkStyle><TextoCinza>Documentos</TextoCinza></LinkStyle>
        </Container>
    )
}