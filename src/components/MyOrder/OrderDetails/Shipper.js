import React from 'react';
import styled from 'styled-components';

import IMG from '../../../assets/images';
import COLORS from '../../../styles/colors';

import { BsFillTelephoneFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";

const Shipper = () => {
  return (
    <FullRow>
        <RowTitle>Shipper</RowTitle>
        <DetailsRow>
            <Row>
                <Image src={IMG.profile1} alt="profile" />
                <Name>Jason Derulo</Name>
            </Row>
            <Row>
                <Icon>
                    <RiMessage2Fill style={{color: COLORS.white}}/>
                </Icon>
                <Icon>
                    <BsFillTelephoneFill style={{color: COLORS.white}} />
                </Icon>
            </Row>        
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
    justify-content: space-between;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const Name = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.restaurantInfo};
    margin: -1px 0;
`;

const Image = styled.img`
    width: 50px;
    margin-right: 10px;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.orange};
    margin-left: 10px;
`;

export default Shipper;