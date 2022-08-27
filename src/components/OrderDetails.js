import React from "react";
import styled from "styled-components";

import IMG from "../assets/images";
import COLORS from "../styles/colors";

const OrderDetails = ({ title, text, button }) => {
    return (
        <OrderContainer>
            <Title>{title}</Title>
            <FoodImg src={IMG.food} alt="food" />
            <Text>{text}</Text>
            <OrderButton>{button}</OrderButton>
        </OrderContainer>
    )
}

const OrderContainer = styled.div`
    text-align: center;
    box-shadow: 0px 12px 24px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
    background-color: ${COLORS.white};
    padding-top: 20px;
`;

const Title = styled.h4`
    color: ${COLORS.titleColor};
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin-top: 20px;
`;

const FoodImg = styled.img`
    margin-top: 25px;
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
    width: 80%;
    padding: 10px 0;
    margin: 35px 0 20px; 
`;

export default OrderDetails;