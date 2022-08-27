import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IMG from "../assets/images";
import COLORS from "../styles/colors";
import OrderDetails from "./OrderDetails";

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
                <RightContainer>
                    <OrderDetails 
                        title="My Orders"
                        text="You haven’t have any order today"
                        button="Order"
                    />
                </RightContainer>
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
    width: 73%;
`;

const RightContainer = styled.div`
    width: 25%;
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

export default Orders;