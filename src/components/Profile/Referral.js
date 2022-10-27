import React, { useState } from "react";
import styled from "styled-components";

import IMG from "../../assets/images";
import COLORS from "../../styles/colors";


const Referral = () => {
    const [element, setElement] = useState({
        email: '',
        friendsEmail: '',
        emailValid: false,
        friendsEmailValid: false,
        submitValid: true
    });

    const emailHandler = (e) => {
        let emailValid = e.target.value ? true : false;
        let submitValid = emailValid && element.friendsEmail;

        setElement({
            ...element,
            email: e.target.value,
            emailValid: emailValid,
            submitValid: !submitValid
        });
    }

    const friendsEmailHandler = (e) => {
        let friendsEmailValid = e.target.value ? true : false;
        let submitValid = friendsEmailValid && element.email;

        setElement({
            ...element,
            friendsEmail: e.target.value,
            friendsEmailValid: friendsEmailValid,
            submitValid: !submitValid
        });
    }

    return (
        <Container>          
                <OrderContainer>
                    <Title>Refer a friend</Title>
                    <GiftContainer>
                        <Image src={IMG.award} alt="award" />
                        <Text>Send a gift of &nbsp; <Span>10% off</Span>&nbsp; to your friends and receive 
                        &nbsp;<Span>30 RBX coins</Span> &nbsp; off with your checkout when they make 
                            their first purchase of $30 or more. T&amp;Cs applies.
                        </Text>
                    </GiftContainer>
                    <Form>
                        <Border style={element.email ? {padding: '5px 20px'} : {padding: '10px 20px'}}>
                            <BorderLabel style={element.email ? {display: 'inline'} : {display: 'none'}}>Your email</BorderLabel>
                            <TextInput type="email" value={element.email} onChange={emailHandler} placeholder="Your email" />
                        </Border>

                        <Border style={element.friendsEmail ? {padding: '5px 20px'} : {padding: '10px 20px'}}>
                            <BorderLabel style={element.friendsEmail ? {display: 'inline'} : {display: 'none'}}>Your friend’s email</BorderLabel>
                            <TextInput type="email" value={element.friendsEmail} onChange={friendsEmailHandler} placeholder="Your friend’s email" />
                        </Border>
                    
                        <Button 
                            disabled={element.submitValid}
                            style={{backgroundColor: element.submitValid ? COLORS.disableOrange : COLORS.orange, borderColor: element.submitValid ? COLORS.disableOrange : COLORS.orange}}
                        >Submit</Button>
                     </Form>
                </OrderContainer>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;

`;

const OrderContainer = styled.div`
    position: relative;
    height: 95%;

`;

const Title = styled.h6`
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    color: ${COLORS.orange};
    margin: -1px 0;
    // padding: 15px 0;
`;

const GiftContainer = styled.div`
    background: rgba(255, 150, 28, 0.35);
    border-radius: 12px;
    padding: 10px 40px;
    display: flex;
    align-items: center;
    margin: 15px 0 25px;

`;

const Image = styled.img`
    width: 30%;
`;

const Text = styled.h6`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.grayTextColor};
    margin: -1px 0;
    text-align: justify;
    line-height: 24px;
`;

const Span = styled.span`
    color: ${COLORS.orange};
    font-weight: 700;

`;

const Form = styled.form`
    text-align: left;
`;

const Border = styled.div`
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
    margin: 15px 0;
`;

const BorderLabel = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${COLORS.pageTitle};
`;

const TextInput = styled.input`
    outline: none;
    border: none;
    width: 100%;
`;

const Button = styled.button`
    border: 1px solid;
    margin: 10px 0;
    padding: 15px;
    text-align: center;
    color:  ${COLORS.white};
    border-radius: 12px;
    width: 30%;
    position: absolute;
    right: 0;
    bottom: 0;
`;

export default Referral