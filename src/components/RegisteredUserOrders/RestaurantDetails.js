import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import IMG from "../../assets/images";
import COLORS from "../../styles/colors";

import { AiOutlineHeart } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import RestaurantMenu from "../RestaurantMenu";
import MyCard from "../HomepageOrders/MyCard";
import EmptyCard from "./EmptyCard";
import ItemDetailModal from "../Modals/ItemDetailModal";
import RestaurantReview from "../RestaurantReview";
import Info from "../Info";
import Virtual from "../Virtual";


const RestaurantDetails = () => {

    const [card, setCard] = useState(false);
    const [modal, setModal] = useState(false);
    const [state, setState] = useState('menu');
    
    const cardHandler  = () => setCard(v => !v);
    const modalHandler = () => setModal(v => !v);

    const submit = () => {
        cardHandler();
        modalHandler();
    }


    let navigate = useNavigate(); 
    const cancelCart = (e) =>{ 
        let path = `/registeredEmptyOrder`;     
      navigate(path);
    }

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
                            <RestaurantName onClick={() => setState('menu')}>Pizza Hut Restaurant</RestaurantName>
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
                            { modal &&
                                <ItemDetailModal
                                    onClick={modalHandler} 
                                    positionStyle={positionStyle}
                                    addBtn={submit}
                                />
                            }
                            <Reviews>
                                <InfoText 
                                    onClick={() => setState('menu')}
                                    style={state === 'menu' ? {color: COLORS.orange} : { color: COLORS.pageTitle}}
                                >Menu</InfoText>
                                <InfoText 
                                    onClick={() => setState('review')}
                                    style={state === 'review' ? {color: COLORS.orange} : { color: COLORS.pageTitle}}
                                >Reviews</InfoText>
                                <InfoText 
                                    onClick={() => setState('info')} 
                                    style={state === 'info' ? {color: COLORS.orange} : { color: COLORS.pageTitle}}
                                >Info</InfoText>
                                {/* <InfoText 
                                    onClick={() => setState('virtual')} 
                                    style={state === 'virtual' ? {color: COLORS.orange} : { color: COLORS.pageTitle}}
                                >Virtual</InfoText> */}
                            </Reviews>
                            <ModalContainer>
                                {state === 'menu' && 
                                    <MenuContainer>
                                        <RestaurantMenu title="Pizza (6 items)" onClick={modalHandler}/>
                                        <RestaurantMenu title="Drink (6 items)" onClick={modalHandler}/>
                                    </MenuContainer>
                                }
                                {state === 'review' && <RestaurantReview />}
                                {state === 'info' && <Info />}
                                {state === 'virtual' && <Virtual />}
                            </ModalContainer> 
                        </MenuSide>
                    </Row>
                </DetailContainer>
                <RightSide>
                    {!card ?
                        <EmptyCard 
                            height={{height: '55%'}}
                            title="My Cart"
                        /> 
                        :
                        <MyCard height={{height: '55%'}} cancel={cancelCart}/>
                    }            
                    <Image src={IMG.online} alt="online" />
                </RightSide>
            </Row>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 7%;
`;

const positionStyle = {
    position: 'fixed', 
    top: 0, 
    left: 0, 
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    oopacity: 0,
    zIndex: 1000,
};

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
    height: 300px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 100px;
`;

const TextRow = styled.div`
    display: flex;
    align-items: center;
    margin: 5px 0;
    width: 100px;
`;

const RestaurantName = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: ${COLORS.textColor};
    margin: -1px 0;
    padding-bottom: 10px;
    cursor: pointer;
`;

const RestaurantInfo = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.restaurantInfo};
    margin: 0 5px;
`;

const MenuSide = styled.div`
    width: 70%;
    height: 710px;
    border-left: 2px solid ${COLORS.border};
    position: relative;
    overflow-y: scroll;
`;

const ModalContainer = styled.div`
    margin-top: 60px;
`;

const MenuContainer = styled.div`
    // margin-top: 60px;
`;

const Reviews = styled.div`
    display: flex;
    justify-content: right;
    padding: 10px;
`;

const InfoText = styled.p`
    text-decoration: none;
    margin: 0 7px;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
`;

const RightSide = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Image = styled.img`
    width: 100%;
    height: 42%;
`;

const SocialCont = styled.div`
    position: absolute;
    bottom: 40px;
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
