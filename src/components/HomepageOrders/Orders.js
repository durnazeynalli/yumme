import React, { useState } from "react";
import styled from "styled-components";

import OrderCategories from "./OrderCategories";
import MyOrders from "./MyOrders";
import OrderDetails from "./OrderDetails";

const Orders = () => {

    const [orders, setOrders] = useState(false);

    const ordersHandler = () => setOrders(v => !v);

    return (
        <Container>
            <OrderCategories />
            <RightContainer>           
                {orders ?
                    <MyOrders /> 
                    : 
                    <OrderDetails 
                        onClick={ordersHandler}
                        height={{height: '100%'}}
                        text="You haven’t had any orders today."
                        title="My Order"
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

export default Orders;