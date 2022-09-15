import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IMG from "../assets/images";
import COLORS from "../styles/colors";
import MyOrders from "./MyOrders";
import OrderDetails from "./OrderDetails";

const options = [
    {
        id: 1,
        link: "/drink",
        image: IMG.vector,
        text: "Drinks"
    },
    {
        id: 2,
        link: "/pizza",
        image: IMG.pizza,
        text: "Pizzas"
    },
    {
        id: 3,
        link: "/burger",
        image: IMG.burger,
        text: "Burgers"
    },
    {
        id: 4,
        link: "/dessert",
        image: IMG.dessert,
        text: "Desserts"
    },
    {
        id: 5,
        link: "/cake",
        image: IMG.cake,
        text: "Cakes"
    }
];

const Orders = () => {

    const [orders, setOrders] = useState(false);

    const ordersHandler = () => setOrders(v => !v);

    return (
        <Container>
            <LeftContainer>
                <Image src={IMG.image} alt="image" />
                <OptionCont>
                    <Row>
                        {
                            options.map((option) => {
                                return (
                                    <Column to={option.link} key={option.id}>
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
                {orders ?
                    <MyOrders/> 
                    : 
                    <OrderDetails 
                        title="My Orders"
                        text="You haven’t have any order today"
                        button="Order"
                        onClick={ordersHandler}
                        height={{height: '100%'}}
                    />}
            </RightContainer>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 7% 20px;
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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