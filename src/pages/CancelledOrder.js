import React from "react";
import styled from "styled-components";

import MyOrdersHeader from "../components/Headers/MyOrdersHeader";
import DeliverTo from "../components/MyOrder/OrderDetails/DeliverTo";
import DeliverAt from "../components/MyOrder/OrderDetails/DeliverAt";
import ServiceOptions from "../components/MyOrder/OrderDetails/ServiceOptions";
import Note from "../components/MyOrder/OrderDetails/Note";
import Orders from "../components/MyOrder/OrderDetails/Orders";
import Price from "../components/MyOrder/OrderDetails/Price";
import Payment from "../components/MyOrder/OrderDetails/Payment";
import Shipper from "../components/MyOrder/OrderDetails/Shipper";

import COLORS from "../styles/colors";

import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillXCircleFill } from "react-icons/bs";
import IMG from "../assets/images";


const CancelledOrder = () => {
    return (
        <Container>
            <MyOrdersHeader />
            <BodyContainer>
                    <OrderDetailsContainer>
                        <Title>Order <Span>#ID12345678</Span></Title>
                        <StatusBar>
                            <Row>
                                <StatusCol>
                                    <AiFillCheckCircle style={{color: COLORS.pageTitle}} />
                                    <Status style={{color: COLORS.textColor}}>Cooking</Status>
                                </StatusCol>
                                <Border style={{borderColor: COLORS.canceledColor}}></Border>
                                <StatusCol>
                                    <BsFillXCircleFill style={{color: COLORS.canceledColor}} />
                                    <Status style={{color: COLORS.canceledColor}} >Cancelled</Status>
                                </StatusCol>
                            </Row>
                        </StatusBar>

                        <DeliverTo />
                        <DeliverAt />
                        <ServiceOptions />
                        <Orders />
                        <Note />
                        <Price />
                        <Payment />
                        <Shipper />

                        <Button>Reorder</Button>
                    </OrderDetailsContainer>
                    <MapContainer>
                        <MapImage src={IMG.cooking} alt="map"/>
                    </MapContainer>
            </BodyContainer>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${COLORS.white};
`;

const BodyContainer = styled.div`
    margin: 0 7%;
    display: flex;
    justify-content: space-between;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const OrderDetailsContainer = styled.div`
    width: 62%;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
    background-color: ${COLORS.white};
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: ${COLORS.textColor};
    text-align: center;
    margin: -1px 0;
    padding: 15px 0;
`;

const Span = styled.span`
    color: ${COLORS.orange};
`;

const StatusBar = styled.div`
    width: 25%;
    margin: 20px 0;
`;

const StatusCol = styled.div`
    text-align: center;
`;

const Border = styled.div`
    border-top: 1px solid;
    width: 100%;
    margin-top: -15px;
`;

const Status = styled.p`
    margin: -1px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
`;

const Button = styled.button`
    width: 100%;
    border-radius: 16px;
    border: 1px solid ${COLORS.orange};
    color: ${COLORS.white};
    background-color: ${COLORS.orange};
    padding: 18px 0;
    margin: 15px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
`;

const MapContainer = styled.div`
    width: 35%;
    height: auto;
`;

const MapImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 14px;
`;

export default CancelledOrder