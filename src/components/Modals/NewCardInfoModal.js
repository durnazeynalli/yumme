import React, { useState } from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { GiCancel } from "react-icons/gi";
import { FiImage } from "react-icons/fi";

const NewCardInfoModal = ({ onClick, positionStyle , continueBtn, terms }) => {

    const [element, setElement] = useState({
        name: '',
        cardNumber: '',
        expireDate: '',
        cvc: '',
        nameValid: false,
        cardNumberValid: false,
        expireDateValid: false,
        cvcValid: false,
        submitValid: true
    });

    const nameHandler = (e) => {
        let nameValid = e.target.value ? true : false;
        let submitValid = nameValid && element.cardNumber && element.expireDateValid && element.cvcValid;

        setElement({
            ...element,
            name: e.target.value,
            nameValid: nameValid,
            submitValid: !submitValid
        });
    }

    const cardNumberHandler = (e) => {
        let cardNumberValid = e.target.value ? true : false;
        let submitValid = cardNumberValid && element.name && element.expireDateValid && element.cvcValid;

        setElement({
            ...element,
            cardNumber: e.target.value,
            cardNumberValid: cardNumberValid,
            submitValid: !submitValid
        });
    }

    const expireDateHandler = (e) => {
        let expireDateValid = e.target.value ? true : false;
        let submitValid = expireDateValid && element.nameValid && element.cardNumberValid && element.cvcValid;

        setElement({
            ...element,
            expireDate: e.target.value,
            expireDateValid: expireDateValid,
            submitValid: !submitValid
        });
    }

    const cvcHandler = (e) => {
        let cvcValid = e.target.value ? true : false;
        let submitValid = cvcValid && element.nameValid && element.cardNumberValid && element.expireDateValid;

        setElement({
            ...element,
            cvc: e.target.value,
            cvcValid: cvcValid,
            submitValid: !submitValid
        });
    }

    return (
        <PageBg style={positionStyle}>
            <Container>
                <GiCancel onClick={onClick} style={cancelBTN} />
                <Title>Credit card information</Title>
                <ThinBorder></ThinBorder>

                <Text>Fill credit card information</Text>
                <Border style={element.name ? {padding: '5px 20px'} : {padding: '13px 20px'}}>
                    <BorderLabel style={element.name ? {display: 'inline'} : {display: 'none'}}>Name on card</BorderLabel>
                    <TextInput type="text" placeholder="Name on card" value={element.name} onChange={nameHandler} />
                </Border>
                <Border style={element.cardNumber ? {padding: '5px 20px'} : {padding: '13px 20px'}}>
                    <BorderLabel style={element.cardNumber ? {display: 'inline'} : {display: 'none'}}>Card number</BorderLabel>
                    <TextInput type="text" placeholder="Card number" value={element.cardNumber} onChange={cardNumberHandler} />
                </Border>
                <InfoRow>
                    <Row>
                        <InfoBorder style={element.expireDate ? {padding: '5px 20px'} : {padding: '13px 20px'}}>
                            <BorderLabel style={element.expireDate ? {display: 'inline'} : {display: 'none'}}>Expiry Date</BorderLabel>
                            <TextInput type="text" placeholder="Expiry Date" value={element.expireDate} onChange={expireDateHandler} />
                        </InfoBorder>
                        <InfoBorder style={element.cvc ? {padding: '5px 20px'} : {padding: '13px 20px'}}>
                            <BorderLabel style={element.cvc ? {display: 'inline'} : {display: 'none'}}>CVC</BorderLabel>
                            <TextInput type="text" placeholder="CVC" value={element.cvc} onChange={cvcHandler} />
                        </InfoBorder>
                    </Row>
                </InfoRow> 
                <ImageCont>
                    <FiImage style={{color: COLORS.orange}} />    
                    <ImageText>Or upload credit card image</ImageText>
                </ImageCont>
                <Button 
                    onClick={continueBtn}
                    disabled={element.submitValid}
                    style={{backgroundColor: element.submitValid ? COLORS.disableOrange : COLORS.orange, borderColor: element.submitValid ? COLORS.disableOrange : COLORS.orange}}
                >Continue</Button>
                <Terms>By clicking to Continue, I agree to <Span onClick={terms}>Credit Card Registration Terms.</Span></Terms>
            </Container>
        </PageBg>
    )
}

const PageBg = styled.div`
    padding: 7% 0;
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
`;

const BorderLabel = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${COLORS.pageTitle};
    width: 100%;
`;

const InfoRow = styled.div`
    margin: 10px 60px;
`;

const InfoBorder = styled.div`
    width: 140px;
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
`;

const TextInput = styled.input`
    outline: none;
    border: none;
    width: 100%;
`;

const ImageCont = styled.div`
    margin: 10px 60px;
    padding: 10px 0;
    display: flex;
    align-items; center;
    justify-content: center;
`;

const ImageText = styled.p`
    color: ${COLORS.orange};
    margin: -1px 0;
    padding-left: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
`;

const Terms = styled.p`
    margin: -1px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.pageTitle};
    margin: 10px 60px;
`;

const Span = styled.span`
    color: ${COLORS.orange};
    cursor: pointer;
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

export default NewCardInfoModal;