import React from "react";
import styled from "styled-components";

export const ContainerTitulo = styled.div`
    display: flex;
    width: 85vw;
    margin: 0 auto;
    height: 4vh;
    justify-content: space-between;
    padding: 7px;
    border-radius: 10px;
`
export const TextoPerfil = styled.h2`
    font-weight: 600;
    font-size: 22px;
`


export const TituloPerfil = () => {
    return (
        <ContainerTitulo>
            <TextoPerfil>PERFIL</TextoPerfil>
            <TextoPerfil>Editar informações</TextoPerfil>
        </ContainerTitulo>
    )
}