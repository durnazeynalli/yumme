import React from "react";
import styled from "styled-components";
import NearbyShop from "../components/NearbyShop";
import Orders from "../components/Orders";
import Promotion from "../components/Promotion";
import VirtualKitchen from "../components/VirtualKitchen";
import COLORS from "../styles/colors";

const Homepage = () => {
    return (
        <Container>
            <Orders />
            <NearbyShop />
            <Promotion />
            <VirtualKitchen />
        </Container>
    )
}

const Container = styled.div`
    background-color: ${COLORS.white};
`;

export default Homepage;