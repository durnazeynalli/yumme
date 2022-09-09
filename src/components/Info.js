import React from "react";
import styled from "styled-components";

import COLORS from "../styles/colors";

import { BiRestaurant } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const data = [
    {
        day: "Monday",
        time: "8:00 AM - 10:00 PM"
    },
    {
        day: "Tuesday",
        time: "8:00 AM - 10:00 PM"
    },
    {
        day: "Wednesday",
        time: "8:00 AM - 10:00 PM"
    },
    {
        day: "Thursday",
        time: "8:00 AM - 10:00 PM"
    },
    {
        day: "Friday",
        time: "8:00 AM - 10:00 PM"
    },
    {
        day: "Saturday",
        time: "8:00 AM - 10:00 PM"
    },
    {
        day: "Sunday",
        time: "8:00 AM - 10:00 PM"
    },
]

const Info = () => {

    return (
        <Container>
            <Title>Restaurant’s Information</Title>
            <InfoContainer>
                <Row>
                    <BiRestaurant style={icon} />
                    <Text>Physical Restaurant</Text>
                </Row>
            </InfoContainer>  
            <InfoContainer>
                <Row>
                    <MdLocationOn style={icon} />
                    <Text>420 Blue Street, Pimpama, Queensland 4000, Austraulia</Text>
                </Row>
            </InfoContainer>  
            <InfoContainer>
                <Row>
                    <TbWorld style={icon} />
                    <StyledLink href="https://www.pizzahut.com" target="_blank">www.pizzahut.com</StyledLink>
                </Row>
            </InfoContainer>  

            <Title>Open time</Title>     
                {data.map((item, index) => {
                    return (
                        <Row key={index}>
                            <TextCont>
                                <Text>{item.day}</Text>
                            </TextCont> 
                            <TextCont>
                                <Text>{item.time}</Text>
                            </TextCont> 
                        </Row>           
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
    padding: 10px 0 20px;
`;

const InfoContainer = styled.div`
    margin: 10px 0;
`;

const icon = {
    color: COLORS.orange,
    marginRight: '7px'
};

const StyledLink = styled.a`
    margin: -1px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    padding: 5px 0;
    color: ${COLORS.grayTextColor};
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const TextCont = styled.div`
    width: 30%;
    margin: 7px 0;
`;

const Text = styled.p`
    margin: -1px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    padding: 5px 0;
    color: ${COLORS.grayTextColor};
`;

export default Info;