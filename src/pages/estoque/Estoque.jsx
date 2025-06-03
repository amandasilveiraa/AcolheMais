import styled from "styled-components";
import { Link } from "react-router-dom"

export const TituloPagina = styled.h1`
    margin-top: 16px;
`

export const NavEstoque = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
` 

export const BotaoFiltro = styled(Link)`
    background-color: #006233;
    color: white;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    text-decoration-line: none;
    border-radius: 11px;
    display: flex;
    align-items: center;
    gap: 4px;

`

export const IconeFiltro = styled.img`
    width: 1.3em;
    height: 1.3em;
    color: white;
`

export const Pesquisar = styled.input.attrs({type: 'text'})`
    background-color: #006233;
    color: white;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    border: none;
    border-radius: 11px;
    

    &:focus{
        outline: none;
    }

    &::-webkit-input-placeholder {
        color: white;
    }

    &:-moz-placeholder {
        color: white;  
    }

    &::-moz-placeholder {  
        color: white;  
    }

    &:-ms-input-placeholder {  
        color: white; 
    }
`

export const Tabela = styled.table`
    width: 100%;
    color:rgb(65, 65, 65);
    text-align: left;
    border-collapse: separate;
    border-spacing: 0;
    
    td, th{
        padding: 12px;
    }

    tr:not(:last-child) td, 
    tr:not(:last-child) th{
        border-bottom: 1px solid #929292;
    }
`

export const TabelaDiv = styled.div`
    overflow-x: auto;
    border: 1px solid #929292;
    border-radius: 20px;
    margin-top: 14px;
`