import React from "react";
import * as S from "./Header.styled";

// interface HeaderProps {
//   src: string;
// }

function Header() {
  return (
    <div>
      <S.HeaderWrapper>
        <S.HeaderLogo to="/" />
        <S.Navbar>
          <S.StyledLink to="/insights">Insights.</S.StyledLink>
          <S.StyledLink to="/share">Share.</S.StyledLink>
          <S.StyledLink to="/explore">Explore.</S.StyledLink>
          <S.StyledLink to="/login">Register.</S.StyledLink>
        </S.Navbar>
      </S.HeaderWrapper>
    </div>
  );
}

export default Header;
