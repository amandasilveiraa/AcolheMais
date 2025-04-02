import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
`

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-color: #f8f9fa;
    
`

export const Esquerda = styled.div`
    background-color: #046c36;
    color: white;
    width: 45%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-radius: 15px 15px 15px 15px;
    margin-left: 20px;
`
export const Direita = styled.div`
    background-color: white;
    color: black;
    width: 45%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-radius: 15px 15px 15px 15px;
    margin-left: 20px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`