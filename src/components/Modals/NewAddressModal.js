import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { GiCancel } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { MdRestaurant } from "react-icons/md";
import TimeAndDate from "./ModalComponents/TimeAndDate";
import Address from "./ModalComponents/Address";

const NewAddressModal = ({ cancel, positionStyle , continueBtn}) => {

    return (
        <PageBg style={positionStyle}>
            <Container>
                <GiCancel onClick={cancel} style={cancelBTN} />
                <Title>Confirm Order</Title>
                <ThinBorder></ThinBorder>
                <Scroll>
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

                    <Address />
                    <TimeAndDate />
                </Scroll>

                <Button onClick={continueBtn}>Continue</Button>
            </Container>
        </PageBg>
    )
}

const PageBg = styled.div`
    padding: 9% 0;
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

const Scroll = styled.div`
    overflow-y: scroll;
    height: 400px;
`;

const cancelBTN = {
    position: 'absolute',
    color: COLORS.pageTitle,
    right: '25px',
    top: '20px'
};

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