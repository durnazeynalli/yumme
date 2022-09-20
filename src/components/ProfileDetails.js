import React, { useState } from "react";
import styled from "styled-components";

import IMG from "../assets/images";
import COLORS from "../styles/colors";

import { AiFillCamera } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { IoMdWallet } from "react-icons/io";
import { AiOutlineQrcode } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

import GeneralInfo from "./Profile/GeneralInfo";
import Address from "./Profile/Address";
import PaymetMethods from "./Profile/PaymentMethods";
import QRCode from "./Profile/QRCode";
import FavoriteRestaurants from "./Profile/FavoriteRestaurants";

const ProfileDetails = () => {

    const [state, setState] = useState("generalInfo");

    return (
        <Container>
            <DetailContainer>
                <BgImg>
                    <CameraCircle>
                        <AiFillCamera style={{color: COLORS.orange}} />
                    </CameraCircle>
                </BgImg>
                <Row>
                    <LeftSide>
                        <ProfileImg src={IMG.profile} alt="profile" />
                        <ProfileCameraCircle>
                            <AiFillCamera style={{color: COLORS.orange}} />
                        </ProfileCameraCircle>
                        <UserName>Cameron Williamson</UserName>
                        <UserId>ID: 123456789</UserId>
                        <OptionsCotainer>
                            <SingleOption 
                                onClick={() => setState("generalInfo")}
                                style={state==="generalInfo" ? {borderColor: COLORS.orange, backgroundColor: 'rgba(255, 158, 28, 0.12)'} : {borderColor: COLORS.border, backgroundColor: COLORS.white}}
                            >
                                <TextRow>
                                    <IconCont style={{backgroundColor: 'rgba(255, 151, 74, 0.3)'}}>
                                        <FaUser style={{color: COLORS.orange}} />
                                    </IconCont>
                                    <OptionText style={state==="generalInfo" ? {color: COLORS.orange} : {color: 'inherit'}}>General Information</OptionText>
                                </TextRow>
                                <MdKeyboardArrowRight style={state==="generalInfo" ? {color: COLORS.orange} : {color: COLORS.grayTextColor}} />
                            </SingleOption>
                            <SingleOption 
                                onClick={() => setState("address")}
                                style={state==="address" ? {borderColor: COLORS.orange, backgroundColor: 'rgba(255, 158, 28, 0.12)'} : {borderColor: COLORS.border, backgroundColor: COLORS.white}}
                            >
                                <TextRow>
                                    <IconCont style={{backgroundColor: 'rgba(61, 213, 152, 0.1)'}}>
                                        <MdLocationPin style={{color: COLORS.lightGreen}}/>
                                    </IconCont>
                                    <OptionText style={state==="address" ? {color: COLORS.orange} : {color: 'inherit'}}>Address</OptionText>
                                </TextRow>
                                <MdKeyboardArrowRight style={state==="address" ? {color: COLORS.orange} : {color: COLORS.grayTextColor}} />
                            </SingleOption>
                            <SingleOption 
                                onClick={() => setState("payment")}
                                style={state==="payment" ? {borderColor: COLORS.orange, backgroundColor: 'rgba(255, 158, 28, 0.12)'} : {borderColor: COLORS.border, backgroundColor: COLORS.white}}
                            >
                                <TextRow>
                                    <IconCont style={{backgroundColor: 'rgba(164, 97, 216, 0.1)'}}>
                                        <IoMdWallet style={{color: COLORS.purple}} />
                                    </IconCont>
                                    <OptionText style={state==="payment" ? {color: COLORS.orange} : {color: 'inherit'}}>Payment methods</OptionText>
                                </TextRow>
                                <MdKeyboardArrowRight style={state==="payment" ? {color: COLORS.orange} : {color: COLORS.grayTextColor}}/>
                            </SingleOption>
                            <SingleOption 
                                onClick={() => setState("qrCode")}
                                style={state==="qrCode" ? {borderColor: COLORS.orange, backgroundColor: 'rgba(255, 158, 28, 0.12)'} : {borderColor: COLORS.border, backgroundColor: COLORS.white}}    
                            >
                                <TextRow>
                                    <IconCont style={{backgroundColor: 'rgba(255, 154, 213, 0.1)'}}>
                                        <AiOutlineQrcode style={{color: COLORS.pink}} />
                                    </IconCont>
                                    <OptionText style={state==="qrCode" ? {color: COLORS.orange} : {color: 'inherit'}}>QR Code</OptionText>
                                </TextRow>
                                <MdKeyboardArrowRight style={state==="qrCode" ? {color: COLORS.orange} : {color: COLORS.grayTextColor}}/>
                            </SingleOption>
                            <SingleOption 
                                onClick={() => setState("favoriteRestaurants")}
                                style={state==="favoriteRestaurants" ? {borderColor: COLORS.orange, backgroundColor: 'rgba(255, 158, 28, 0.12)'} : {borderColor: COLORS.border, backgroundColor: COLORS.white}}
                            >
                                <TextRow>
                                    <IconCont style={{backgroundColor: 'rgba(255, 189, 47, 0.1)'}}>
                                        <AiFillStar style={{color: COLORS.favorite}} />
                                    </IconCont>
                                    <OptionText style={state==="favoriteRestaurants" ? {color: COLORS.orange} : {color: 'inherit'}}>Favorite Restaurants</OptionText>
                                </TextRow>
                                <MdKeyboardArrowRight style={state==="favoriteRestaurants" ? {color: COLORS.orange} : {color: COLORS.grayTextColor}}/>
                            </SingleOption>
                        </OptionsCotainer>
                    </LeftSide>
                    <RightSide>
                        {state ==="generalInfo" && <GeneralInfo /> }
                        {state === "address" && <Address />}
                        {state === "payment" && <PaymetMethods />}
                        {state === "qrCode" && <QRCode />}
                        {state === "favoriteRestaurants" && <FavoriteRestaurants />}
                    </RightSide>
                </Row>
            </DetailContainer>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 7%;
`;

const DetailContainer = styled.div`
    width: 100%;
    position: relative;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
`;

const ProfileImg = styled.img`
    border: 2px soid ${COLORS.border};
    border-radius: 50%;
    position: absolute;
    top: -80px;
    z-index: 1;
`;

const BgImg = styled.div`
    background-image: url(${IMG.profilebg});
    background-repeat: no-repeat;
    backgroun-size: cover;
    height: 300px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    position: relative;
`;

const CameraCircle = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${COLORS.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    position: absolute;
    right: 20px;
    bottom: 20px;
`;

const ProfileCameraCircle = styled.div`
    width: 35px;
    height: 35px;
    background-color: ${COLORS.white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    position: absolute;
    top: 45px;
    right: 100px;
    z-index: 2;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
`;

const Row = styled.div`
    display: flex;
    justify-content: center;
`;

const LeftSide = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: 100px;
`;

const UserName = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: ${COLORS.textColor};
    padding-bottom: 10px;
    margin: -1px 0;
`;

const UserId = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.restaurantInfo};
    margin: -1px 0;
`;

const OptionsCotainer = styled.div`
    padding: 40px 20px;
    width: 100%;
    margin: 20px 0 30px;
`;

const SingleOption = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${COLORS.border};
    border-radius: 8px;
    padding: 0 15px;
    margin: 10px 0;
`;

const TextRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const IconCont = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 7px;
`;

const OptionText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${COLORS.textColor};
`;

const RightSide = styled.div`
    width: 70%;
    border-left: 2px solid ${COLORS.border};
    position: relative;
    padding: 100px 50px 50px;
`;

export default ProfileDetails;
