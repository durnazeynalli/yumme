import React from "react";
import styled from "styled-components";
import IMG from "../../assets/images";

import COLORS from "../../styles/colors";

const SuccessModal = ({ positionStyle, agreeBtn }) => {

    return (
        <PageBg style={positionStyle}>
            <Container>
                <Image src={IMG.success} alt="success" />
                <Body>
                    <Title>Your order has been recieved!</Title>
                    <TextBorder>
                        <Text>Pizza Hut, thank you for your business. Your order ID is <Span>xxx1234567890</Span></Text>
                    </TextBorder>
                    <Text style={{fontSize: '12px'}}>You will receive an order confirmation email with details of your order.</Text>
                    <Button onClick={agreeBtn}>CONTINUE SHOPPING</Button>
                </Body>
            </Container>
        </PageBg>
    )
}

const PageBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    border-radius: 25px;
    background-color: ${COLORS.white};
    position: relative;
    padding-bottom: 15px;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute; 
    z-index: 1; 
`;

const Image = styled.img`
    width: 100%;
    margin-top: -15px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    margin-bottom: 20px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 60px;
`;

const Title = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: ${COLORS.textColor};
    margin: -1px;
    // padding: 10px 0;
`;

const TextBorder = styled.div`
    width: 250px;
    margin: 5px 0;
`;

const Text = styled.p`
    color: ${COLORS.grayTextColor};
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.01em;
    text-align: center;
`;

const Span = styled.span`
    color: ${COLORS.orange};
`;

const Button = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    margin: 10px 0;
    padding: 15px;
    text-align: center;
    color:  ${COLORS.white};
    border-radius: 12px;
    width: 70%;
`;

export default SuccessModal;