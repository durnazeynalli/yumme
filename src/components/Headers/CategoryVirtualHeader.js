import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import COLORS from "../../styles/colors";

const CategoryVirtualHeader = () => {
    return (
        <Container>
            <Row>
                <Title>Virtual Kitchen</Title>
                <ViewAll to="/virtualkitchen">View all</ViewAll>
            </Row>
        </Container>
    )
}

const Container = styled.div`
    margin: 3% 7% 0;
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

export default CategoryVirtualHeader;