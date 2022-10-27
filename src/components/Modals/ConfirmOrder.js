import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { GiCancel } from "react-icons/gi";
import IMG from "../../assets/images";

const ConfirmOrderModal = ({ cancel, positionStyle , success}) => {

    const continueBtn = () => {
        success();
    }

    return (
        <PageBg style={positionStyle}>
            <Container>
                <GiCancel onClick={cancel} style={cancelBTN} />
                <Title>Summary of payments</Title>
                <ThinBorder></ThinBorder>
                <Scroll>
                    <Column>
                        <Row>
                            <PriceTitle>Order</PriceTitle>
                            <Price>$40</Price>
                        </Row>
                    </Column>

                    <FoodDetails>
                        <Image src={IMG.pizza1} alt="image" />
                        <Info>
                            <Name>Seafood Pizza</Name>
                            <Text>Size S</Text>
                            <OrderPrice>$20</OrderPrice>    
                        </Info>
                    </FoodDetails>
                    <FoodDetails>
                        <Image src={IMG.pizza1} alt="image" />
                        <Info>
                            <Name>Seafood Pizza</Name>
                            <Text>Size S</Text>
                            <OrderPrice>$20</OrderPrice>    
                        </Info>
                    </FoodDetails>

                    
                    <Column>
                        <Row>
                            <PriceTitle>Booking</PriceTitle>
                            <Price>30 RBX</Price>
                        </Row>
                        <Row>
                            <PriceTitle>Delivery fee</PriceTitle>
                            <Price>$7</Price>
                        </Row>
                    </Column>
                    <Border></Border>
                    <Column>
                        <Row>
                            <PriceTitle>Total</PriceTitle>
                            <Price>$47</Price>
                        </Row>
                    </Column>
                </Scroll>

                <Button onClick={continueBtn}>Agree</Button>
            </Container>
        </PageBg>
    )
}

const PageBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    border-radius: 25px;
    background-color: ${COLORS.white};
    position: relative;
    padding: 15px 0;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute; 
    z-index: 1; 
    width: 30%;
`;

const Scroll = styled.div`
    overflow-y: scroll;
    height: 400px;
    padding: 10px 60px;
`;

const cancelBTN = {
    position: 'absolute',
    color: COLORS.pageTitle,
    right: '25px',
    top: '20px'
};

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: ${COLORS.textColor};
    text-align: center;
    margin: -1px;
    padding: 10px 0;
`;

const ThinBorder = styled.div`
    border-top: 1px solid ${COLORS.border};
    margin: 10px 60px;
`;

const Border = styled.div`
    border-top: 8px solid ${COLORS.modelBorder};
    margin: 10px 60px;
`;

const Column = styled.div`
    margin: 15px 0;
`;

const PriceTitle = styled.p`
    margin: -1px 0;
    padding: 5px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${COLORS.restaurantInfo};
`;

const Price = styled.p`
    margin: -1px 0;
    padding: 5px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: ${COLORS.orange};
`;

const Button = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    margin: 10px 60px;
    padding: 15px;
    text-align: center;
    color:  ${COLORS.white};
    border-radius: 12px;
    width: 78%;
`;

const FoodDetails = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin: 10px 0;
`;

const Info = styled.div`
    width: 80%;
`;

const Image = styled.img`
    width: 75px;
    height: 75px;
    margin-right: 10px;
    border-radius: 10px;
`;

const Name = styled.h6`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin: -1px;
    padding: 5px 0;
    text-align: left;
    color: ${COLORS.textColor};
`;

const Text = styled.p`
    margin: -1px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    padding: 5px 0;
    text-align: left;
    color: ${COLORS.pageTitle};
`;

const OrderPrice = styled.h6`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin: -1px;
    padding: 8px 0;
    color: ${COLORS.restaurantInfo};
`;

export default ConfirmOrderModal;