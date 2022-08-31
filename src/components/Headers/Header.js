import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import IMG from "../../assets/images";

import { MdKeyboardArrowDown } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineBars } from 'react-icons/ai';
import { GrNotification } from 'react-icons/gr';
import { MdOutlineShoppingCart } from 'react-icons/md';
import COLORS from "../../styles/colors";
import BasketOneModal from "../Modals/BasketOneModal";
import BasketTwoModal from "../Modals/BasketTwoModal";
import NewAddressModal from "../Modals/NewAddressModal";
import AddressModal from "../Modals/AddressModal";
import NewPaymentModal from "../Modals/NewPaymentModal";
import NewCardInfoModal from "../Modals/NewCardInfoModal";
import TermsModal from "../Modals/TermsModal";

const Header = () =>{
    const [basketOne, setBasketOne] = useState(false);
    const [basketTwo, setBasketTwo] = useState(false);
    const [newAddress, setNewAddress] = useState(false);
    const [address, setAddress] = useState(false);
    const [newPayment, setNewPayment] = useState(false);
    const [newCardInfo, setNewCardInfo] = useState(false);
    const [terms, setTerms] = useState(false);

    const basketOneHandler = () => setBasketOne(v => !v);
    const basketTwoHandler = () => setBasketTwo(v => !v);
    const newAddressHandler = () => setNewAddress(v => !v);
    const addressHandler = () => setAddress(v => !v);
    const newPaymentHandler = () => setNewPayment(v => !v);
    const newCardInfoHandler = () => setNewCardInfo(v => !v);
    const termsHandler = () => setTerms(v => !v);

    return (
        <StyledHeader>
            <Container>
                <Row>
                    <Logo src={IMG.logo} alt="logo" />
                    <Navbar>
                        <Row>
                            <StyledNavLink to="/learn">Learn</StyledNavLink>
                            <StyledNavLink to="/menu">
                                Menu
                                <MdKeyboardArrowDown style={arrowStyle} />
                            </StyledNavLink>
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
                            <IconLink onClick={basketOneHandler}>
                                <RedDot></RedDot>
                                <GrNotification style={iconsStyle} />
                            </IconLink>
                            <IconLink onClick={basketTwoHandler}>
                                <RedDot></RedDot>
                                <MdOutlineShoppingCart style={iconsStyle} />
                            </IconLink>
                        </Row>
                    </Icons>
                    <StyledLink to="/sign-in">Sign in</StyledLink>
                </Row>
                {basketOne && <BasketOneModal positionStyle={{position: 'absolute', top: 0, left: '-101px'}} onClick={basketOneHandler} submit={newAddressHandler}/>}
                {basketTwo && <BasketTwoModal positionStyle={{position: 'absolute', top: 0, left: '-101px'}} onClick={basketTwoHandler} submit={addressHandler}/>}
                {newAddress && <NewAddressModal positionStyle={{position: 'absolute', top: 0, left: '-101px'}} onClick={newAddressHandler} continueBtn={newPaymentHandler}/>}
                {address && <AddressModal positionStyle={{position: 'absolute'}} onClick={addressHandler}/>}
                {newPayment && <NewPaymentModal positionStyle={{position: 'absolute', top: 0, left: '-101px'}} onClick={newPaymentHandler} continueBtn={newCardInfoHandler}/>}
                {newCardInfo && <NewCardInfoModal positionStyle={{position: 'absolute', top: 0, left: '-101px'}} onClick={newCardInfoHandler} terms={termsHandler}/>}
                {terms && <TermsModal positionStyle={{position: 'absolute', top: 0, left: '-101px'}} onClick={termsHandler} cancelClick={termsHandler} agreeBtn={termsHandler}/>}

            </Container>
        </StyledHeader>
    )
}


const StyledHeader = styled.header`
    background-color: ${COLORS.white};
    box-shadow: 0px 12px 14px rgba(181, 173, 176, 0.25);
    margin-bottom: 20px;
`;

const Container = styled.div`
    margin: 0 7%;
    padding: 10px 0;
    position: relative;
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

const IconLink = styled.div`
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