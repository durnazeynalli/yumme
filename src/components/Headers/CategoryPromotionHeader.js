import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

const CategoryPromotionHeader = () => {
    return (
        <Container>
            <Title>Promotion</Title>
        </Container>
    )
}

const Container = styled.div`
    margin: 4% 7% 0;
`;

const Title = styled.h4`
    color: ${COLORS.textColor};
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
`;

export default CategoryPromotionHeader;