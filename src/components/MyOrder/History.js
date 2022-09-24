import React, {useState} from 'react';
import styled from 'styled-components';

import IMG from '../../assets/images';
import COLORS from '../../styles/colors';

import SingleOrder from './SingleOrder';
import ShipperRateModal from '../Modals/ShipperRateModal';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import RestaurantRateModal from '../Modals/RestaurantRateModal';
import GiftModal from '../Modals/GiftModal';
import GiftFormModal from '../Modals/GiftFormModal';
import GiftSuccessModal from '../Modals/GiftSuccessModal';

const data = [
    {
        id: "1",
        orderNUmber: "#LD45643201",
        status: "Cancelled",
        image: IMG.shop1,
        restaurantName: "Madame Lan Restaurant",
        address: "1901 Thornridge Cir. Shiloh, Hawaii ",
        price: "$24",
        itemNumber: "2 items",
        dateAndTime: "11:45 am, 10 Aug 21"
    },
    {
        id: "2",
        orderNUmber: "#LL85403711",
        status: "Completed",
        image: IMG.shop2,
        restaurantName: "Madame Lan Restaurant",
        address: "252 Brown Street Pimpama QLD",
        price: "$120",
        itemNumber: "1 item",
        dateAndTime: "12:20 pm, 12 Aug 21"
    },
    {
        id: "3",
        orderNUmber: "#LD45643201",
        status: "Completed",
        image: IMG.pizza1,
        restaurantName: "Pizza Hut Restaurant",
        address: "1901 Thornridge Cir. Shiloh, Hawaii ",
        price: "$120",
        itemNumber: "2 items",
        dateAndTime: "12:50 pm, 10 Aug 21"
    },
    {
        id: "4",
        orderNUmber: "#LD45643201",
        status: "Completed",
        image: IMG.shop1,
        restaurantName: "Madame Lan Restaurant",
        address: "1901 Thornridge Cir. Shiloh, Hawaii ",
        price: "$24",
        itemNumber: "2 items",
        dateAndTime: "11:45 am, 10 Aug 21"
    },
    {
        id: "5",
        orderNUmber: "#LL85403711",
        status: "Cancelled",
        image: IMG.shop2,
        restaurantName: "Madame Lan Restaurant",
        address: "252 Brown Street Pimpama QLD",
        price: "$120",
        itemNumber: "1 item",
        dateAndTime: "12:20 pm, 12 Aug 21"
    },
    {
        id: "6",
        orderNUmber: "#LD45643201",
        status: "Completed",
        image: IMG.pizza1,
        restaurantName: "Pizza Hut Restaurant",
        address: "1901 Thornridge Cir. Shiloh, Hawaii ",
        price: "$120",
        itemNumber: "2 items",
        dateAndTime: "12:50 pm, 10 Aug 21"
    },
]

const History = () => {
    const [shipperRate, setShipperRate] = useState(false);
    const [restaurantRate, setRestaurantRate] = useState(false);
    const [gift, setGift] = useState(false);
    const [giftForm, setGiftForm] = useState(false);
    const [giftSuccess, setGiftSuccess] = useState(false);


    const shipperRateHandler = () => setShipperRate(v => !v);
    const restaurantRateHandler = () => setRestaurantRate(v => !v);
    const giftHandler = () => setGift(v => !v);
    const giftFormHandler = () => setGiftForm(v => !v);
    const giftSuccessHandler = () => setGiftSuccess(v => !v);


    const passRestaurantRate = () => {
        shipperRateHandler();
        restaurantRateHandler();
    }

    const passGift = () => {
        restaurantRateHandler();
        giftHandler();
    }

    const passGiftForm = () => {
        giftHandler();
        giftFormHandler();
    }

    const passGiftSuccess = () => {
        giftFormHandler();
        giftSuccessHandler();
    }

  return (
    <Container>
        <Title>History</Title>
        <OrderContainer>
            {data.map((e) => {
                return (
                    <SingleOrder e={e} rate={shipperRateHandler} />
                )
            })}
            {shipperRate && <ShipperRateModal positionStyle={positionStyle} cancel={shipperRateHandler} submitBtn={passRestaurantRate} /> }
            {restaurantRate && <RestaurantRateModal positionStyle={positionStyle} cancel={restaurantRateHandler} submitBtn={passGift} /> }
            {gift && <GiftModal positionStyle={positionStyle} cancel={giftHandler} continueBtn={passGiftForm}/> }
            {giftForm && <GiftFormModal positionStyle={positionStyle} cancel={giftFormHandler} continueBtn={passGiftSuccess}/> }
            {giftSuccess && <GiftSuccessModal positionStyle={positionStyle} cancel={giftSuccessHandler} continueBtn={giftSuccessHandler}/> }

        </OrderContainer>
        <PageRow>
            <Border>
                <MdKeyboardArrowLeft style={{color: COLORS.pageTitle}} />
            </Border>
            <PageNum style={{color: COLORS.orange}}>1</PageNum>
            <PageNum>2</PageNum>
            <PageNum>3</PageNum>
            <PageNum>4</PageNum>
            <PageNum>5</PageNum>
            <Border>
                <MdKeyboardArrowRight style={{color: COLORS.pageTitle}} />
            </Border>
        </PageRow>
    </Container>
  )
}

const Container = styled.div`
    margin: 3% 7% 0;
    background-color: ${COLORS.white};
    padding: 50px 50px 80px;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
    position: relative;
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

const Title = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    margin: -1px 0;
    padding-bottom: 20px;
    color: ${COLORS.titleColor};
`;

const OrderContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

const PageRow = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 30px;
    right: 50px;
`;

const Border = styled.div`
    border: 1px solid ${COLORS.border};
    border-radius: 8px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PageNum = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.pageTitle}
;`;

export default History;