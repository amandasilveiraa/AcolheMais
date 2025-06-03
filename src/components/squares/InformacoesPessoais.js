import React from "react";
import styled from "styled-components";
import House from "../../assets/house.webp"
import { Link } from "react-router-dom";
import accountIcon from "../../assets/AccountIcon.svg"
import calenda from "../../assets/CalendarIcon.svg"
import globe from "../../assets/GlobalLocationIcon.svg"
import globeLanguage from "../../assets/GlobalLanguageIcon.svg"
import logout from "../../assets/LogoutIcon.svg"

export const Container = styled.div`
    width: 65vw;
    padding: 10px;
    border-radius: 10px;
    margin: 30px;
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 1rem;
    }

`

export const TextoGrande = styled.h2`
    font-weight: 600;
    font-size: 24px;
    margin-top: 8px;
    margin-bottom: 18px;
`

export const DivElemento = styled.div`
    width: 100%;
    margin: 5px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`

export const Elemento = styled.div`
    border-radius: 20px;
    border: 1px solid black;
    height: 12vh;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

const DivTextLeft = styled.div`
    font-size: 18px;
`

const IconeRight = styled.img`
    width: 40px;
    height: 40px;
`

export const InformacoesPessoais = () => {
    return (
        <Container>
            <TextoGrande>Informações pessoais</TextoGrande>
            <DivElemento>
                <Elemento>
                    <DivTextLeft>
                        <p style={{fontWeight: 600}}>Nome</p>
                        <p style={{color: "#CCC"}}>Fulana da Tal</p>
                    </DivTextLeft>
                    <IconeRight src={accountIcon}></IconeRight>
                </Elemento>

                <Elemento>
                    <DivTextLeft>
                        <p style={{fontWeight: 600}}>Data de nascimento</p>
                        <p style={{color: "#CCC"}}>19 de maio de 1993</p>
                    </DivTextLeft>
                    <IconeRight src={calenda}></IconeRight>
                </Elemento>
                
                <Elemento>
                    <DivTextLeft>
                        <p style={{fontWeight: 600}}>País de origem</p>
                        <p style={{color: "#CCC"}}>São Paulo Brasil</p>
                    </DivTextLeft>
                    <IconeRight src={globe}></IconeRight>
                </Elemento>
                
                <Elemento>
                    <DivTextLeft>
                        <p style={{fontWeight: 600}}>Linguagem</p>
                        <p style={{color: "#CCC"}}>Português (BR)</p>
                    </DivTextLeft>
                    <IconeRight src={globeLanguage}></IconeRight>
                </Elemento>
                
                <Elemento>
                    <DivTextLeft>
                        <p style={{fontWeight: 600}}>Entrada</p>
                        <p style={{color: "#CCC"}}>30 de Janeiro de 2020</p>
                    </DivTextLeft>
                    <IconeRight src={logout}></IconeRight>
                </Elemento>
                

            </DivElemento>
        </Container>
    )
}