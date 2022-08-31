import React from "react";
import styled from "styled-components";

import IMG from "../assets/images";
import COLORS from "../styles/colors";

import { GoLocation } from "react-icons/go";
import { MdOutlineTimer } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

const datas = [
    {
        image: IMG.pro1,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    },
    {
        image: IMG.pro2,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    },
    {
        image: IMG.pro3,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    },
    {
        image: IMG.pro4,
        name: "Fresh Tamagoyaki",
        address: "237 Thornridge Cir. Shiloh, Melbun...s",
        distance: "1.7km",
        time: "10 min",
        star: "5.0"
    }
]

const Promotion = () => {
    return (
        <Container>
            <ListContainer>
                <Row>
                    {
                        datas.map((el) => {
                            return (
                                <Column>
                                    <Rect>Up to 20%</Rect>
                                    <Image src={el.image} alt="image" />
                                    <InfoCont>
                                        <Name>{el.name}</Name>
                                        <Text>{el.address}</Text>
                                        <Info>
                                            <GoLocation style={icons} />
                                            <InfoText>{el.distance}</InfoText>
                                            <MdOutlineTimer style={icons} />
                                            <InfoText>{el.time}</InfoText>
                                            <AiOutlineStar style={icons} />
                                            <InfoText>{el.star}</InfoText>
                                        </Info>
                                    </InfoCont>
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
    margin: 0 7%;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ListContainer = styled.div`

`;

const Column = styled.div`
    width: 23%;
    box-shadow: 0px 12px 24px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
    position: relative;
`;

const Rect = styled.div`
    position: absolute;
    left: -4px;
    top: 20px;
    background-image: url(${IMG.rect});
    background-repeat: no-repeat;
    width: 100%;
    color: ${COLORS.white};
    padding: 10px 10px;
    font-size: 11px;
`;

const Image = styled.img`
    width: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`;

const InfoCont = styled.div`
    padding: 10px 20px;
`;

const Name = styled.h6`
    color: ${COLORS.textColor};
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin: -1px 0;
`;

const Text = styled.h6`
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.infoText};
    margin: -1px 0;
    padding: 7px 0;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 10px;
`;

const InfoText = styled.h6`
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.infoText};
    margin: -1px 0;
    padding: 5px 15px 5px 5px;
`;

const icons = {
    color: COLORS.orange,
}

export default Promotion;