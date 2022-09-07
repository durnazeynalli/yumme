import React from "react";
import styled from "styled-components";

import IMG from "../assets/images";
import COLORS from "../styles/colors";

const MyCard = () => {
    return (
        <OrderContainer>
            <Title>My cart (2)</Title>
            <FoodDetails>
                <Image src={IMG.pizza1} alt="image" />
                <Info>
                    <Name>Seafood Pizza</Name>
                    <Text>Size S</Text>
                    <Row>
                        <Price>A$40</Price>
                        <Counter>
                            <Oper>-</Oper>
                            <Number>01</Number>
                            <Oper>+</Oper>
                        </Counter> 
                    </Row> 
                </Info>
            </FoodDetails>
            <FoodDetails>
                <Image src={IMG.pizza2} alt="image" />
                <Info>
                    <Name>Seafood Pizza</Name>
                    <Text>Size L</Text>
                    <Row>
                        <Price>A$100</Price>
                        <Counter>
                            <Oper>-</Oper>
                            <Number>01</Number>
                            <Oper>+</Oper>
                        </Counter> 
                    </Row> 
                </Info>
            </FoodDetails>
            <Position>
                <Border></Border>
                <TotalCont>
                    <Row>
                        <Text>Total</Text>
                        <Price>A$140</Price>
                    </Row>
                </TotalCont>
                <OrderButton>Submit</OrderButton>
            </Position>
        </OrderContainer>
    )
}

const OrderContainer = styled.div`
    text-align: center;
    box-shadow: 0px 12px 24px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
    background-color: ${COLORS.white};
    padding: 20px 20px 30px;
    height: 55%;
    position: relative;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h4`
    color: ${COLORS.titleColor};
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;
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

const Counter = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${COLORS.border};
    border-radius: 4px;
`;

const Oper = styled.div`
    width: 33%;
    text-align: center;
    color: ${COLORS.textColor};
`;

const Number = styled.div`
    width: 34%;
    height: 20px;
    text-align: center;
    color: ${COLORS.green};
    border-right: 1px solid ${COLORS.border};
    border-left: 1px solid ${COLORS.border};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    padding-top: 5px;
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
    margin: 5px 0 20px; 
`;

const Border = styled.div`
    border-top: 1px solid ${COLORS.border};
    margin: 10px 0;
`;

const TotalCont = styled.div`
    margin: 5px 0;
`;

const Position = styled.div`
    position: absolute;
    bottom: 7px;
    width: 86%;
`;

export default MyCard;