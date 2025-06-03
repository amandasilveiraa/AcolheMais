import styled from "styled-components"
import { HeaderBar, BlocoHeader, HeaderImgLogo, HeaderImgIcon, NavBar, StyledNavLink, NavBarRes, DivIcons, HeaderImgIconMenu} from "./header.jsx"
import logo from '../../assets/LogoVerdeAcolheMais.svg'
import iconPessoa from '../../assets/PersonIcon.svg'
import iconMenu from '../../assets/HamburguerMenuIcon.svg'
import iconClose from '../../assets/CloseIcon.svg'
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react"

export function Header () {

    const [menu, setMenu] = useState();

    function ExibirMenu(){
        if(menu){
            setMenu(false)
        } else{
            setMenu(true)
        }
    }

    return (
        <HeaderBar>
            <BlocoHeader>
                <HeaderImgLogo src={logo}/>
                <NavBar>
                    <StyledNavLink href="#" to="/">DASHBOARD</StyledNavLink>
                    <StyledNavLink href="#">ACOLHIDOS</StyledNavLink>
                    <StyledNavLink href="#" to="/estoque">ESTOQUE</StyledNavLink>
                    <StyledNavLink href="#">DOCUMENTAÇÃO</StyledNavLink>
                </NavBar>
                <DivIcons>
                    <HeaderImgIcon src={iconPessoa}/>
                    <HeaderImgIconMenu src={menu ? iconClose : iconMenu} onClick={() => ExibirMenu()} visible={menu} />
                </DivIcons>
            </BlocoHeader>
            <NavBarRes visible={menu}>
                <StyledNavLink href="#" to="/">DASHBOARD</StyledNavLink>
                <StyledNavLink href="#">ACOLHIDOS</StyledNavLink>
                <StyledNavLink href="#" to="/estoque">ESTOQUE</StyledNavLink>
                <StyledNavLink href="#">DOCUMENTAÇÃO</StyledNavLink>
            </NavBarRes>
        </HeaderBar>
    );
}