import React from "react";
import styled from "styled-components";

import COLORS from "../styles/colors";

import CategoryNearbyHeader from "../components/Headers/CategoryNearbyHeader";
import NearbyShop from "../components/NearbyShop";
// import PageHeader from "../components/Headers/PageHeader";
import Promotion from "../components/Promotion";
import VirtualKitchen from "../components/VirtualKitchen";
import CategoryPromotionHeader from "../components/Headers/CategoryPromotionHeader";
import CategoryVirtualHeader from "../components/Headers/CategoryVirtualHeader";

const Categories = () => {
    return (
        <Container>
            {/* <PageHeader title={title} /> */}
            <CategoryNearbyHeader />
            <NearbyShop />
            <CategoryPromotionHeader />
            <Promotion />
            <CategoryVirtualHeader />
            <VirtualKitchen />
        </Container>
    )
}

const Container = styled.div`
    background-color: ${COLORS.white};
`;

export default Categories;