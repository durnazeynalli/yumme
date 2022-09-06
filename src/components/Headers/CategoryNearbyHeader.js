import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { FiFilter } from "react-icons/fi";
import { MdKeyboardArrowDown } from 'react-icons/md';

const CategoryNearbyHeader = () => {
    return (
        <Container>
            <Row>
                <Title>Nearby Shops</Title>
                <FilterColumn>
                    <FiFilter styled={{color: 'gray'}} />
                    <Cont>
                        <Nearby>Nearby</Nearby>
                        <MdKeyboardArrowDown />
                    </Cont>
                </FilterColumn>
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

const FilterColumn = styled.div`
    display: flex;
    align-items: center;
`;

const Cont = styled.div`
    display: flex;
    align-items: center;
    background-color: ${COLORS.border}; 
    border-radius: 4px;
    margin-left: 10px;
`;

const Nearby = styled.p`
    margin: -1px 5px;
    font-weight: 400;
    font-size: 12px;
    padding: 6px 0;
    color: ${COLORS.textColor};
`;

export default CategoryNearbyHeader;