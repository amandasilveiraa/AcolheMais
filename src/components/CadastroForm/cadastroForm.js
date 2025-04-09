import React from "react";
import { CampoForm, Formulario, InputText, Separador, Subtitulodireita, TextoForm, Titulodireita } from "../../pages/register/register.jsx";
import { BotaoRedeSocial } from "../../pages/register/register.jsx";
import { DivBotaoRedeSocial } from "../../pages/register/register.jsx";
import LogoGoogle from "../../assets/LogoIconGoogle.svg"
import LogoOutlook from "../../assets/LogoIconOutlook.svg"
import { FormTamanho } from "../../pages/register/register.jsx";
import { Input } from "../../pages/register/register.jsx";
import { Botao } from "../../pages/register/register.jsx";
import { Linha } from "../../pages/register/register.jsx";

export const CadastroForm = () => {
    return (
        <FormTamanho>
            <TextoForm>
                <Titulodireita>Crie sua conta</Titulodireita>
                <Subtitulodireita>Insira seus dados pessoais para criar sua conta</Subtitulodireita>
            </TextoForm>
            

            {/* botões do google e do outlook */}
            <DivBotaoRedeSocial>
                <BotaoRedeSocial>
                    <img src={LogoGoogle}></img>
                    <h2>Google</h2>
                </BotaoRedeSocial>
                <BotaoRedeSocial>
                    <img src={LogoOutlook}></img>
                    <h2>Outlook</h2>
                </BotaoRedeSocial>
            </DivBotaoRedeSocial>

            <Separador>Ou</Separador>

            {/* Formulário agora */}
            <Formulario>
                <Linha>
                    <CampoForm>
                        <InputText>Nome</InputText>
                        <Input placeholder="Nome" defaultValue="Fulana"></Input>
                    </CampoForm>
                    <CampoForm>
                        <InputText>Sobrenome</InputText>
                        <Input placeholder="Sovbrenome" defaultValue="De tal"></Input>
                    </CampoForm>
                    
                </Linha>
                <CampoForm>
                    <InputText>Email</InputText>
                    <Input placeholder="Email" type="email" defaultValue="fulanadetal@hotmail.com.br"></Input>
                </CampoForm>
                
                <CampoForm>
                    <InputText>Senha</InputText>
                    <Input type="password" placeholder="Digite sua senha"></Input>
                </CampoForm>
                
                <Botao type="submit">Entrar</Botao>
            </Formulario>

        </FormTamanho>
    )
}