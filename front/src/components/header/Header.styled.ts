import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/img/Veganner_logo.png";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  margin: 0 15px;
  display: flex;
  align-items: center;
  font-family: "PP Neue Montreal";
`;

export const HeaderLogo = styled.div`
  width: 120px;
  height: 70px;
  background-image: url(${logo});
  background-size: cover;
  background-position: 50% 45%;
`;

export const Navbar = styled.div`
  width: 350px;
  // background-color: #ffffff;
  font-size: 16px;
  /* margin-left: auto; */
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  margin: 0 20px;
  text-align: center;
  text-decoration-line: none;
  color: #212121;
  &:last-child {
    margin-left: 420px;
  }
`;
