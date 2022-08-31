import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { AiFillCaretDown } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { MdRestaurant } from "react-icons/md";

const NewAddressModal = ({ onClick, positionStyle , continueBtn}) => {

    return (
        <PageBg style={positionStyle} onClick={onClick}>
            <Container>
                <GiCancel onClick={onClick} style={cancelBTN} />
                <Title>Confirm Order</Title>
                <ThinBorder></ThinBorder>

                <Text>Contact</Text>
                <Border>
                    <TextInput type="text" placeholder="Name" />
                </Border>
                <Border>
                    <TextInput type="text" placeholder="Phone number" />
                </Border>

                <Text>Service options</Text>
                <LabelCont>
                    <Input type="radio" checked/>
                    <Delivery style={{backgroundColor: '#27c75426'}}>
                        <MdDeliveryDining style={{color: COLORS.green}}/>
                    </Delivery>
                    <Label>Shipper delivery</Label>
                </LabelCont>
                <LabelCont>
                    <Input type="radio"/>
                    <Delivery style={{backgroundColor: '#F1F1F5'}}>
                        <MdRestaurant style={{color: COLORS.pageTitle}}/>
                    </Delivery>
                    <Label>Onsite pickup</Label>
                </LabelCont>

                <Text>Address</Text>
                <Border>
                    <Row>
                        <TextInput type="text" placeholder="Select a state" />
                        <AiFillCaretDown style={{color: COLORS.pageTitle}} />
                    </Row>
                </Border>
                <Border>
                    <Row>
                        <TextInput type="text" placeholder="Select a city" />
                        <AiFillCaretDown style={{color: COLORS.pageTitle}} />
                    </Row>
                </Border>
                <Border>
                    <TextInput type="text" placeholder="Address" />
                </Border>

                <Text>Time</Text>
                <TimeRow>
                    <Row>
                        <TimeBorder>
                            <Row>
                                <TextInput type="text" placeholder="Choose time" />
                                <AiFillCaretDown style={{color: COLORS.pageTitle}} />
                            </Row>
                        </TimeBorder>
                        <AMBorder>
                            <Row>
                                <TextInput type="text" placeholder="AM" />
                                <AiFillCaretDown style={{color: COLORS.pageTitle}} />
                            </Row>
                        </AMBorder>
                    </Row>
                </TimeRow>     
                <Border>
                    <TextInput type="text" placeholder="Choose date" />
                </Border>
                <Button onClick={continueBtn}>Continue</Button>
            </Container>
        </PageBg>
    )
}

const PageBg = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 1;
    padding: 13% 0;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    border-radius: 25px;
    background-color: ${COLORS.white};
    position: relative;
    padding: 15px 0;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute; 
    z-index: 1; 
`;

const cancelBTN = {
    position: 'absolute',
    color: COLORS.pageTitle,
    right: '25px',
    top: '20px'
};

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: ${COLORS.textColor};
    text-align: center;
    margin: -1px;
    padding: 10px 0;
`;

const ThinBorder = styled.div`
    border-top: 1px solid ${COLORS.border};
    margin: 10px 60px;
`;

const Text = styled.p`
    color: ${COLORS.textColor};
    margin: 20px 60px;
`;

const Border = styled.div`
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
    margin: 10px 60px;
    padding: 10px 20px;
`;

const TimeRow = styled.div`
    margin: 10px 60px;
`;

const TimeBorder = styled.div`
    width: 63%;
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
    padding: 10px 20px;
`;

const AMBorder = styled.div`
    width: 15%;
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
    padding: 10px 20px;
`;

const TextInput = styled.input`
    outline: none;
    border: none;
    width: 100%;
`;

const LabelCont = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 60px;
`;

const Input = styled.input`
    accent-color: ${COLORS.orange};
    margin-right: 7px;
`;

const Label = styled.label`
    font-weight: 400;
    font-size: 15px;
`;

const Delivery = styled.div`
    padding: 1px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 6px 0 0;
`;

const Button = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    margin: 10px 60px;
    padding: 15px;
    text-align: center;
    color:  ${COLORS.white};
    border-radius: 12px;
    width: 78%;
`;

export default NewAddressModal;