import React from "react";
import styled from "styled-components";

import IMG from "../assets/images";
import COLORS from "../styles/colors";

const data = [
    {
        id: "1",
        orderNUmber: "#LD45643201",
        status: "pending",
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
        status: "cooking",
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
        status: "collected",
        image: IMG.pizza1,
        restaurantName: "Pizza Hut Restaurant",
        address: "1901 Thornridge Cir. Shiloh, Hawaii ",
        price: "$120",
        itemNumber: "2 items",
        dateAndTime: "12:50 pm, 10 Aug 21"
    },
    {
        id: "4",
        orderNUmber: "#LD45647222",
        status: "ready",
        image: IMG.pizza2,
        restaurantName: "Pizza Hut Restaurant",
        address: "1901 Thornridge Cir. Shiloh, Hawaii ",
        price: "$120",
        itemNumber: "2 items",
        dateAndTime: "12:50 pm, 10 Aug 21"
    },
    {
        id: "5",
        orderNUmber: "#LL85403711",
        status: "completed",
        image: IMG.shop3,
        restaurantName: "Madame Lan Restaurant",
        address: "252 Brown Street Pimpama QLD",
        price: "$120",
        itemNumber: "1 item",
        dateAndTime: "12:20 pm, 12 Aug 21"
    },
    {
        id: "6",
        orderNUmber: "#LD45643201",
        status: "cancelled",
        image: IMG.pizza1,
        restaurantName: "Pizza Hut Restaurant",
        address: "1901 Thornridge Cir. Shiloh, Hawaii ",
        price: "$120",
        itemNumber: "2 items",
        dateAndTime: "12:50 pm, 10 Aug 21"
    },
]

const MyOrders = () => {

    const statusColor = (e) => {
        if (e.status === "cooking") {
            return {color: COLORS.orange}
        } else if (e.status === "pending") {
            return {color: COLORS.pendingColor}
        } else if (e.status === "completed") {
            return {color: COLORS.completedColor}
        } else if (e.status === "cancelled") {
            return {color: COLORS.canceledColor}
        } else {
            return {color: COLORS.blue}
        }
    }

    return (
        <Container>
            <TitleCont>
                <Row>
                    <Span>View all</Span>
                    <Title>My Order</Title>
                    <View>View all</View>
                </Row>
            </TitleCont>
            <Scroll>
                {data.map((e) => {
                    return (
                        <OrderContainer key={e.id}>
                            <Row>
                                <OrderNumber>{e.orderNUmber}</OrderNumber>
                                <Status
                                    style={statusColor(e)}
                                >{e.status}</Status>
                            </Row>
                            <ItemDetails>
                                <Row>
                                    <Image src={e.image} alt="image" />
                                    <DetailsCont>
                                        <Name>{e.restaurantName}</Name>
                                        <Text>{e.address}</Text>
                                        <TextRow>
                                            <Price>{e.price}</Price>
                                            <Text>- {e.itemNumber}</Text>
                                        </TextRow>
                                    </DetailsCont>
                                </Row>
                            </ItemDetails>
                            <Border></Border>
                            <Row>
                                <Text>{e.dateAndTime}</Text>
                                <Button>View details</Button>
                            </Row>
                        </OrderContainer>
                    )
                })}
            </Scroll>
        </Container>
    )
}

const Container = styled.div`
    box-shadow: 0px 12px 24px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
    background-color: ${COLORS.white};
    padding: 20px 0;
`;

const TitleCont = styled.div`
    margin: 0 20px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Span = styled.span`
    color: ${COLORS.white};
`;

const Title = styled.h4`
    color: ${COLORS.titleColor};
    font-weight: 500;
    font-size: 18px;
    margin: -1px 0;
    padding: 5px 0;
    font-style: normal;
`;

const View = styled.p`
    margin: -1px 0;
    padding: 5px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.blue};
`;

const Scroll = styled.div`
    height: 490px;
    overflow-y: scroll;
`;

const OrderContainer = styled.div`
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: 7px 14px;
    margin: 15px 20px;
`;

const OrderNumber = styled.p`
    margin: -1px 0;
    padding: 5px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: ${COLORS.green};
`;

const Status = styled.p`
    margin: -1px 0;
    padding: 5px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
`;

const ItemDetails = styled.div`

`;

const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 6px;
`;

const DetailsCont = styled.div`
    margin-left: 5px;
`;

const Name = styled.h6`
    margin: -1px 0;
    padding: 5px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: ${COLORS.textColor};
`;

const Text = styled.p`
    color: ${COLORS.grayTextColor};
    font-weight: 400;
    font-size: 12px;
    margin: -1px 0;
`;

const TextRow = styled.div`
    display: flex;
    align-items: center;
`;

const Price = styled.h6`
    margin: -1px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    padding: 5px 3px 5px 0;
    color: ${COLORS.textColor};
`;

const Border = styled.div`
    border: 0.6px solid ${COLORS.border};
    margin: 7px 0;
`;

const Button = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    color: ${COLORS.white};
    border-radius: 6px;
    font-weight: 500;
    font-size: 12px;
    padding: 5px;
`;

export default MyOrders;