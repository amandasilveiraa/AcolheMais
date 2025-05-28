import React from "react";
import styled from "styled-components";
import House from "../../assets/house.webp"
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 20vw;
    background-color:rgb(255, 255, 255);
    padding: 10px;
    border-radius: 10px;
    margin: 30px;
`
export const TextoPerfil = styled.h2`
    font-weight: 600;
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 8px;
`

export const TextoCinza = styled.p`
    color: grey;
`

export const ImagemPerfil = styled.img`
    border-radius: 50%;
    width: 90px;
    height: 70px;
    margin: 0 auto;
    display: block;

`
export const LinkStyle = styled(Link)`
  color: green;
  text-decoration: none;
`



export const InformacoesPessoais = () => {
    return (
        <Container>
            <ImagemPerfil src={House}></ImagemPerfil>
            <TextoPerfil>Fulana de Tal</TextoPerfil>
            <TextoCinza>fulana@gmail.com</TextoCinza>
            <br></br><br></br>
            <TextoCinza>Informações pessoais</TextoCinza>
            <LinkStyle>Histórico Médico</LinkStyle>
            <TextoCinza>Documentos</TextoCinza>
        </Container>
    )
}