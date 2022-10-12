import React from "react";
import styled from 'styled-components';
import Veganner_logo from '../assets/img/Veganner_logo.png'
import { Link } from 'react-router-dom';

interface HeaderProps {
    src: string,
};

const HeaderWrapper = styled.header`
    width: 100%;
    height: 70px;
    padding: 0 15px;
    display: flex;
    align-items: center;
`;

const HeaderLogo = styled.img`
    width: 130px;
    height: 70px;
    object-fit: cover;
`;

const Navbar = styled.div`
    width: 350px;
    height: 70px;
    // background-color: #ffffff;
    font-size: 16px;
    margin-left: auto;
    flex-direction: column;
    text-align: center;
`;

const StyledLink = styled(Link)`
	flex: right;
	padding: 4px 8px;
	margin: 0 auto;
	text-align: center;
    text-decoration-line: none;
    .login {

    }
`;

function Header(){
    return (
        <div>
            <HeaderWrapper>
                <HeaderLogo src={Veganner_logo} />
                <Navbar>
                    <StyledLink to = "/insights">Insights</StyledLink>
                    <StyledLink to = "/share">Share</StyledLink>
                    <StyledLink to = "/explore">Explore</StyledLink>
                    <StyledLink to = "/login">Login</StyledLink>
                </Navbar>
            </HeaderWrapper>
        </div>
    )
};

export default Header;