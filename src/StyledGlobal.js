import styled from "styled-components"
import createGlobalStyle from "styled-components"
import { Link } from "react-router-dom"

export const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`

export const Background = styled.div`
    background-color: #f8f8f2;
    width: 100%;
    min-height: 100vh;
`

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
`