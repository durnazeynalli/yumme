import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IMG from "../assets/images";
import COLORS from "../styles/colors";

const options = [
    {
        link: "/drink",
        image: IMG.vector,
        text: "Drinks"
    },
    {
        link: "/pizza",
        image: IMG.pizza,
        text: "Pizza"
    },
    {
        link: "/burger",
        image: IMG.burger,
        text: "Burger"
    },
    {
        link: "/dessert",
        image: IMG.dessert,
        text: "Dessert"
    },
    {
        link: "/cake",
        image: IMG.cake,
        text: "Cake"
    }
];

const Orders = () => {
    return (
        <Container>
            <Row>
                <LeftContainer>
                    <Image src={IMG.image} alt="image" />
                    <OptionCont>
                        <Row>
                            {
                                options.map((option) => {
                                    return (
                                        <Column to={option.link}>
                                            <OptionImg src={option.image} alt="option" />
                                            <OptionText>{option.text}</OptionText>
                                        </Column>
                                    )
                                })
                            }
                            
                        </Row>
                    </OptionCont>
                </LeftContainer>
                <OrderContainer>
                    <Title>My Orders</Title>
                    <FoodImg src={IMG.food} alt="food" />
                    <Text>You haven’t have any <br/> order today</Text>
                    <OrderButton>Order</OrderButton>
                </OrderContainer>
            </Row>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 7% 20px;
    padding: 20px 0;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftContainer = styled.div`
    width: 68%;
`;

const Image = styled.img`
    width: 100%;
`;

const OptionCont = styled.div`
    margin-top: 20px;
`;

const Column = styled(Link)`
    box-shadow: 0px 12px 24px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
    text-align: center;
    width: 18%;
    padding: 15px 0 25px;
    text-decoration: none;
`;

const OptionImg = styled.img`
    margin: 10px 0 5px;
`;

const OptionText = styled.h6`
    color: ${COLORS.textColor};
    font-weight: 400;
    font-size: 16px;
    margin: -2px 0;
`;

const OrderContainer = styled.div`
    text-align: center;
    box-shadow: 0px 12px 24px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
    background-color: ${COLORS.white};
    width: 28%;
`;

const Title = styled.h4`
    color: ${COLORS.titleColor};
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
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

export default Orders;