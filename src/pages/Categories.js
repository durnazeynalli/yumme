import React from "react";
import styled from "styled-components";
import FilteredNearbyShop from "../components/FilteredNearbyShop";
import PageHeader from "../components/PageHeader";
import Promotion from "../components/Promotion";
import VirtualKitchen from "../components/VirtualKitchen";
import COLORS from "../styles/colors";

const Categories = ({ title }) => {
    return (
        <Container>
            <PageHeader title={title} />
            <FilteredNearbyShop />
            <Promotion />
            <VirtualKitchen />
        </Container>
    )
}

const Container = styled.div`
    background-color: ${COLORS.white};
`;

export default Categories;