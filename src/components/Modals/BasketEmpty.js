import React from "react";
import styled from "styled-components";

import IMG from "../../assets/images";
import COLORS from "../../styles/colors";

const BasketEmpty = ({ positionStyle, onClick }) => {
    return (
        <PageBg style={positionStyle} onClick={onClick}>
            <OrderContainer>
                <ArrowUp></ArrowUp>
                <Container>
                    <Title>My Cart</Title>
                    <Image src={IMG.food} alt="image" />
                    <Text>Your cart is empty and you are hungry.</Text>
                    <Text>Let’s order something to eat and drink.</Text>
                </Container>
            </OrderContainer>
        </PageBg>
        
    )
}

const PageBg = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 1
`;

const OrderContainer = styled.div`
    box-shadow: 0px 12px 24px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
    background-color: ${COLORS.white};
    width: 27%;
    position: absolute;
    right: 100px;
    top: 55px; 
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
    left: 220px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    padding: 0 0 15px;
`;

const Title = styled.h4`
    color: ${COLORS.titleColor};
    font-weight: 500;
    font-size: 18px;
    margin: -1px 0;
    text-align: center;
    padding: 10px 0;
`;

const Image = styled.img`
    // width: 75px;
    // height: 75px;
    margin: 5px 0 10px;
`;

const Text = styled.p`
    margin: -1px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding: 3px 20px;
    text-align: left;
    color: ${COLORS.pageTitle};
`;

export default BasketEmpty;