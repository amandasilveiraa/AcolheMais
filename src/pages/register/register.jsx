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
    height: 55rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-radius: 15px 15px 15px 15px;
    margin-left: 4%;
    margin-right: 1%;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 700px){
        display: none;
        visibility: hidden;
    }
`
export const Direita = styled.div`
    background-color: white;
    color: black;
    width: 45%;
    height: 55rem;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    

    padding: 2rem;
    border-radius: 15px 15px 15px 15px;
    margin-left: 1%;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 700px){
        width: 90%;
        margin: 0 auto;
    }
`

export const Logo = styled.img`
    width: 150px;
    margin-bottom: 20px;
`

export const Titulo = styled.h1`
    font-size: 42px;
    margin-bottom: 10px;
    font-weight: 800;
`

export const Subtitulo = styled.p`
    font-size: 24px;
    text-align: center;
    font-weight: 600;
`

export const FormTamanho = styled.div`
    widht: 100%;
    
`

export const TextoForm = styled.div`
    text-align: center;
    gap: 2rem;
    padding: 2px;
`

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    
`

export const DivBotaoRedeSocial = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 10px;
`

export const BotaoRedeSocial = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    display: flex;
    width: 30%;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: white;
    cursor: pointer;
`
export const Linha = styled.div`
    display: flex;
    gap: 1rem;
`

export const Titulodireita = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
`

export const Subtitulodireita = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 5rem;
`

export const InputText = styled.label`
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 4px;
    color: #333;
`

export const Input = styled.input`
    flex: 1;
    padding: 12px;
    background-color:
    #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 8px;
`

export const Botao = styled.button`
  background-color: #006400;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 90%;
  align-self: center;
  max-width: 80vw;

  &:hover {
    background-color: #004d00;
  }
`
export const Separador = styled.div`
display: flex;
align-items: center;
text-align: center;
color: #aaa;
margin: 4rem 0;

&::before,
&::after {
  content: "";
  flex: 1;
  border-top: 1px solid #eee;
}

&::before {
  margin-right: 0.5em;
}

&::after {
  margin-left: 0.5em;
}
`

export const CampoForm = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-bottom: 16px;
`