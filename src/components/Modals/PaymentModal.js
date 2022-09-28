import React, { useState } from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { GiCancel } from "react-icons/gi";
import { BsPlusCircleDotted } from "react-icons/bs";
import IMG from "../../assets/images";

const PaymentModal = ({ cancel, positionStyle, addNew, continueBtn}) => {

    const [selectedOption, setSelectedOption] = useState("option1");

    const selectedOptionHandler = (e) => {
        setSelectedOption(e.target.value);
    }

    return (
        <PageBg style={positionStyle}>
            <Container>
                <GiCancel onClick={cancel} style={cancelBTN} />
                <Title>Payment Method</Title>
                <ThinBorder></ThinBorder>

                <Text>Choose payment methods</Text>
                <LabelCont>
                    <Input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={selectedOptionHandler} />
                    <CardImage src={IMG.visa} alt="card" />
                    <LabelCol>
                        <Label>NATIONAL AUSTRALIA BANK</Label>
                        <LabelText>•••• 9824</LabelText>
                    </LabelCol>
                </LabelCont>
                <LabelCont>
                    <Input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={selectedOptionHandler} />
                    <CardImage src={IMG.paypal} alt="card" />
                    <LabelCol>
                        <Label>Paypal</Label>
                        <LabelText>cameronwill@gmail.com</LabelText>
                    </LabelCol>
                </LabelCont>
                <LabelCont>
                    <Input type="radio" value="option3" checked={selectedOption === 'option3'} onChange={selectedOptionHandler} />
                    <CardImage src={IMG.master} alt="card" />
                    <LabelCol>
                        <Label>NATIONAL AUSTRALIA BANK</Label>
                        <LabelText>•••• 2354</LabelText>
                    </LabelCol>
                </LabelCont>
            

                <LargeBorder></LargeBorder>

                <AddNewCont onClick={addNew}>
                    <BsPlusCircleDotted style={{color: COLORS.orange}}/>
                    <AddNewText>Add payment method</AddNewText>
                </AddNewCont>

                <Button onClick={continueBtn}>Continue</Button>
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

const LargeBorder = styled.div`
    border-top: 8px solid ${COLORS.modelBorder};
    margin: 10px 60px;
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

const LabelCol = styled.div`

`;

const LabelText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.grayTextColor};
    margin: -1px 0;
    padding: 2px 0;
`;

const Label = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.textColor};
    padding: 2px 0;
`;

const CardImage = styled.img`
    margin: 0 6px;
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

const AddNewCont = styled.div`
    margin: 10px 60px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const AddNewText = styled.p`
    color: ${COLORS.orange};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-left: 7px;
`;

export default PaymentModal;