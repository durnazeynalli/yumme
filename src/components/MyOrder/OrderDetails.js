import React, { useState } from 'react';
import styled from 'styled-components';

import COLORS from '../../styles/colors';

import { AiFillCheckCircle } from "react-icons/ai";
import { BiCircle } from "react-icons/bi";

import DeliverTo from './OrderDetails/DeliverTo';
import DeliverAt from './OrderDetails/DeliverAt';
import ServiceOptions from './OrderDetails/ServiceOptions';
import Note from './OrderDetails/Note';
import Orders from './OrderDetails/Orders';
import Price from './OrderDetails/Price';
import Payment from './OrderDetails/Payment';
import Shipper from './OrderDetails/Shipper';
import CancelOrderModal from '../Modals/CancelOrderModal';
import IMG from '../../assets/images';


const OrderDetails = () => {
    const [cancelOrder, setCancelOrder] = useState(false); 

    const cancelHandler = () => setCancelOrder(v => !v);

  return (
    <Container>
        <OrderDetailsContainer>
            <Title>Order <Span>#ID12345678</Span></Title>
            <StatusBar>
                <Row>
                    <StatusCol>
                        <AiFillCheckCircle style={{color: COLORS.lightGreen}} />
                        <Status style={{color: COLORS.textColor}}>Cooking</Status>
                    </StatusCol>
                    <Border style={{borderColor: COLORS.lightGreen}}></Border>
                    <StatusCol>
                        <BiCircle style={{color: COLORS.pageTitle}} />
                        <Status style={{color: COLORS.pageTitle}} >Collected</Status>
                    </StatusCol>
                    <Border style={{borderColor: COLORS.pageTitle}}></Border>
                    <StatusCol>
                        <BiCircle style={{color: COLORS.pageTitle}} />
                        <Status style={{color: COLORS.pageTitle}} >Completed</Status>
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

            <Button onClick={cancelHandler}>Cancel Order</Button>
            {cancelOrder && <CancelOrderModal positionStyle={positionStyle} keep={cancelHandler} />}
        </OrderDetailsContainer>
        <MapContainer>
            <MapImage src={IMG.cooking} alt="map"/>
        </MapContainer>
    </Container>
  )
}

const Container = styled.div`
    margin: 0 7%;
    display: flex;
    justify-content: space-between;
`;

const positionStyle = {
    position: 'fixed', 
    top: 0, 
    left: 0, 
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1000,
};

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    width: 50%;
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
    color: ${COLORS.orange};
    background-color: ${COLORS.white};
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

export default OrderDetails;