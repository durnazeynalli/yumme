import React from "react";
import styled from "styled-components";

import COLORS from "../../../styles/colors";
import IMG from "../../../assets/images";


const PaymentMethod = () => {

    return (
        <Container>
            <Row>
                <Text>Payment method</Text>
                <Change>Change</Change>
            </Row>
            <LabelCont>
                <CardImage src={IMG.visa} alt="card" />
                <LabelCol>
                    <Label>NATIONAL AUSTRALIA BANK</Label>
                    <LabelText>•••• 9824</LabelText>
                </LabelCol>
            </LabelCont>
        </Container>
    )
}

const Container = styled.div`
    margin: 10px 60px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Change = styled.p`
    color: ${COLORS.orange};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
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
`;

const LabelCol = styled.div`

`;

const LabelText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: ${COLORS.grayTextColor};
    margin: -1px 0;
    padding: 3px 0;
`;

const Label = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.textColor};
    padding: 3px 0;
`;

const CardImage = styled.img`
    margin: 0 6px 0 0;
`;

export default PaymentMethod;