import React from 'react';
import styled from 'styled-components';

import COLORS from '../../../styles/colors';

import { MdDeliveryDining } from "react-icons/md";

const ServiceOptions = () => {
  return (
    <FullRow>
        <StartRow>
            <MdDeliveryDining style={{color: COLORS.orange}} />
            <RowTitle>Service options</RowTitle>
        </StartRow>
        <DetailsRow>
            <ColumnTitle>Shipper delivery</ColumnTitle>
        </DetailsRow>
    </FullRow>
  )
}

const FullRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 13px 0;
`;

const StartRow = styled.div`
    display: flex;
    align-items: center;
`;

const RowTitle = styled.h6`
    margin: -1px 0;
    color: ${COLORS.grayTextColor};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding-left: 7px;
`;

const DetailsRow = styled.div`
    width: 70%;
`;

const ColumnTitle = styled.h6`
    margin: -1px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${COLORS.textColor};
`;

export default ServiceOptions