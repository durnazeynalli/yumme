import React from 'react';
import styled from 'styled-components';

import COLORS from '../../../styles/colors';
import IMG from '../../../assets/images';

import { MdRestaurantMenu } from "react-icons/md";

const Orders = () => {
  return (
    <FullRow>
        <StartRow>
            <MdRestaurantMenu style={{color: COLORS.orange}} />
            <RowTitle>Deliver to</RowTitle>
        </StartRow>
        <DetailsRow>
            <FoodDetails>
                <Row>
                    <Text>x1</Text>
                    <Image src={IMG.pizza1} alt="image" />
                    <Info>
                        <Name>Seafood Pizza</Name>
                        <Text>Size S</Text>
                    </Info>
                </Row>
                <Name>A$40</Name>
            </FoodDetails>
            <FoodDetails>
                <Row>
                    <Text>x1</Text>
                    <Image src={IMG.pizza1} alt="image" />
                    <Info>
                        <Name>Chicken Pizza</Name>
                        <Text>Size M</Text>
                    </Info>
                </Row>
                <Name>A$80</Name>
            </FoodDetails>
        </DetailsRow>
    </FullRow>
  )
}

const FullRow = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 5px 0;
`;

const StartRow = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;
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

const Row = styled.div`
    display: flex;
    align-items: flex-start;
`;

const FoodDetails = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 10px 0;
`;

const Info = styled.div`
    width: 80%;
`;

const Image = styled.img`
    width: 55px;
    height: 55px;
    margin: 0 10px;
    border-radius: 10px;
`;

const Name = styled.h6`
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

export default Orders