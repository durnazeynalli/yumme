import React from 'react';
import styled from 'styled-components';

import COLORS from '../../../styles/colors';

import { BsDot } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";


const DeliverTo = () => {
  return (
    <FullRow>
        <StartRow>
            <MdLocationOn style={{color: COLORS.orange}} />
            <RowTitle>Deliver to</RowTitle>
        </StartRow>
        <DetailsRow>
            <AlignRow>
                <Column>
                    <StartRow>
                        <ColumnTitle>Bessie Cooper</ColumnTitle>
                        <BsDot style={{color: '#ff961c59'}} />
                        <ColumnTitle>0165550120</ColumnTitle>
                    </StartRow>
                    <Text>123 Brown Street Captain Creek QLD</Text>
                </Column>
                <MdKeyboardArrowRight style={{color: COLORS.pageTitle}} />
            </AlignRow>
        </DetailsRow>
    </FullRow>
  )
}

const FullRow = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
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

const AlignRow = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const Column = styled.div`

`;

const ColumnTitle = styled.h6`
    margin: -1px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${COLORS.textColor};
`;

const Text = styled.p`
    margin: -1px 0;
    color: ${COLORS.grayTextColor};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    padding: 8px 0;
`;

export default DeliverTo;