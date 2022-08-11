import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import IMG from "../assets/images";
import COLORS from "../styles/colors";

import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';
import { GrNotification } from 'react-icons/gr';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Header = () =>{
    return (
        <StyledHeader>
            <Container>
                <Row>
                    <Logo src={IMG.logo} alt="logo" />
                    <Navbar>
                        <Row>
                            <StyledNavLink to="/menu">
                                Menu
                                <MdKeyboardArrowDown style={arrowStyle} />
                            </StyledNavLink>
                            <StyledNavLink to="/restaurant">Restaurant</StyledNavLink>
                            <StyledNavLink to="/hotline">Hotline</StyledNavLink>
                            <StyledNavLink to="/blog">Blog</StyledNavLink>
                        </Row>    
                    </Navbar>
                    <InputContainer>
                        <Row>
                            <FiSearch style={searchStyle} />
                            <Input type="text" placeholder="Search restaurants, dissert..." />
                            <AiOutlineBars style={searchStyle} />
                        </Row>
                    </InputContainer>
                    <Icons>
                        <Row>
                            <IconLink to="/notifications">
                                <RedDot></RedDot>
                                <GrNotification style={iconsStyle} />
                            </IconLink>
                            <IconLink to="/basket">
                                <MdOutlineShoppingCart style={iconsStyle} />
                            </IconLink>
                        </Row>
                    </Icons>
                    <StyledLink to="/sign-in">Sign in</StyledLink>
                </Row>
            </Container>
        </StyledHeader>
    )
}


const StyledHeader = styled.header`
    background-color: ${COLORS.white};
    box-shadow: 0px 12px 24px #888888;
    margin-bottom; 5px;
`;

const Container = styled.div`
    margin: 0 7%;
    padding: 10px 0;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.img`
    width: 35px;
`;

const Navbar = styled.nav`

`;

const arrowStyle = {
    color: COLORS.orange
}

const StyledNavLink = styled(NavLink)`
    color: ${COLORS.textColor};
    text-decoration: none;
    margin-left: 25px;
    display: flex;
    align-items: center;
`;

const InputContainer = styled.div`
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS.searchBar};
    border-radius: 8px;
    padding: 8px 16px;
    width: 40%;
`;

const searchStyle = {
    color: COLORS.searchBar,
}

const Input = styled.input`
    width: 100%;
    outline: none;
    border: none;
    margin: 0 15px;

    ::placeholder {
        color: ${COLORS.searchBar};
    }
`;

const Icons = styled.div`

`;

const IconLink = styled(Link)`
    position: relative;
    margin: 0 10px;
`;

const RedDot = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    border: 3px solid ${COLORS.red};
    background-color: ${COLORS.red};
    border-radius: 100%;
`;

const iconsStyle = {
    color: COLORS.textColor,
}

const StyledLink = styled(Link)`
    color: ${COLORS.textColor};
    text-decoration: none;
`;

export default Header;