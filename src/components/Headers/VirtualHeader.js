import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { AiTwotonePushpin } from "react-icons/ai";

const VirtualHeader = () => {
    return (
        <Container>
            <Row>
                <Title>Virtual Kitchen</Title>
                <ViewAll to="/virtualkitchen">View all</ViewAll>
            </Row>
            <PinContainer>
                <AiTwotonePushpin style={{color: COLORS.orange, marginLeft: '10px'}} />
                <Text>New orders placed at Virtual Kitchens should be 24 hours in advance of being delivered.</Text>
            </PinContainer>
        </Container>
    )
}

const Container = styled.div`
    margin: 2% 7% 0;
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

const PinContainer = styled.div`
    border-radius: 8px;
    background-color: rgba(255, 150, 28, 0.12);
    // padding: 3px 10px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-left: 10px;
    color: ${COLORS.textColor};
`;

export default VirtualHeader;