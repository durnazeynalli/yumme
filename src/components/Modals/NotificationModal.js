import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { AiFillClockCircle } from 'react-icons/ai';
import { GoPrimitiveDot } from 'react-icons/go';
import { MdGeneratingTokens, MdArticle } from 'react-icons/md';

const NotificationModal = ({ positionStyle, onClick }) => {
    return (
        <PageBg style={positionStyle} onClick={onClick}>
            <OrderContainer>
                <ArrowUp></ArrowUp>
                <Container>
                    <Title>Notifications</Title>
                    <SingleNotification>
                        <IconCircle>
                            <MdArticle style={{color: COLORS.white}}/>
                        </IconCircle>
                        <DetailsCont>
                            <Row>
                                <NotifTitle>Your Order #LD45643201</NotifTitle>
                                <GoPrimitiveDot style={{color: COLORS.lightGreen}} />
                            </Row>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo laoreet malesuada justo.</Text>
                            <TextRow>
                                <AiFillClockCircle style={{marginRight: '5px'}} /> 
                                <Text style={{fontSize: '12px'}}>11:45 July 17</Text>
                            </TextRow>
                        </DetailsCont>
                    </SingleNotification>

                    <SingleNotification>
                        <IconCircle style={{backgroundColor: COLORS.blue}}>
                            <MdGeneratingTokens style={{color: COLORS.white}}/>
                        </IconCircle>
                        <DetailsCont>
                            <Row>
                                <NotifTitle>You just received 100 tokens</NotifTitle>
                                <GoPrimitiveDot style={{color: COLORS.lightGreen}} />
                            </Row>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo laoreet malesuada justo.</Text>
                            <TextRow>
                                <AiFillClockCircle style={{marginRight: '5px'}} /> 
                                <Text style={{fontSize: '12px'}}>11:45 July 17</Text>
                            </TextRow>
                        </DetailsCont>
                    </SingleNotification>

                    <SingleNotification  style={{border: 'none'}} >
                        <IconCircle  style={{backgroundColor: COLORS.searchBar}} >
                            <MdArticle style={{color: COLORS.white}}/>
                        </IconCircle>
                        <DetailsCont>
                            <Row>
                                <NotifTitle>Your Order #LD45643201</NotifTitle>
                                <GoPrimitiveDot style={{color: COLORS.searchBar}} />
                            </Row>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo laoreet malesuada justo.</Text>
                            <TextRow>
                                <AiFillClockCircle style={{marginRight: '5px'}} /> 
                                <Text style={{fontSize: '12px'}}>11:45 July 17</Text>
                            </TextRow>
                        </DetailsCont>
                    </SingleNotification>
                </Container>
            </OrderContainer>
        </PageBg>
        
    )
}

const PageBg = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 1
`;

const OrderContainer = styled.div`
    box-shadow: 0px 12px 24px rgba(181, 173, 176, 0.25);
    border-radius: 16px;
    background-color: ${COLORS.white};
    width: 27%;
    position: absolute;
    right: 100px;
    top: 55px; 
    padding-bottom: 15px;
`;

const ArrowUp = styled.div`
    width: 0; 
    height: 0; 
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid ${COLORS.white};
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute;
    top: -7px;
    left: 185px;
`;

const Container = styled.div`
    margin: 10px 0;
`;

const Title = styled.h4`
    color: ${COLORS.titleColor};
    font-weight: 500;
    font-size: 18px;
    margin: -1px 0;
    text-align: center;
    padding: 10px 0;
`;

const SingleNotification = styled.div`
    border-bottom: 1px solid ${COLORS.border};
    display: flex;
    align-items: flex-start;
    margin: 0 20px 15px;
    padding: 10px;
`;

const IconCircle = styled.div`
    border-radius: 100%;
    background-color: ${COLORS.lightGreen};
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DetailsCont = styled.div`
    margin-left: 8px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NotifTitle = styled.p`
    margin: -1px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${COLORS.textColor};
`;

const Text = styled.p`
    margin: -1px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    padding: 7px 0;
    text-align: left;
    color: ${COLORS.grayTextColor};
`;

const TextRow = styled.div`
    display: flex;
    align-items: center;
    color: ${COLORS.pageTitle};

`;

export default NotificationModal;