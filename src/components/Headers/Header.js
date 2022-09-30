import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import IMG from "../../assets/images";
import COLORS from "../../styles/colors";

import { MdKeyboardArrowDown, MdOutlineShoppingCart } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineBars } from 'react-icons/ai';
import { GrNotification } from 'react-icons/gr';

import BasketEmpty from "../Modals/BasketEmpty";
import BasketOneModal from "../Modals/BasketOneModal";
import BasketTwoModal from "../Modals/BasketTwoModal";
import NewAddressModal from "../Modals/NewAddressModal";
import AddressModal from "../Modals/AddressModal";
import NewPaymentModal from "../Modals/NewPaymentModal";
import NewCardInfoModal from "../Modals/NewCardInfoModal";
import TermsModal from "../Modals/TermsModal";
import PaymentModal from "../Modals/PaymentModal";
import NewPaypalModal from "../Modals/NewPaypalModal";
import ConfirmOrderModal from "../Modals/ConfirmOrder";
import WaitingModal from "../Modals/WaitingModal";
import SuccessModal from "../Modals/SuccessModal";
import FailModal from "../Modals/FailModal";
import NotificationModal from "../Modals/NotificationModal";
import EmptyNotificationModal from "../Modals/EmptyNotificationModal";
import NewredbellyModal from "../Modals/NewredbellyModal";
import SummaryOfPayments from "../Modals/SummaryOfPayments";

