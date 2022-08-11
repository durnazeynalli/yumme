import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IMG from "../assets/images";
import COLORS from "../styles/colors";

import { GoLocation } from "react-icons/go";
import { MdOutlineTimer } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

const datas = [
    {
        image: IMG.shop1,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    },
    {
        image: IMG.shop2,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    },
    {
        image: IMG.shop3,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    },
    {
        image: IMG.shop4,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    }
]

const NearbyShop = () => {
    return (
        <Container>
            <Row>
                <Title>Nearby Shop</Title>
                <ViewAll to="/nearbyshop">View all</ViewAll>
            </Row>
            <ListContainer>
                <Row>
                    {
                        datas.map((el) => {
                            return (
                                <Column>
                                    <Image src={el.image} alt="image" />
                                    <Name>{el.name}</Name>
                                    <Text>{el.address}</Text>
                                    <Info>
                                        <GoLocation style={icons} />
                                        <Text>{el.distance}</Text>
                                        <MdOutlineTimer style={icons} />
                                        <Text>{el.time}</Text>
                                        <AiOutlineStar style={icons} />
                                        <Text>{el.star}</Text>
                                    </Info>
                                </Column>
                            )
                        })
                    }
                </Row>
            </ListContainer>
        </Container>
    )
}

const Container = styled.div`
    margin: 2% 7%;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h4`
    color: ${COLORS.textColor};
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
`;

const ViewAll = styled(Link)`
    color: ${COLORS.blue};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`;

const ListContainer = styled.div`

`;

const Column = styled.div`
    width: 23%;
    box-shadow: 0px 12px 24px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
`;

const Image = styled.img`
    width: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`;

const Name = styled.h6`
    color: ${COLORS.textColor};
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin-left: 10px;
    margin-bottom: -20px;
`;

const Text = styled.h6`
    margin-right: 10px;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.infoText};
    margin-left: 10px;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    margin-top: -40px;
`;

const icons = {
    color: COLORS.orange,
    marginLeft: '10px'
}

export default NearbyShop;