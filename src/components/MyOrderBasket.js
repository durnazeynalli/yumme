import React from "react";
import styled from "styled-components";

import IMG from "../assets/images";
import COLORS from "../styles/colors";

const MyOrderBasket = ({ height }) => {
    return (
        <OrderContainer style={height}>
            <Title>My Order</Title>
            <Container>
                <FoodDetails>
                    <Image src={IMG.pizza1} alt="image" />
                    <Info>
                        <Name>Pizza Hut Restaurant (2 items)</Name>
                        <Text>Chicken Pizza size S, Beef Pizza size M,...</Text>
                        <Price>$80</Price>
                    </Info>
                </FoodDetails>
                <FoodDetails>
                    <Image src={IMG.pizza2} alt="image" />
                    <Info>
                        <Name>Pizza Hut Restaurant (2 items)</Name>
                        <Text>Chicken Pizza size M, Beef Pizza size M,...</Text>
                        <Price>$100</Price>
                    </Info>
                </FoodDetails>
                <FoodDetails>
                    <Image src={IMG.pizza2} alt="image" />
                    <Info>
                        <Name>Pizza Hut Restaurant (2 items)</Name>
                        <Text>Chicken Pizza size M, Beef Pizza size M,...</Text>
                        <Price>$100</Price>
                    </Info>
                </FoodDetails>
            </Container>
            <ButtonCont>
                <Button>Checkout</Button>
            </ButtonCont>
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
    margin: 6% 30px;
    height: 77%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    width: 65px;
    height: 65px;
    margin-right: 10px;
    border-radius: 10px;
`;

const Name = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    margin: -1px;
    padding: 2px 0;
    text-align: left;
    color: ${COLORS.textColor};
`;

const Text = styled.p`
    margin: -1px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    padding: 2px 0;
    text-align: left;
    color: ${COLORS.pageTitle};
`;

const Price = styled.h6`
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    margin: -1px;
    padding: 2px 0;
    text-align: left;
    color: ${COLORS.orange};
`;

const ButtonCont = styled.div`
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const Button = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    color: ${COLORS.white};
    border-radius: 7px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    padding: 7px 15px;
    width: 50%;
`;

export default MyOrderBasket