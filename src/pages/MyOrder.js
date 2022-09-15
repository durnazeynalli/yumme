import React from "react";
import styled from "styled-components";

import MyOrdersHeader from "../components/Headers/MyOrdersHeader";
import OrderDetails from "../components/MyOrder/OrderDetails";

import COLORS from "../styles/colors";

const MyOrder = () => {
    return (
        <Container>
            <MyOrdersHeader />
            <OrderDetails />
        </Container>
    )
}

const Container = styled.div`
    background-color: ${COLORS.white};
`;

export default MyOrder