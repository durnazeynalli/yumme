import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { GiCancel } from "react-icons/gi";

const TermsModal = ({ positionStyle , cancelClick, agreeBtn }) => {

    return (
        <PageBg style={positionStyle}>
            <Container>
                <GiCancel onClick={cancelClick} style={cancelBTN} />
                <Title>Credit Card Registration Terms </Title>
                <ThinBorder></ThinBorder>

                <TextBorder>
                    <Text>Add your credit card information to pay for and use paid services with all Yumme account 
                        services. As part of the Yumme Single Sign-On feature, the default setting allows you to make 
                        future purchases from Yumme account services without having to enter your credit card information again. 
                        Expiring cards will even be updated without you having to register your card again. You can manage your 
                        card information by going to My payment methods. Note that your credit card information will be stored 
                        and managed by Yumme, credit card companies, or our payment gateway providers. Their privacy policies 
                        will apply to your credit card information and any other personal details submitted to them. When you 
                        register a credit card, a minimum authorization hold will be placed on your card to verify your credit 
                        card information. You will not actually be charged. By clicking Register, you affirm that you have 
                        read the above, and agree to the terms and conditions stated. If you do not agree, please press the Back button. 
                    </Text>
                </TextBorder>

                <Button onClick={agreeBtn}>Agree</Button>
            </Container>
        </PageBg>
    )
}

const PageBg = styled.div`
    padding: 10% 0 11%;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    border-radius: 25px;
    background-color: ${COLORS.white};
    position: relative;
    padding: 15px 60px;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute; 
    z-index: 1; 
`;

const cancelBTN = {
    position: 'absolute',
    color: COLORS.pageTitle,
    right: '25px',
    top: '20px',
};

const Title = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: ${COLORS.textColor};
    text-align: center;
    margin: -1px;
    padding: 10px 0;
`;

const ThinBorder = styled.div`
    border-top: 1px solid ${COLORS.border};
    margin: 10px 0;
`;

const TextBorder = styled.div`
    width: 370px;
    margin: 10px 0;
    overflow-y: scroll;
    height: 300px;
`;

const Text = styled.p`
    color: ${COLORS.restaurantInfo};
    text-align: justify;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.01em;
`;

const Button = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    margin: 10px 0;
    padding: 15px;
    text-align: center;
    color:  ${COLORS.white};
    border-radius: 12px;
    width: 100%;
`;

export default TermsModal;