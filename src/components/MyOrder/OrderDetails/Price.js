import React from 'react';
import styled from 'styled-components';

import COLORS from '../../../styles/colors';

const Price = () => {
  return (
    <Container>
        <Row>
            <Title>Subtotal</Title>
            <Text>A$80</Text>
        </Row>
        <Row>
            <Title>Delivery Fee</Title>
            <Text>A$5</Text>
        </Row>
        <Row>
            <Title>Promo</Title>
            <DetailsRow>
                <Row>
                    <Text style={{color: COLORS.restaurantInfo}}>10% OFF</Text>
                    <Text>-A$8</Text>
                </Row>
            </DetailsRow>
        </Row>
        <Border></Border>
        <Row>
            <Text style={{fontSize: '18px'}}>Total</Text>
            <Text style={{fontSize: '18px', color: COLORS.lightGreen}}>A$77</Text>
        </Row>
    </Container>

  )
}

const Container = styled.div`
    margin: 13px 0;
    width: 100%;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h6`
    margin: -1px 0;
    color: ${COLORS.restaurantInfo};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    padding: 10px 0;
`;

const DetailsRow = styled.div`
    width: 70%;
`;

const Border = styled.div`
    border-top: 2px dashed ${COLORS.border};
    margin: 10px 0;
`;

const Text = styled.h6`
    margin: -1px 0;
    padding: 10px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${COLORS.textColor};
`;

export default Price;