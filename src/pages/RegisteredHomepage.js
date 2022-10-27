import React from "react";
import styled from "styled-components";

import NearbyHeader from "../components/Headers/NearbyHeader";
import NearbyShop from "../components/NearbyShop";
import Promotion from "../components/Promotion";
import VirtualKitchen from "../components/VirtualKitchen";
import PromotionHeader from "../components/Headers/PromotionHeader";
import VirtualHeader from "../components/Headers/VirtualHeader";
import RegisteredUserOrder from "../components/RegisteredUserOrders/RegisteredUserOrder";

import COLORS from "../styles/colors";

const RegisteredHomepage = () => {
    return (
        <Container>
            <RegisteredUserOrder />
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

export default RegisteredHomepage