import React from "react";
import styled from "styled-components";
import OnGoingHeader from "../components/Headers/OnGoingHeader";
import History from "../components/MyOrder/History";
import OnGoing from "../components/MyOrder/OnGoing";

import COLORS from "../styles/colors";

const OnGoingOrders = () => {
    return (
        <Container>
            <OnGoingHeader />
            <OnGoing />
            <History/>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${COLORS.white};
`;

export default OnGoingOrders;
