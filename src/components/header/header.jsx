import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderBar = styled.header`
    width: 100%;
    height: 14vh;
    background-color:rgb(255, 255, 255);
    padding: auto;
`

export const BlocoHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const HeaderImgLogo = styled.img`
    width: 10rem;
    height: 7rem;
    cursor: pointer;
    
`
export const HeaderImgPessoa = styled.img`
    width: 3rem;
    height: 3rem;
    margin-right: 1vw;
    cursor: pointer;
`

export const NavBar = styled.div`
    display: flex;
    padding-top: 2vh;
    gap: 2rem;
`

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-weight: bold;
    color: grey;
    font-size: 1rem;
    font-family: arial;
    transition: color 0.4s;

    &:hover {
        color: black !important;
        text-decoration: underline;
    }
`