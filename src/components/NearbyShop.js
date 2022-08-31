import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import IMG from "../assets/images";

import SingleItem from "./SingleItem";

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
            <ListContainer to="/details">
                <Row>
                    {
                        datas.map((el) => {
                            return (
                                <SingleItem
                                    image={el.image}
                                    name={el.name}
                                    address={el.address}
                                    distance={el.distance}
                                    time={el.time}
                                    star={el.star}
                                />
                            )
                        })
                    }
                </Row>
            </ListContainer>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 7%;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ListContainer = styled(Link)`
    text-decoration: none;
`;

export default NearbyShop;