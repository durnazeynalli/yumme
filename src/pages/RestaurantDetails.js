import React from "react";
import styled from "styled-components";

import RestaurantDetailsHeader from "../components/RestaurantDetailsHeader";
import RestaurantDetails from "../components/RestaurantDetails";

import COLORS from "../styles/colors";

const Categories = ({ title }) => {
    return (
        <Container>
            <RestaurantDetailsHeader title={title} />
            <RestaurantDetails />
        </Container>
    )
}

const Container = styled.div`
    background-color: ${COLORS.white};
`;

export default Categories;