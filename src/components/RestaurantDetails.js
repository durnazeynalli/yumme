import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import IMG from "../assets/images";

import OrderDetails from "./OrderDetails";

import { AiOutlineHeart } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import COLORS from "../styles/colors";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantDetails = () => {
    return (
        <Container>
            <Row>
                <DetailContainer>
                    <DetailLogo src={IMG.detailLogo} alt="logo" />
                    <BgImg>
                        <AiOutlineHeart style={heartIcon}/>
                    </BgImg>
                    <Row>
                        <InfoSide>
                            <RestaurantName>Pizza Hut Restaurant</RestaurantName>
                            <RestaurantInfo>420 Blue Street Pimpama QLD</RestaurantInfo>
                            <TextRow>
                                <MdLocationOn style={{color: COLORS.blue}} />
                                <RestaurantInfo>1.24 km</RestaurantInfo>
                            </TextRow>
                            <TextRow>
                                <AiFillClockCircle style={{color: COLORS.orange}} />
                                <RestaurantInfo>15 minutes</RestaurantInfo>
                            </TextRow>
                            <TextRow>
                                <AiFillStar style={{color: COLORS.orange}} />
                                <RestaurantInfo>4.9</RestaurantInfo>
                            </TextRow>
                            <SocialCont>
                                <SocialLink to="">
                                    <BsFacebook style={social} />
                                </SocialLink>
                                <SocialLink to="">
                                    <BsInstagram style={social} />
                                </SocialLink>
                                <SocialLink to="">
                                    <BsLinkedin style={social} />
                                </SocialLink>
                            </SocialCont>
                        </InfoSide>
                        <MenuSide>
                            <Reviews>
                                <InfoText to="/reviews">Reviews</InfoText>
                                <InfoText to="/info">Info</InfoText>
                            </Reviews>
                            <RestaurantMenu title="Pizza (6 items)" />
                        </MenuSide>
                    </Row>
                </DetailContainer>
                <RightSide>
                    <OrderDetails 
                        title="My Cart"
                        text="You have nothing in your cart"
                        button="Add item"
                    />
                    <Image src={IMG.online} alt="online" />
                </RightSide>
            </Row>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 7%;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DetailContainer = styled.div`
    width: 73%;
    position: relative;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
`;

const DetailLogo = styled.img`
    position: absolute;
    top: 225px;
    left: 50px;
    z-index: 1;
`;

const BgImg = styled.div`
    background-image: url(${IMG.detailBg});
    background-repeat: no-repeat;
    backgroun-size: cover;
    height: 34%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    position: relative;
`;

const heartIcon = {
    position: 'absolute',
    bottom: '23px',
    right: '27px',
    color: COLORS.white,
}

const InfoSide = styled.div`
    width: 30%;
    height: 570px;
    border: 1px solid black;
    text-align: center;
    position: relative;
`;

const TextRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RestaurantName = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: ${COLORS.textColor};
    margin-top: 100px;
    margin-bottom: 0;
    padding-bottom: 10px;
`;

const RestaurantInfo = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.restaurantInfo};
    margin: 0 5px;
    padding-bottom: 10px;
`;

const MenuSide = styled.div`
    width: 70%;
    border: 1px solid black;
`;

const Reviews = styled.div`
    text-align: right;
    padding: 10px;
`;

const InfoText = styled(Link)`
    text-decoration: none;
    color: ${COLORS.pageTitle};
    margin: 0 7px;
    font-weight: 400;
    font-size: 14px;
`;

const RightSide = styled.div`
    width: 25%;
`;

const Image = styled.img`
    width: 100%;
    margin-top: 20px;
`;

const SocialCont = styled.div`
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
`;

const SocialLink = styled(Link)`
    marging-right: 10px;
    text-decoration: none;
`;

const social = {
    color: COLORS.orange,
    marginRight: '10px'
}


export default RestaurantDetails;