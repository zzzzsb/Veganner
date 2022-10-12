import React from "react";
import Veganner_logo from '../../assets/img/Veganner_logo.png';
import * as S from './Header.styled';

interface HeaderProps {
    src: string,
};

function Header(){
    return (
        <div>
            <S.HeaderWrapper>
                <S.HeaderLogo src={Veganner_logo} />
                <S.Navbar>
                    <S.StyledLink to = "/insights">Insights</S.StyledLink>
                    <S.StyledLink to = "/share">Share</S.StyledLink>
                    <S.StyledLink to = "/explore">Explore</S.StyledLink>
                    <S.StyledLink to = "/login">Login</S.StyledLink>
                </S.Navbar>
            </S.HeaderWrapper>
        </div>
    )
};

export default Header;