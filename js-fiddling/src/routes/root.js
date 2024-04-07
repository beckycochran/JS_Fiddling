import './root.css'
import logo from "../logo.svg"
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Root = () => {
    return <>
        <header className="nav-header">
            <img src={logo} className="nav-logo" alt="logo" />
            <StyledLink to="/name">Intro</StyledLink>
            <StyledLink to="/one-plus-one">+/-</StyledLink>
        </header>
    </>
}

export default Root

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`
