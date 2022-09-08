import React from "react";
import styled from "styled-components";

import IMG from "../assets/images";

import SingleItem from "./SingleItem";

const datas = [
    {
        id: 1,
        image: IMG.vir1,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    },
    {
        id: 2,
        image: IMG.vir2,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    },
    {
        id: 3,
        image: IMG.vir3,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    },
    {
        id: 4,
        image: IMG.vir4,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    }
]

const VirtualKitchen = () => {
    return (
        <Container>
            <ListContainer>
                <Row>
                    {
                        datas.map((el) => {
                            return (
                                <SingleItem 
                                    key={el.id}
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

const ListContainer = styled.div`

`;

export default VirtualKitchen;