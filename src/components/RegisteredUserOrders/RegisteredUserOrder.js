import React from "react";
import styled from "styled-components";

import OrderCategories from "../HomepageOrders/OrderCategories";
import EmptyCard from "./EmptyCard";

const RegisteredUserOrder = () => {

    return (
        <Container>
            <OrderCategories />
            <RightContainer>           
                <EmptyCard 
                    height={{height: '100%'}}
                    title="My Cart"
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

export default RegisteredUserOrder