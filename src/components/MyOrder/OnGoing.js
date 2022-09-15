import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import IMG from '../../assets/images';

import COLORS from '../../styles/colors';
import SingleOrder from './SingleOrder';

const data = [
    {
        id: "1",
        orderNUmber: "#LD45643201",
        status: "Pending",
        image: IMG.shop1,
        restaurantName: "Madame Lan Restaurant",
        address: "1901 Thornridge Cir. Shiloh, Hawaii ",
        price: "$24",
        itemNumber: "2 items",
        dateAndTime: "11:45 am, 10 Aug 21",
    },
    {
        id: "2",
        orderNUmber: "#LL85403711",
        status: "Collected",
        image: IMG.shop2,
        restaurantName: "Madame Lan Restaurant",
        address: "252 Brown Street Pimpama QLD",
        price: "$120",
        itemNumber: "1 item",
        dateAndTime: "12:20 pm, 12 Aug 21",
    },
    {
        id: "3",
        orderNUmber: "#LD45643201",
        status: "Cooking",
        image: IMG.pizza1,
        restaurantName: "Pizza Hut Restaurant",
        address: "1901 Thornridge Cir. Shiloh, Hawaii ",
        price: "$120",
        itemNumber: "2 items",
        dateAndTime: "12:50 pm, 10 Aug 21",
    },
]

const OnGoing = () => {

    let navigate = useNavigate(); 
    const routeChange = (e) =>{ 
        let path = `/pending`;     
      navigate(path);
    }

  return (
    <Container>
        <Title>Ongoing</Title>
        <OrderContainer>
            {data.map((e) => {
                return (
                    <SingleOrder e={e} state="ongoing" details={routeChange}/>
                )
            })}
        </OrderContainer>
    </Container>
  )
}

const Container = styled.div`
    margin: 0 7%;
    background-color: ${COLORS.white};
    padding: 50px;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
`;

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

export default OnGoing