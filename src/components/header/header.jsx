import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderBar = styled.header`
    width: 100%;
    background-color:rgb(255, 255, 255);
    padding-right: 22px;
    padding-left: 22px;
    box-shadow: 0 5px 5px #c0c0c0;

    @media (max-width: 700px){
        padding-left: 8px;
        padding-right: 8px;
    }
`

export const BlocoHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
`

export const HeaderImgLogo = styled.img`
    cursor: pointer;
    width: 5rem;
    
`
export const HeaderImgIcon = styled.img`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
`

export const HeaderImgIconMenu = styled.img`
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    display: none;
    visibility: hidden;
    

    @media (max-width: 700px) {
        display: block;
        visibility: visible;
    }
`

export const DivIcons = styled.div`
    display: flex;
    gap: 12px;
`

export const NavBar = styled.div`
    display: flex;
    visibility: visible;
    gap: 2rem;
    aligin-items: center;

    @media (max-width: 700px){
        display: none;
        visibility: hidden;
    }
`

export const NavBarRes = styled.div`
    height: 0px;
    width: 100%;
    padding-top: 6px;
    text-align: center;
    line-height: 42px;
    transition: height 0.2s;
    overflow: hidden;

    @media (max-width: 700px){
        height: ${props => (props.visible ? '190px' : '0px')};
    }
`

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-weight: bold;
    color: grey;
    font-size: 0.96rem;
    font-family: 'Roboto';
    transition: color 0.4s;
    display: block;

    &:hover {
        color: black !important;
        text-decoration: underline;
    }
`