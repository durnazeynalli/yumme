import React from "react";
import styled from "styled-components";

import IMG from "../../assets/images";
import COLORS from "../../styles/colors";

const EmptyOrder = ({ height, title }) => {
    return (
        <OrderContainer style={height}>
            <Title>{title}</Title>
            <Container>
                <FoodImg src={IMG.emptyOrder} alt="food" />
                <TextCont>
                    <Text>Let’s empty your cart and go to checkout.</Text>
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
    height: 68%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FoodImg = styled.img`
    margin-bottom: 20px;
`;

const TextCont = styled.div`
    width: 70%;
`;

const Text = styled.p`
    color: ${COLORS.grayTextColor};
    font-weight: 400;
    font-size: 16px;
    margin: -1px 0;
    padding: 3px 0;
`;

export default EmptyOrder