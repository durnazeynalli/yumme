import React from "react";
import styled from "styled-components";

import COLORS from "../styles/colors";

import NearbyHeader from "../components/Headers/NearbyHeader";
import NearbyShop from "../components/NearbyShop";
import Orders from "../components/Orders";
import Promotion from "../components/Promotion";
import VirtualKitchen from "../components/VirtualKitchen";
import PromotionHeader from "../components/Headers/PromotionHeader";
import VirtualHeader from "../components/Headers/VirtualHeader";

const Homepage = () => {
    return (
        <Container>
            <Orders />
            <NearbyHeader />
            <NearbyShop />
            <PromotionHeader />
            <Promotion />
            <VirtualHeader />
            <VirtualKitchen />
        </Container>
    )
}

const Container = styled.div`
    background-color: ${COLORS.white};
`;

export default Homepage;