import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import COLORS from "../../styles/colors";

const NearbyHeader = () => {
    return (
        <Container>
            <Row>
                <Title>Nearby restaurants &amp; shops </Title>
                <ViewAll to="/nearbyshop">View all</ViewAll>
            </Row>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 7%;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h4`
    color: ${COLORS.textColor};
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
`;

const ViewAll = styled(Link)`
    color: ${COLORS.blue};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`;

export default NearbyHeader;