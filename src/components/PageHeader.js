import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../styles/colors";

import { MdKeyboardArrowRight } from 'react-icons/md';

const PageHeader = ({ title }) => {
    return (
        <Container>
            <Row>
                <StyledLink to="/">Home</StyledLink>
                <MdKeyboardArrowRight style={arrowStyle} />
                <Title>{title}</Title>
            </Row>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 7%;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const StyledLink = styled(Link)`
    color: ${COLORS.pageTitle};
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-decoration: none;
`;

const Title = styled.h4`
    color: ${COLORS.orange};
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
`;

const arrowStyle = {
    color: COLORS.pageTitle,
    margin: '0 10px'
}

export default PageHeader;