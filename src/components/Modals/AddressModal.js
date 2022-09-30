import React, { useState } from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsPlusCircleDotted } from "react-icons/bs";
import DeliveryMethods from "./ModalComponents/DeliveryMethods";

const AddressModal = ({ positionStyle, addNew, continueBtn}) => {

    const [selectedOption, setSelectedOption] = useState("option1");

    const selectedOptionHandler = (e) => {
        setSelectedOption(e.target.value);
    }

    return (
        <PageBg style={positionStyle}>
            <Container>
                <Title>Delivery details</Title>
                <ThinBorder></ThinBorder>

                <LabelCont>
                    <Input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={selectedOptionHandler} />
                    <InputRow>
                        <LabelCol>
                            <Label>Anh Thi Nguyen<Span>Default address</Span></Label>
                        </LabelCol>
                        <BiDotsVerticalRounded style={{color: COLORS.orange}}/>
                    </InputRow>
                </LabelCont>
                <LabelCont>
                    <Input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={selectedOptionHandler} />
                    <InputRow>
                        <LabelCol>
                            <Label>Raj Smith</Label>
                            <LabelText>(+61) 9123 4567</LabelText>
                            <LabelText>86 Southwell Crescent</LabelText>
                            <LabelText>Toowong, 4066</LabelText>
                        </LabelCol>
                        <BiDotsVerticalRounded style={{color: COLORS.orange}} />
                    </InputRow>
                </LabelCont>

                <AddNewCont onClick={addNew}>
                    <BsPlusCircleDotted style={{color: COLORS.orange}}/>
                    <AddNewText>Add a new address</AddNewText>
                </AddNewCont>

                <LargeBorder></LargeBorder>

                <DeliveryMethods />

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
    padding: 15px 60px;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute; 
    z-index: 1; 
    width: 30%;
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

const LargeBorder = styled.div`
    border-top: 8px solid ${COLORS.modelBorder};
    margin: 10px 0;
`;

const LabelCont = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 20px 0;
`;

const Input = styled.input`
    accent-color: ${COLORS.orange};
    margin-right: 7px;
`;

const InputRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
`;

const LabelCol = styled.div`

`;

const LabelText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.grayTextColor};
    margin: -1px 0;
    padding: 3px 0;
`;

const Label = styled.label`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${COLORS.textColor};
    padding: 2px 0;
`;

const Span = styled.span`
    color: ${COLORS.lightGreen};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    margin-left: 10px;
`;

const Button = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    margin: 10px 0;
    padding: 15px;
    text-align: center;
    color:  ${COLORS.white};
    border-radius: 12px;
    width: 100%;
`;

const AddNewCont = styled.div`
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

export default AddressModal;