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
import PaymentModal from "../Modals/PaymentModal";
import NewPaypalModal from "../Modals/NewPaypalModal";

const Header = () =>{
    const [basketOne, setBasketOne] = useState(false);
    const [basketTwo, setBasketTwo] = useState(false);
    const [newAddress, setNewAddress] = useState(false);
    const [address, setAddress] = useState(false);
    const [newPayment, setNewPayment] = useState(false);
    const [payment, setPayment] = useState(false);
    const [newCardInfo, setNewCardInfo] = useState(false);
    const [terms, setTerms] = useState(false);
    const [paypal, setPaypal] = useState(false);
    const [menu, setMenu] = useState(false);

    const basketOneHandler = () => setBasketOne(v => !v);
    const basketTwoHandler = () => setBasketTwo(v => !v);
    const newAddressHandler = () => setNewAddress(v => !v);
    const addressHandler = () => setAddress(v => !v);
    const newPaymentHandler = () => setNewPayment(v => !v);
    const paymentHandler = () => setPayment(v => !v);
    const newCardInfoHandler = () => setNewCardInfo(v => !v);
    const termsHandler = () => setTerms(v => !v);
    const paypalHandler = () => setPaypal(v => !v);
    const menuHandler = () => setMenu(v => !v);


    const passNewPaymnt = () => {
        newAddressHandler();
        newPaymentHandler();
    }

    const passNewCardInfo = () => {
        newPaymentHandler();
        newCardInfoHandler();
    }

    const passTerms = () => {
        newCardInfoHandler();
        termsHandler();
    }

    const passAddNewAddress = () => {
        addressHandler();
        newAddressHandler();
    }

    const passPayment = () => {
        addressHandler();
        paymentHandler();
    }

    const passAddnewPayment = () => {
        paymentHandler();
        newPaymentHandler();
    }

    const passPaypal = () => {
        newPaymentHandler();
        paypalHandler();
    }

    return (
        <StyledHeader>
            <Container>
                <Row>
                    <Logo src={IMG.logo} alt="logo" />
                    <Navbar>
                        <Row>
                            <StyledNavLink to="/learn">Learn</StyledNavLink>
                            <StyledMenu onMouseOver={menuHandler}>
                                Menu
                                <MdKeyboardArrowDown style={arrowStyle} />
                                {menu && 
                                    <MenuCont>
                                        <StyledNavLink to="/drink">Drinks</StyledNavLink>
                                        <StyledNavLink to="/pizza">Pizzas</StyledNavLink>
                                        <StyledNavLink to="/burger">Burgers</StyledNavLink>
                                        <StyledNavLink to="/dessert">Desserts</StyledNavLink>
                                        <StyledNavLink to="/cake">Cakes</StyledNavLink>
                                    </MenuCont>
                                 }  
                            </StyledMenu>
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

                {basketOne && <BasketOneModal positionStyle={positionStyle} onClick={basketOneHandler} submit={newAddressHandler}/>}
                {basketTwo && <BasketTwoModal positionStyle={positionStyle} onClick={basketTwoHandler} submit={addressHandler}/>}
                {newAddress && <NewAddressModal positionStyle={positionStyle} cancel={newAddressHandler} continueBtn={passNewPaymnt}/>}
                {address && <AddressModal positionStyle={positionStyle} cancel={addressHandler} addNew={passAddNewAddress} continueBtn={passPayment}/>}
                {newPayment && <NewPaymentModal positionStyle={positionStyle} onClick={newPaymentHandler} continueBtn={passNewCardInfo} newPaypal={passPaypal} cash={newPaymentHandler} />}
                {payment && <PaymentModal positionStyle={positionStyle} cancel={paymentHandler} addNew={passAddnewPayment} continueBtn={paymentHandler}/>}
                {newCardInfo && <NewCardInfoModal positionStyle={positionStyle} onClick={newCardInfoHandler} terms={passTerms}/>}
                {terms && <TermsModal positionStyle={positionStyle} cancelClick={termsHandler} agreeBtn={termsHandler}/>}
                {paypal && <NewPaypalModal positionStyle={positionStyle} cancel={paypalHandler} continueBtn={paypalHandler}/>}
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

const positionStyle = {
    position: 'fixed', 
    top: 0, 
    left: 0, 
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    oopacity: 0,
    zIndex: 1000,
};

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.img`
    width: 35px;
`;

const Navbar = styled.nav`
    position: relative;
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
    line-height: 24px;

    :hover {
        color: ${COLORS.orange};
    }
`;

const StyledMenu = styled.div`
    color: ${COLORS.textColor};
    text-decoration: none;
    margin-left: 25px;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
`;

const MenuCont = styled.div`
    position: absolute;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    border-radius: 8px;
    padding: 2%;
    width: 100px;
    height: 125px;
    background-color: ${COLORS.white};
    // left: 80px;
    top: 30px;
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