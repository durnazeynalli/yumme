import React from "react";
import styled from "styled-components";

import IMG from "../assets/images";
import COLORS from "../styles/colors";

const OrderDetails = ({ title, text, button, onClick, height }) => {
    return (
        <OrderContainer style={height}>
            <Title>{title}</Title>
            <Container>
                <FoodImg src={IMG.food} alt="food" />
                <Text>{text}</Text>
            </Container>
            <OrderButton onClick={onClick}>{button}</OrderButton>
        </OrderContainer>
    )
}

const OrderContainer = styled.div`
    text-align: center;
    box-shadow: 0px 12px 24px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
    background-color: ${COLORS.white};
    padding: 20px;
`;

const Title = styled.h4`
    color: ${COLORS.titleColor};
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin: -1px 0;
`;

const Container = styled.div`
    margin: 6% 10%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FoodImg = styled.img`

`;

const Text = styled.p`
    color: ${COLORS.grayTextColor};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;

const OrderButton = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    color: ${COLORS.white};
    border-radius: 12px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    padding: 10px 0;
`;

export default OrderDetails;