const Header = () =>{
    const [basketEmpty, setBasketEmpty] = useState(false);
    const [basketOne, setBasketOne] = useState(false);
    const [basketTwo, setBasketTwo] = useState(false);
    const [emptyNotification, setEmptyNotification] = useState(false);
    const [notification, setNotification] = useState(false);
    const [newAddress, setNewAddress] = useState(false);
    const [address, setAddress] = useState(false);
    const [newPayment, setNewPayment] = useState(false);
    const [payment, setPayment] = useState(false);
    const [newCardInfo, setNewCardInfo] = useState(false);
    const [terms, setTerms] = useState(false);
    const [paypal, setPaypal] = useState(false);
    const [redbelly, setRedbelly] = useState(false);
    const [confirmOrder, setConfirmOrder] = useState(false);
    const [waiting, setWaiting] = useState(false);
    const [summary, setSummary] = useState(false);
    const [success, setSuccess] = useState(false);
    const [fail, setFail] = useState(false);
    
    const basketEmptyHandler = () => setBasketEmpty(v => !v);
    const basketOneHandler = () => setBasketOne(v => !v);
    const basketTwoHandler = () => setBasketTwo(v => !v);
    const emptyNotificationHandler = () => setEmptyNotification(v => !v);
    const notificationHandler = () => setNotification(v => !v);
    const newAddressHandler = () => setNewAddress(v => !v);
    const addressHandler = () => setAddress(v => !v);
    const newPaymentHandler = () => setNewPayment(v => !v);
    const paymentHandler = () => setPayment(v => !v);
    const newCardInfoHandler = () => setNewCardInfo(v => !v);
    const termsHandler = () => setTerms(v => !v);
    const paypalHandler = () => setPaypal(v => !v);
    const redbellyHandler = () => setRedbelly(v => !v);
    const confirmOrderHandler = () => setConfirmOrder(v => !v);
    const waitingHandler = () => setWaiting(v => !v);
    const summaryHandler = () => setSummary(v => !v);
    const successHandler = () => setSuccess(v => !v);
    const failHandler = () => setFail(v => !v);

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

    const passRedbelly = () => {
        newPaymentHandler();
        redbellyHandler();
    }

    const passConfirmOrder = () => {
        paymentHandler();
        confirmOrderHandler();
    }

    const passBackToNewCardInfo = () => {
        termsHandler();
        newCardInfoHandler();
    }

    const passSummary = () => {
        waitingHandler();
        summaryHandler();
    }

    const passSuccess = () => {
        summaryHandler();
        successHandler();
    }

    const passFail = () => {
        summaryHandler();
        failHandler();
    }

    const placeOrderSuccess = () => {
        confirmOrderHandler();
        waitingHandler();
        setTimeout(() => {
            passSummary();
        }, 2000);
        setTimeout(() => {
            passSuccess();
        }, 4000);
    }

    const placeOrderFail = () => {
        confirmOrderHandler();
        waitingHandler();
        setTimeout(() => {
            passSummary();
        }, 2000);
        setTimeout(() => {
            passFail();
        }, 4000);
    }

    return (
        <StyledHeader>
            <Container>
                <Row>
                    <Link to="/"> <Logo src={IMG.logo} alt="logo" /></Link>
                    <Navbar>
                        <Row>
                            <StyledNavLink to="/ongoing">My order</StyledNavLink>
                            <StyledMenu>
                                    <StyledNavLink to="/menu">Menu <MdKeyboardArrowDown style={{color: COLORS.orange}} /></StyledNavLink>      
                                    <MenuCont className="drop">
                                        <Column>
                                            <StyledNavLink to="/drink">Drinks</StyledNavLink>
                                            <StyledNavLink to="/pizza">Pizzas</StyledNavLink>
                                            <StyledNavLink to="/burger">Burgers</StyledNavLink>
                                            <StyledNavLink to="/dessert">Desserts   <MdKeyboardArrowDown style={{color: COLORS.orange, marginLeft: '10px'}}/> </StyledNavLink>
                                            <StyledNavLink to="/cake">Cakes</StyledNavLink>
                                        </Column>
                                    </MenuCont>
                            </StyledMenu>
                            <StyledNavLink to="/hotline">Hotline</StyledNavLink>
                            <StyledNavLink to="/blog">Blog</StyledNavLink>
                        </Row>  
                    </Navbar>
                    <InputContainer>
                        <Row>
                            <FiSearch style={searchStyle} />
                            <Input type="text" placeholder="Search nearby stores " />
                            <AiOutlineBars style={searchStyle} />
                        </Row>
                    </InputContainer>
                    <Icons>
                        <Row>
                            <IconLink onClick={emptyNotificationHandler}>
                                <GrNotification style={iconsStyle} />
                            </IconLink>
                            <IconLink onClick={notificationHandler}>
                                <RedDot></RedDot>
                                <GrNotification style={iconsStyle} />
                            </IconLink>
                            <IconLink onClick={basketEmptyHandler}>
                                <MdOutlineShoppingCart style={iconsStyle} />
                            </IconLink>
                            <IconLink onClick={basketOneHandler}>
                                <RedDot></RedDot>
                                <MdOutlineShoppingCart style={iconsStyle} />
                            </IconLink>
                            <IconLink onClick={basketTwoHandler}>
                                <RedDot></RedDot>
                                <MdOutlineShoppingCart style={iconsStyle} />
                            </IconLink>
                        </Row>
                    </Icons>
                    <StyledLink to="/sign-in"><FaUserCircle/></StyledLink>
                    <StyledUser>
                        <FaUserCircle style={{color: COLORS.lightGreen, fontSize: '27px'}} />
                        <UserCont className="dropUser">
                            <ArrowUp></ArrowUp>
                            <SignInText>Signed in</SignInText>
                            <Email>dtran21k@yumme.network</Email>
                        </UserCont>
                    </StyledUser>
                </Row>

                {basketEmpty && <BasketEmpty positionStyle={positionStyle} onClick={basketEmptyHandler} />}
                {basketOne && <BasketOneModal positionStyle={positionStyle} onClick={basketOneHandler} submit={newAddressHandler}/>}
                {basketTwo && <BasketTwoModal positionStyle={positionStyle} onClick={basketTwoHandler} submit={addressHandler}/>}
                {emptyNotification && <EmptyNotificationModal positionStyle={positionStyle} onClick={emptyNotificationHandler}/>}
                {notification && <NotificationModal positionStyle={positionStyle} onClick={notificationHandler}/>}
                {newAddress && <NewAddressModal positionStyle={positionStyle} cancel={newAddressHandler} continueBtn={passNewPaymnt}/>}
                {address && <AddressModal positionStyle={positionStyle} cancel={addressHandler} addNew={passAddNewAddress} continueBtn={passPayment}/>}
                {newPayment && <NewPaymentModal positionStyle={positionStyle} onClick={newPaymentHandler} continueBtn={passNewCardInfo} newPaypal={passPaypal} redBelly={passRedbelly} cash={newPaymentHandler} />}
                {payment && <PaymentModal positionStyle={positionStyle} cancel={paymentHandler} addNew={passAddnewPayment} continueBtn={passConfirmOrder}/>}
                {newCardInfo && <NewCardInfoModal positionStyle={positionStyle} onClick={newCardInfoHandler} terms={passTerms} continueBtn={newCardInfoHandler} />}
                {terms && <TermsModal positionStyle={positionStyle} cancelClick={termsHandler} agreeBtn={passBackToNewCardInfo}/>}
                {paypal && <NewPaypalModal positionStyle={positionStyle} cancel={paypalHandler} continueBtn={paypalHandler}/>}
                {redbelly && <NewredbellyModal positionStyle={positionStyle} cancel={redbellyHandler} continueBtn={redbellyHandler}/>}
                {confirmOrder && <ConfirmOrderModal positionStyle={positionStyle} cancel={confirmOrderHandler} success={placeOrderSuccess} fail={placeOrderFail}/>}
                {waiting && <WaitingModal positionStyle={positionStyle} />}
                {summary && <SummaryOfPayments positionStyle={positionStyle} />}
                {success && <SuccessModal positionStyle={positionStyle} agreeBtn={successHandler}/>}
                {fail && <FailModal positionStyle={positionStyle} agreeBtn={failHandler}/>}
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

const StyledNavLink = styled(NavLink)`
    color: ${COLORS.textColor};
    text-decoration: none;
    margin:  5px 0 5px 25px;
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
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    display: inline-block;

    :hover .drop {
        display: block;
    }
`;

const MenuCont = styled.div`
    position: absolute;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    border-radius: 8px;
    padding: 10px 17px 10px 0;
    background-color: ${COLORS.white};
    top: 30px;
    left: 20px;
    display: none;
    z-index: 1;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
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
    color: ${COLORS.pageTitle};
    text-decoration: none;
    font-size: 27px;
`;

const StyledUser = styled.div`
    color: ${COLORS.textColor};
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    display: inline-block;

    :hover .dropUser {
        display: block;
    }
`;

const UserCont = styled.div`
    position: relative;
    position: absolute;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
    padding: 10px 15px;
    background-color: ${COLORS.white};
    top: 40px;
    left: -120px;
    display: none;
    z-index: 1;
`;

const ArrowUp = styled.div`
    width: 0; 
    height: 0; 
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid ${COLORS.white};
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute;
    top: -7px;
    left: 125px;
`;

const SignInText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${COLORS.pageTitle};
    margin: -1px 0;
    padding: 3px 0;
`;

const Email = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.restaurantInfo};
    margin: -1px 0;
    padding: 3px 0;
`;

export default Header;