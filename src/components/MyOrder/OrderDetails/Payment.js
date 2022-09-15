import React from 'react';
import styled from 'styled-components';

import IMG from '../../../assets/images';
import COLORS from '../../../styles/colors';

const Payment = () => {
  return (
    <FullRow>
        <RowTitle>Paid via</RowTitle>
        <DetailsRow>
            <CardImage src={IMG.visa} alt="card" />
            <LabelCol>
                <Label>NATIONAL AUSTRALIA BANK</Label>
                <LabelText>•••• 9824</LabelText>
            </LabelCol>
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

const RowTitle = styled.h6`
    margin: -1px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${COLORS.textColor};
`;

const DetailsRow = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
`;

const LabelCol = styled.div`
    margin: 0 6px;
`;

const LabelText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.grayTextColor};
    margin: -1px 0;
    padding: 4px 0;
`;

const Label = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.textColor};
    padding: 2px 0;
`;

const CardImage = styled.img`
    
`;

export default Payment;