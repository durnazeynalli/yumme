import React from "react";
import styled from "styled-components";

import IMG from "../../assets/images";
import COLORS from "../../styles/colors";

const BasketOne = ({ positionStyle, onClick, submit }) => {
    return (
        <PageBg style={positionStyle} onClick={onClick}>
            <OrderContainer>
                <ArrowUp></ArrowUp>
                <Title>My cart [1]</Title>
                <FoodDetails>
                    <Image src={IMG.pizza1} alt="image" />
                    <Info>
                        <Name>Pizza Hut Restaurant (2 items)</Name>
                        <Text>Chicken Pizza size S, Beef Pizza size M,...</Text>
                        <Price>$80</Price>
                    </Info>
                </FoodDetails>
                <OrderButton onClick={submit}>Go to checkout</OrderButton>
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
    padding: 10px 20px 50px;
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

const Title = styled.h4`
    color: ${COLORS.titleColor};
    font-weight: 700;
    font-size: 16px;
    margin: -1px 0;
    text-align: center;
`;

const FoodDetails = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${COLORS.border};
    border-radius: 10px;
    padding: 5px 10px;
    margin: 10px 0;
`;

const Info = styled.div`
    width: 80%;
`;

const Image = styled.img`
    width: 75px;
    height: 75px;
    margin-right: 10px;
    border-radius: 10px;
`;

const Name = styled.h6`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin: -1px;
    padding: 5px 0;
    text-align: left;
    color: ${COLORS.textColor};
`;

const Text = styled.p`
    margin: -1px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    padding: 5px 0;
    text-align: left;
    color: ${COLORS.pageTitle};
`;

const Price = styled.h6`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin: -1px;
    padding: 8px 0;
    color: ${COLORS.orange};
`;

const OrderButton = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    color: ${COLORS.white};
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    padding: 5px 10px;
    position: absolute;
    bottom: 10px;
    right: 20px;
`;

export default BasketOne;