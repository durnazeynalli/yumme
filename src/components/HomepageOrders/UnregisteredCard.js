import React, { useState } from "react";
import styled from "styled-components";

import OrderCategories from "./OrderCategories";
import OrderDetails from "./OrderDetails";
import MyCard from "./MyCard";

const UnregisteredCard = () => {

    const [orders, setOrders] = useState(false);

    const ordersHandler = () => setOrders(v => !v);

    return (
        <Container>
            <OrderCategories />
            <RightContainer>           
                {orders ?
                    <MyCard height={{height: '100%'}}/> 
                    : 
                    <OrderDetails 
                        onClick={ordersHandler}
                        height={{height: '100%'}}
                        text="Your cart is empty and you are hungry. Let’s order something to eat and drink."
                        title="My Cart [0]"
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

const RightContainer = styled.div`
    width: 30%;
`;


export default UnregisteredCard