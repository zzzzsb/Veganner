import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 70px;
    padding: 0 15px;
    display: flex;
    align-items: center;
`;

export const HeaderLogo = styled.img`
    width: 130px;
    height: 70px;
    object-fit: cover;
`;

export const Navbar = styled.div`
    width: 350px;
    // background-color: #ffffff;
    font-size: 16px;
    margin-left: auto;
    flex-direction: column;
    text-align: center;
`;

export const StyledLink = styled(Link)`
	flex: right;
	padding: 4px 8px;
	margin: 0 auto;
	text-align: center;
    text-decoration-line: none;
    .login {

    }
`;