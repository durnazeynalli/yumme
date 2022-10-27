import React from "react";
import styled from "styled-components";

import RestaurantDetailsHeader from "../components/Headers/RestaurantDetailsHeader";
import RestaurantDetails from "../components/RegisteredUserOrders/RestaurantDetails";

import COLORS from "../styles/colors";

const RegisteredRestaurantDetails = () => {
    return (
        <Container>
            <RestaurantDetailsHeader title="Drinks" />
            <RestaurantDetails />
        </Container>
    )
}

const Container = styled.div`
    background-color: ${COLORS.white};
`;

export default RegisteredRestaurantDetails