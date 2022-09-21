import React from "react";
import styled from "styled-components";

import COLORS from "../styles/colors";

import { GoLocation } from "react-icons/go";
import { MdOutlineTimer } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

const SingleItem = ({ image, imageStyle, name, address, distance, time, star, style }) => {
    return (
        <Column style={style}>
            <Image style={imageStyle} src={image} alt="image" />
            <InfoCont>
                <Name>{name}</Name>
                <Text>{address}</Text>
                <Info>
                    <GoLocation style={icons} />
                    <InfoText>{distance}</InfoText>
                    <MdOutlineTimer style={icons} />
                    <InfoText>{time}</InfoText>
                    <AiOutlineStar style={icons} />
                    <InfoText>{star}</InfoText>
                </Info>
            </InfoCont>
        </Column>
    )
}

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

export default SingleItem;