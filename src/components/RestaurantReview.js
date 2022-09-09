import React from "react";
import styled from "styled-components";

import IMG from "../assets/images";
import COLORS from "../styles/colors";

import { AiFillStar } from "react-icons/ai";

const data = [
    {
        id: "1",
        profile: IMG.profile1,
        fullName: "Darlene Robertson",
        star: 5,
        date: "15/09/2021",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat amet et pellentesque lorem id morbi sit vel.",
        image: [
            {
                img_id: 1,
                img: IMG.pizza1,
            },
            {
                img_id: 2,
                img: IMG.pizza2,
            },
            {
                img_id: 3,
                img: IMG.pizza3,
            },
            {
                img_id: 4,
                img: IMG.pizza4,
            },
            {
                img_id: 5,
                img: IMG.pizza5,
            },
        ]
    },
    {
        id: "2",
        profile: IMG.profile2,
        fullName: "Kathryn Murphy",
        star: 3,
        date: "14/09/2021",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat amet et pellentesque lorem id morbi sit vel.",
        image: [
            {
                img_id: 1,
                img: IMG.pizza2,
            },
            {
                img_id: 2,
                img: IMG.pizza4,
            },
            {
                img_id: 3,
                img: IMG.pizza5,
            },
        ]
    },
    {
        id: "3",
        profile: IMG.profile3,
        fullName: "Esther Howard",
        star: 4,
        date: "11/09/2021",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat amet et pellentesque lorem id morbi sit vel.",
        image: [
            {
                img_id: 1,
                img: IMG.pizza1,
            },
        ]
    },
    {
        id: "4",
        profile: IMG.profile2,
        fullName: "Kathryn Murphy",
        star: 5,
        date: "14/09/2021",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat amet et pellentesque lorem id morbi sit vel.",
        image: [
            {
                img_id: 1,
                img: IMG.pizza1,
            },
            {
                img_id: 2,
                img: IMG.pizza2,
            },
        ]
    },
    {
        id: "5",
        profile: IMG.profile3,
        fullName: "Esther Howard",
        star: 3,
        date: "13/09/2021",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat amet et pellentesque lorem id morbi sit vel.",
        image: [
            {
                img_id: 1,
                img: IMG.pizza1,
            },
            {
                img_id: 2,
                img: IMG.pizza2,
            },
        ]
    },
]

const RestaurantReview = () => {

    return (
        <Container>
            <Title>Reviews (1903)</Title>
            {data.map((e, index) => {
                return (
                    <User key={index}>
                        <Header>
                            <Row>
                                <ProfileImg src={e.profile} alt="profile" />
                                <NameCont>
                                    <Name>{e.fullName}</Name>
                                    <Row>
                                        <AiFillStar style={{color: COLORS.orange}} />
                                        <AiFillStar style={{color: COLORS.orange}} />
                                        <AiFillStar style={{color: COLORS.orange}} />
                                        <AiFillStar style={{color: COLORS.orange}} />
                                        <AiFillStar style={{color: COLORS.searchBar}} />
                                    </Row>
                                </NameCont>
                            </Row>
                            <Date>{e.date}</Date>
                        </Header>
                        <Text>{e.review}</Text>
                        {e.image.map((e, id) => {
                            return (
                                 <ItemImg key={id} src={e.img} alt="image" /> 
                            )
                        })}
                    </User>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    padding: 0 30px 15px;
`;

const Title = styled.h6`
    font-weight: 700;
    font-size: 16px;
    color: ${COLORS.textColor};
    margin: -1px;
    padding: 10px 0;
`;

const User = styled.div`
    margin: 20px 0;
`;


const Row = styled.div`
    display: flex;
    align-items: center;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
`;

const ProfileImg = styled.img`
    width: 45px;
    height: 45px;
`;

const ItemImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 8px;
    margin: 10px 10px 10px 0;
`;

const NameCont = styled.div`
    margin-left: 8px;
    padding-top: 3px;
`;

const Name = styled.h6`
    margin: -1px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    padding-bottom: 5px;
`;

const Date = styled.p`
    margin: -1px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.pageTitle};
`;

const Text = styled.p`
    margin: -1px 0;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    font-size: 14px;
    padding: 5px 0;
    text-align: justify;
    color: ${COLORS.restaurantInfo};
`;

export default RestaurantReview;