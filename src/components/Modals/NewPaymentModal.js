import React, { useState } from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { GiCancel } from "react-icons/gi";
import IMG from "../../assets/images";

const NewPaymentModal = ({ onClick, positionStyle , newPaypal, continueBtn, redBelly, cash}) => {

    const [selectedOption, setSelectedOption] = useState("option1");

    const selectedOptionHandler = (e) => {
        setSelectedOption(e.target.value);
    }

    const continueClick = () => {
        if (selectedOption === 'option3') {
            newPaypal();
        } else if (selectedOption === 'option2') {
            continueBtn();
        } else if (selectedOption === 'option4') {
            redBelly();
        } else {
            cash();
        }
    }

    return (
        <PageBg style={positionStyle}>
            <Container>
                <GiCancel onClick={onClick} style={cancelBTN} />
                <Title>Payment Method</Title>
                <ThinBorder></ThinBorder>

                <Text>Choose payment methods</Text>
                <LabelCont>
                    <Input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={selectedOptionHandler}/>
                    <Label>Cash</Label>
                </LabelCont>
                <LabelCont>
                    <Input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={selectedOptionHandler} />
                    <Row>
                        <Label>Credit/Debit Card</Label>
                        <CardRow>
                            <CardImage src={IMG.visa} alt="card" />
                            <CardImage src={IMG.master} alt="card" />
                            <CardImage src={IMG.amex} alt="card" />
                        </CardRow>
                    </Row>
                </LabelCont>
                <LabelCont>
                    <Input type="radio" value="option3" checked={selectedOption === 'option3'} onChange={selectedOptionHandler} />
                    <Row>
                        <Label>Paypal</Label>
                        <CardImage src={IMG.paypal} alt="card" />
                    </Row>
                </LabelCont>
                <LabelCont>
                    <Input type="radio" value="option4" checked={selectedOption === 'option4'} onChange={selectedOptionHandler} />
                    <Row>
                        <Label>Redbelly</Label>
                        {/* <CardImage src={IMG.paypal} alt="card" /> */}
                    </Row>
                </LabelCont>
        
                <Button onClick={continueClick}>Continue</Button>
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
    width: 100%;
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

const CardRow = styled.div`
    display: flex;
    align-items: center;
`;

const CardImage = styled.img`
    margin-left: 10px;
`;

const Text = styled.p`
    color: ${COLORS.textColor};
    margin: 20px 60px;
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

export default NewPaymentModal;