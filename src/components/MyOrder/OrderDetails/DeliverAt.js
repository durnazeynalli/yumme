import React from 'react';
import styled from 'styled-components';

import COLORS from '../../../styles/colors';

import { BsDot } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";

const DeliverAt = () => {
  return (
    <FullRow>
        <StartRow>
            <AiFillClockCircle style={{color: COLORS.orange}} />
            <RowTitle>Deliver at</RowTitle>
        </StartRow>
        <DetailsRow>
            <AlignRow>
                <StartRow>
                    <ColumnTitle>3:00 PM</ColumnTitle>
                    <BsDot style={{color: '#ff961c59'}} />
                    <ColumnTitle>Today 22/07/2022</ColumnTitle>
                </StartRow>
                <MdKeyboardArrowRight style={{color: COLORS.pageTitle}} />
            </AlignRow>
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

const AlignRow = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

const ColumnTitle = styled.h6`
    margin: -1px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${COLORS.textColor};
`;

export default DeliverAt