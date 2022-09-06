import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { GiCancel } from "react-icons/gi";
import ServiceAndDelivery from "./ConfirmOrderComponents/ServiceAndDelivery";
import OrderDetails from "./ConfirmOrderComponents/OrderDetails";
import PaymentMethod from "./ConfirmOrderComponents/PaymentMethod";
import PromoCode from "./ConfirmOrderComponents/PromoCode";

const ConfirmOrderModal = ({ cancel, positionStyle , continueBtn}) => {

    return (
        <PageBg style={positionStyle}>
            <Container>
                <GiCancel onClick={cancel} style={cancelBTN} />
                <Title>Confirm Order</Title>
                <ThinBorder></ThinBorder>
                <Scroll>
                    <ServiceAndDelivery />
                    <OrderDetails />
                    <Column>
                        <Row>
                            <SubText>Subtotal</SubText>
                            <Price>A$80</Price>
                        </Row>
                        <Row>
                            <SubText>Delivery Fee</SubText>
                            <Price>A$5</Price>
                        </Row>
                        <Row>
                            <SubText>10%OFF</SubText>
                            <Price>-A$8</Price>
                        </Row>
                    </Column>
                    <PromoCode />
                    <PaymentMethod />
                    <Border></Border>
                    <Column>
                        <Row>
                            <Title>Total</Title>
                            <TotalPrice>A$77</TotalPrice>
                        </Row>
                    </Column>
                </Scroll>

                <Button onClick={continueBtn}>Place order (A$77)</Button>
            </Container>
        </PageBg>
    )
}

const PageBg = styled.div`
    padding: 9% 0;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    border-radius: 25px;
    background-color: ${COLORS.white};
    position: relative;
    padding: 15px 0;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute; 
    z-index: 1; 
`;

const Scroll = styled.div`
    overflow-y: scroll;
    height: 400px;
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
    margin: 10px 60px;
`;

const SubText = styled.p`
    margin: -1px 0;
    padding: 5px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.restaurantInfo};
`;

const Price = styled.p`
    margin: -1px 0;
    padding: 5px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: ${COLORS.textColor};
`;

const TotalPrice = styled.p`
    margin: -1px 0;
    padding: 5px 0;
    color: ${COLORS.green};
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
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

export default ConfirmOrderModal;