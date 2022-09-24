import React, { useState } from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { GiCancel } from "react-icons/gi";

const NewPaypalModal = ({ cancel, positionStyle , continueBtn}) => {

    const [element, setElement] = useState({
        email: '',
        emailValid: false,
        submitValid: true
    });

    const elementHandler = (e) => {
        let emailValid = e.target.value ? true : false;
        let submitValid = emailValid;

        setElement({
            email: e.target.value,
            emailValid: emailValid,
            submitValid: !submitValid
        });
    }

    return (
        <PageBg style={positionStyle}>
            <Container>
                <GiCancel onClick={cancel} style={cancelBTN} />
                <Title>Paypal information</Title>
                <ThinBorder></ThinBorder>

                <Text>Fill Paypal information</Text>

                <Border style={element.submitValid ? {padding: '10px 20px'} : {padding: '5px 20px'}}>
                    <BorderLabel style={element.submitValid ? {display: 'none'} : {display: 'inline'}}>Email</BorderLabel>
                    <TextInput type="email" value={element.email} onChange={elementHandler} placeholder="Email" />
                </Border>
                
                <Button 
                    onClick={continueBtn} 
                    disabled={element.submitValid}
                    style={{backgroundColor: element.submitValid ? COLORS.disableOrange : COLORS.orange, borderColor: element.submitValid ? COLORS.disableOrange : COLORS.orange}}
                >Authorize</Button>
            </Container>
        </PageBg>
    )
}

const PageBg = styled.div`
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
    width: 30%;
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
`;

const TextInput = styled.input`
    outline: none;
    border: none;
    width: 100%;
`;

const Button = styled.button`
    border: 1px solid;
    margin: 10px 60px;
    padding: 15px;
    text-align: center;
    color:  ${COLORS.white};
    border-radius: 12px;
    width: 72%;
`;

export default NewPaypalModal;