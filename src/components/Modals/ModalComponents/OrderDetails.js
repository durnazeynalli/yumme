import React from "react";
import styled from "styled-components";

import IMG from "../../../assets/images";
import COLORS from "../../../styles/colors";

import { MdOutlineStickyNote2 } from "react-icons/md";

const OrderDetails = () => {
    return (
        <Container>
            <Title>Order details</Title>
            <FoodDetails>
                <Row>
                    <Text>x1</Text>
                    <Image src={IMG.pizza1} alt="image" />
                    <Info>
                        <Name>Seafood Pizza</Name>
                        <Text>Size S</Text>
                    </Info>
                </Row>
                <Price>A$40</Price>
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
                <Price>A$80</Price>
            </FoodDetails>
            
            <Title style={{marginTop: '25px'}}>Note</Title>
            <NoteCont>
                <MdOutlineStickyNote2 style={{color: COLORS.orange}} />
                <Note type="text" placeholder="Add note" value="Please less sugar, no pepper." />
            </NoteCont>
        </Container>
        
    )
}

const Container = styled.div`
    margin: 10px 60px;
`;

const Title = styled.h4`
    color: ${COLORS.textColor};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    margin: -1px 0;
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
    margin-right: 10px;
    border-radius: 10px;
`;

const Name = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    margin: -1px;
    padding: 5px 0;
    color: ${COLORS.textColor};
`;

const Text = styled.p`
    margin: -1px 3px -1px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    padding: 5px 0;
    color: ${COLORS.pageTitle};
`;

const Price = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    margin: -1px;
    padding: 5px 0;
    color: ${COLORS.textColor};
`;

const NoteCont = styled.div`
    width: 100%;
    border-bottom: 1px solid ${COLORS.border};
    display: flex;
    align-items: center;
    margin: 5px 0 15px 0;
    padding-bottom: 7px;
`;

const Note = styled.input`
    outline: none;
    border: none;
    margin-left: 8px;
    width: 100%;

    ::placeholder {
        color: ${COLORS.border}
    }
`;

export default OrderDetails;