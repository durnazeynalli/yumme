import React from "react";
import styled from "styled-components";
import COLORS from "../styles/colors";

const RestaurantMenu = ({ title }) => {
    return (
        <Container>
            <Title>{title}</Title>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 20px;
`;

const Title = styled.h6`
    font-weight: 700;
    font-size: 16px;
    color: ${COLORS.textColor};
`;

export default RestaurantMenu;