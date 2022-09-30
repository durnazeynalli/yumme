import React from "react";
import styled from "styled-components";

import IMG from "../assets/images";
import COLORS from "../styles/colors";

const OrderDetails = ({ onClick, height }) => {
    return (
        <OrderContainer style={height}>
            <Title>My Order</Title>
            <Container>
                <FoodImg onClick={onClick} src={IMG.food} alt="food" />
                <TextCont>
                    <Text>Your cart is empty and you are hungry.</Text>
                    <Text>Let’s order something to eat and drink.</Text>
                </TextCont>
            </Container>
        </OrderContainer>
    )
}

const OrderContainer = styled.div`
    text-align: center;
    box-shadow: 0px 12px 24px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
    background-color: ${COLORS.white};
    padding: 20px 0 0;
`;

const Title = styled.h4`
    color: ${COLORS.titleColor};
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin: -1px 0;
`;

const Container = styled.div`
    margin: 6% 0;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FoodImg = styled.img`
    margin-bottom: 20px;
`;

const TextCont = styled.div`
    width: 170px;
`;

const Text = styled.p`
    color: ${COLORS.grayTextColor};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: -1px 0;
`;

// const OrderButton = styled.button`
//     border: 1px solid ${COLORS.orange};
//     background-color: ${COLORS.orange};
//     color: ${COLORS.white};
//     border-radius: 12px;
//     font-weight: 700;
//     font-size: 16px;
//     line-height: 24px;
//     width: 100%;
//     padding: 10px 0;
// `;

export default OrderDetails;