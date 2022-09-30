import React, { useState } from 'react'
import styled from "styled-components";

import COLORS from "../../../styles/colors";

import { MdDeliveryDining } from "react-icons/md";
import { MdRestaurant } from "react-icons/md";

const DeliveryMethods = () => {
    const [selectedOption, setSelectedOption] = useState("option1");
    
    const selectedOptionHandler = (e) => {
        setSelectedOption(e.target.value);
    }
    return (
        <Container>
            <Text>Methods of delivery</Text>
            <LabelCont>
                <Input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={selectedOptionHandler} />
                <Delivery style={{backgroundColor: '#27c75426'}}>
                    <MdDeliveryDining style={{color: COLORS.lightGreen}}/>
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
        </Container>
    )
}

const Container = styled.div`
    margin: 10px 0;
`;

const Text = styled.p`
    color: ${COLORS.textColor};
    margin: 20px 0;
    font-weight: 500;
    font-size: 14px;
`;

const LabelCont = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
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

export default DeliveryMethods