import React from "react";
import styled from "styled-components";
import House from "../../assets/house.webp"
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 65vw;
    background-color:rgb(255, 255, 255);
    padding: 10px;
    border-radius: 10px;
    margin: 30px;
`

export const TextoGrande = styled.h2`
    font-weight: 600;
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 8px;
`

export const DivElemento = styled.div`
    width: 100%;
    background-color: rgb(195, 161, 161);
    margin: 5px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`

export const Elemento = styled.div`
    border-radius: 20px;
    border: 1px solid black;
    background-color: white;
    height: 8vh;
`

export const HisoricoMedico = () => {
    return (
        <Container>
            <TextoGrande>Histórico médico</TextoGrande>
            <DivElemento>
                <Elemento></Elemento>
                <Elemento></Elemento>
                <Elemento></Elemento>
                <Elemento></Elemento>
                
            </DivElemento>
        </Container>
    )
}