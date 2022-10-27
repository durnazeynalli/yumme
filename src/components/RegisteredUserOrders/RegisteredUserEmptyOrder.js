import React from "react";
import styled from "styled-components";

import OrderCategories from "../HomepageOrders/OrderCategories";
import EmptyOrder from "./EmptyOrder";

const RegisteredUserEmptyOrder = () => {

    return (
        <Container>
            <OrderCategories />
            <RightContainer>           
                <EmptyOrder 
                    height={{height: '100%'}}
                    title="My Order"
                />
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

export default RegisteredUserEmptyOrder