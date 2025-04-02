import styled from "styled-components"
import { HeaderBar, BlocoHeader, HeaderImgLogo, HeaderImgPessoa, NavBar, StyledNavLink} from "./header.jsx"
import logo from '../../assets/LogoVerdeAcolheMais.svg'
import iconPessoa from '../../assets/PersonIcon.svg'
import { NavLink } from "react-router-dom";

export function Header () {
    return (
        <HeaderBar>
            <BlocoHeader>
                <HeaderImgLogo src={logo}/>
                <NavBar>
                    <StyledNavLink href="#">DASHBOARD</StyledNavLink>
                    <StyledNavLink href="#">ACOLHIDOS</StyledNavLink>
                    <StyledNavLink href="#">ESTOQUE</StyledNavLink>
                    <StyledNavLink href="#">DOCUMENTAÇÃO</StyledNavLink>
                </NavBar>
                <HeaderImgPessoa src={iconPessoa}/>
            </BlocoHeader>
        </HeaderBar>
    );
}