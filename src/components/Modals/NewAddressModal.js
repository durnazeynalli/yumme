import React, { useState } from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { GiCancel } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { MdRestaurant } from "react-icons/md";
import TimeAndDate from "./ModalComponents/TimeAndDate";
import Address from "./ModalComponents/Address";

const NewAddressModal = ({ cancel, positionStyle , continueBtn}) => {

    const [selectedOption, setSelectedOption] = useState("option1");
    const [element, setElement] = useState({
        name: '',
        number: '',
        address: '',
        nameValid: false,
        numberValid: false,
        addressValid: false,
        submitValid: true
    });

    const nameHandler = (e) => {
        let nameValid = e.target.value ? true : false;
        let submitValid = nameValid && element.number && element.address;

        setElement({
            ...element,
            name: e.target.value,
            nameValid: nameValid,
            submitValid: !submitValid
        });
    }

    const numberHandler = (e) => {
        let numberValid = e.target.value ? true : false;
        let submitValid = numberValid && element.name && element.address;

        setElement({
            ...element,
            number: e.target.value,
            numberValid: numberValid,
            submitValid: !submitValid
        });
    }

    const addressHandler = (e) => {
        let addressValid = e.target.value ? true : false;
        let submitValid = addressValid && element.nameValid && element.number;

        setElement({
            ...element,
            address: e.target.value,
            addressValid: addressValid,
            submitValid: !submitValid
        });
    }

    const selectedOptionHandler = (e) => {
        setSelectedOption(e.target.value);
    }

    return (
        <PageBg style={positionStyle}>
            <Container>
                <GiCancel onClick={cancel} style={cancelBTN} />
                <Title>Confirm Order</Title>
                <ThinBorder></ThinBorder>
                <Scroll>
                    <Text>Contact</Text>
                    <Border style={element.name ? {padding: '5px 20px'} : {padding: '13px 20px'}}>
                        <BorderLabel style={element.name ? {display: 'inline'} : {display: 'none'}}>Name</BorderLabel>
                        <TextInput type="text" placeholder="Name" value={element.name} onChange={nameHandler} />
                    </Border>
                    <Border style={element.number ? {padding: '5px 20px'} : {padding: '13px 20px'}}>
                        <BorderLabel style={element.number ? {display: 'inline'} : {display: 'none'}}>Phone number</BorderLabel>
                        <TextInput type="text" placeholder="Phone number" value={element.number} onChange={numberHandler} />
                    </Border>

                    <Text>Service options</Text>
                    <LabelCont>
                        <Input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={selectedOptionHandler} />
                        <Delivery style={{backgroundColor: '#27c75426'}}>
                            <MdDeliveryDining style={{color: COLORS.green}}/>
                        </Delivery>
                        <Label>Shipper delivery</Label>
                    </LabelCont>
                    <LabelCont>
                        <Input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={selectedOptionHandler} />
                        <Delivery style={{backgroundColor: '#F1F1F5'}}>
                            <MdRestaurant style={{color: COLORS.pageTitle}}/>
                        </Delivery>
                        <Label>Onsite pickup</Label>
                    </LabelCont>

                    <Address
                        value={element.address}
                        onChange={addressHandler}
                        borderStyle={element.address ? {padding: '5px 20px'} : {padding: '13px 20px'}}
                        labelStyle={element.address ? {display: 'inline'} : {display: 'none'}}
                    />
                    <TimeAndDate />
                </Scroll>

                <Button 
                    onClick={continueBtn}
                    disabled={element.submitValid}
                    style={{backgroundColor: element.submitValid ? COLORS.disableOrange : COLORS.orange, borderColor: element.submitValid ? COLORS.disableOrange : COLORS.orange}}
                >Continue</Button>
            </Container>
        </PageBg>
    )
}

const PageBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
    height: 370px;
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
`;

const BorderLabel = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${COLORS.pageTitle};
    width: 100%;
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
    border: 1px solid;
    margin: 10px 60px;
    padding: 15px;
    text-align: center;
    color:  ${COLORS.white};
    border-radius: 12px;
    width: 78%;
`;

export default NewAddressModal;