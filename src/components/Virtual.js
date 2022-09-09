import React from "react";
import styled from "styled-components";

import COLORS from "../styles/colors";

import { BiRestaurant } from "react-icons/bi";
import { BsTelephoneFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { AiTwotonePushpin } from "react-icons/ai";

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

const Virtual = () => {

    return (
        <Container>
            <Title>Restaurant’s Information</Title>
            <InfoContainer>
                <Row>
                    <BiRestaurant style={icon} />
                    <Text>Virtual Restaurant</Text>
                </Row>
            </InfoContainer>  
            <InfoContainer>
                <Row>
                    <BsTelephoneFill style={icon} />
                    <Text>8412399853</Text>
                </Row>
            </InfoContainer>  
            <InfoContainer>
                <Row>
                    <TbWorld style={icon} />
                    <StyledLink href="https://www.pizzahut.com" target="_blank">www.pizzahut.com</StyledLink>
                </Row>
            </InfoContainer>  

            <Title>Take order time</Title> 
                <AlignRow>
                    <TimeContainer>
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
                    </TimeContainer>
                    <PinContainer>
                        <AlignRow>
                            <AiTwotonePushpin style={{color: COLORS.orange, marginRight: '10px'}} />
                            <Note>Note</Note>
                        </AlignRow>
                        <Text style={{color: COLORS.textColor}}>The order you place at virtual kitchen should be 24 hours prior to the date/time you want your order to be delivery.</Text>
                    </PinContainer>
                </AlignRow>    
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

const AlignRow = styled.div`
    display: flex;
    align-items: flex-start;
`;

const TimeContainer = styled.div`
    width: 60%;
`;

const TextCont = styled.div`
    width: 50%;
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

const PinContainer = styled.div`
    border-radius: 8px;
    background-color: rgba(255, 150, 28, 0.12);
    padding: 7px 10px;
    width: 40%;
    margin-bottom: 15px;
`;

const Note = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: ${COLORS.orange};
    margin: -1px 0;
`;

export default Virtual;