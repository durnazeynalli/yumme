import React from "react";
import styled from "styled-components";

import COLORS from "../../../styles/colors";

import { MdDeliveryDining } from "react-icons/md";
import { MdRestaurant } from "react-icons/md";
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdLocationOn } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

const ServiceAndDelivery = ({value1, value2, onChange, selectedOption1, selectedOption2}) => {

    return (
        <Container>
            <Column>
                <Text>Service options</Text>
                <LabelCont>
                    <Input type="radio" value={value1} checked={selectedOption1} onChange={onChange}/>
                    <Delivery style={{backgroundColor: '#27c75426'}}>
                        <MdDeliveryDining style={{color: COLORS.green}}/>
                    </Delivery>
                    <Label>Shipper delivery</Label>
                </LabelCont>
                <LabelCont>
                    <Input type="radio" value={value2} checked={selectedOption2} onChange={onChange}/>
                    <Delivery style={{backgroundColor: '#F1F1F5'}}>
                        <MdRestaurant style={{color: COLORS.pageTitle}}/>
                    </Delivery>
                    <Label>Onsite pickup</Label>
                </LabelCont>
            </Column>
            <Column>
                <Text>Deliver to</Text>
                <Column>
                    <Row>
                        <TitleRow>
                            <MdLocationOn style={{color: COLORS.orange}} />

                            <Title>Bessie Cooper</Title>
                            <BsDot style={{color: '#ff961c59'}} />
                            <Title>0165550120</Title>
                        </TitleRow>
                        <MdKeyboardArrowRight style={{color: COLORS.pageTitle}} />
                    </Row>
                    <Label>123 Brown Street Captain Creek QLD</Label>
                </Column>
                <Column>
                    <Row>
                        <TitleRow>
                            <AiFillClockCircle style={{color: COLORS.orange}} />
                            <Title>Deliver at 3:30PM - Today</Title>
                        </TitleRow>
                        <MdKeyboardArrowRight style={{color: COLORS.pageTitle}} />
                    </Row>
                </Column>               
            </Column>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 60px;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Text = styled.p`
    color: ${COLORS.textColor};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
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
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.grayTextColor};
`;

const Delivery = styled.div`
    padding: 1px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 6px 0 0;
`;

const Column = styled.div`
    margin: 10px 0;
`;

const TitleRow = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled.h6`
    margin: -1px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: ${COLORS.textColor};
    padding: 5px 0 5px 2px;
`;

export default ServiceAndDelivery;