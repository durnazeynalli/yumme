import React, { useState } from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { GiCancel } from "react-icons/gi";

import TimeAndDate from "./ModalComponents/TimeAndDate";
import Address from "./ModalComponents/Address";
import DeliveryMethods from "./ModalComponents/DeliveryMethods";

const NewAddressModal = ({ cancel, positionStyle , continueBtn}) => {

    const [element, setElement] = useState({
        name: '',
        number: '',
        street: '',
        suburb: '',
        postcode: '',
        nameValid: false,
        numberValid: false,
        streetValid: false,
        suburbValid: false,
        postcodeValid: false,
        submitValid: true
    });

    const nameHandler = (e) => {
        let nameValid = e.target.value ? true : false;
        let submitValid = nameValid && element.number && element.street && element.suburb && element.postcode;

        setElement({
            ...element,
            name: e.target.value,
            nameValid: nameValid,
            submitValid: !submitValid
        });
    }

    const numberHandler = (e) => {
        let numberValid = e.target.value ? true : false;
        let submitValid = numberValid && element.name && element.street && element.suburb && element.postcode;

        setElement({
            ...element,
            number: e.target.value,
            numberValid: numberValid,
            submitValid: !submitValid
        });
    }

    const streetHandler = (e) => {
        let streetValid = e.target.value ? true : false;
        let submitValid = streetValid && element.nameValid && element.number && element.suburb && element.postcode;

        setElement({
            ...element,
            street: e.target.value,
            streetValid: streetValid,
            submitValid: !submitValid
        });
    }

    const suburbHandler = (e) => {
        let suburbValid = e.target.value ? true : false;
        let submitValid = suburbValid && element.nameValid && element.number && element.street && element.postcode;

        setElement({
            ...element,
            suburb: e.target.value,
            suburbValid: suburbValid,
            submitValid: !submitValid
        });
    }

    const postcodeHandler = (e) => {
        let postcodeValid = e.target.value ? true : false;
        let submitValid = postcodeValid && element.nameValid && element.number && element.street && element.suburb;

        setElement({
            ...element,
            postcode: e.target.value,
            postcodeValid: postcodeValid,
            submitValid: !submitValid
        });
    }

    return (
        <PageBg style={positionStyle}>
            <Container>
                <GiCancel 
                    onClick={cancel} 
                    style={{position: 'absolute',
                        color: COLORS.pageTitle,
                        right: '25px',
                        top: '20px', 
                        display: element.submitValid ? 'inline' : 'none'
                    }} 
                />
                <Title>Payee’s details</Title>
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

                    <DeliveryMethods />

                    <Address
                        streetValue={element.street}
                        streetOnChange={streetHandler}
                        streetBorderStyle={element.street ? {padding: '5px 20px'} : {padding: '13px 20px'}}
                        streetLabelStyle={element.street ? {display: 'inline'} : {display: 'none'}}

                        suburbValue={element.suburb}
                        suburbOnChange={suburbHandler}
                        suburbBorderStyle={element.suburb ? {padding: '5px 20px'} : {padding: '13px 20px'}}
                        suburbLabelStyle={element.suburb ? {display: 'inline'} : {display: 'none'}}
                        
                        postCodeValue={element.postcode}
                        postCodeOnChange={postcodeHandler}
                        postCodeBorderStyle={element.postcode ? {padding: '5px 20px'} : {padding: '13px 20px'}}
                        postCodeLabelStyle={element.postcode ? {display: 'inline'} : {display: 'none'}}
                    />
                    <TimeAndDate />
                </Scroll>

                <Button 
                    onClick={continueBtn}
                    disabled={element.submitValid}
                    style={{backgroundColor: element.submitValid ? COLORS.disableOrange : COLORS.orange, borderColor: element.submitValid ? COLORS.disableOrange : COLORS.orange}}
                >Save</Button>
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
    padding: 15px 60px;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute; 
    z-index: 1; 
`;

const Scroll = styled.div`
    overflow-y: scroll;
    height: 370px;
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
    margin: 10px 0;
`;

const Text = styled.p`
    color: ${COLORS.textColor};
    margin: 20px 0;
    font-weight: 500;
    font-size: 14px;
`;

const Border = styled.div`
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
    margin: 10px 0;
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

const Button = styled.button`
    border: 1px solid;
    margin: 10px 0;
    padding: 15px;
    text-align: center;
    color:  ${COLORS.white};
    border-radius: 12px;
    width: 100%;
`;

export default NewAddressModal;