import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { ImSpinner3 } from "react-icons/im";

const SummaryOfPayments = ({ positionStyle }) => {

    return (
        <PageBg style={positionStyle}>
            <Container>
                <ImSpinner3 style={cancelBTN} />

                <TextBorder>
                    <Text style={{padding: '10px 0'}}>Summary of payments</Text>
                    <Text>1. 30 RBX [booking]</Text>
                    <Text>2. $240 [order]</Text>
                    <Text>3. $7 [delivery fee]</Text>
                </TextBorder>

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const cancelBTN = {
    color: COLORS.orange,
};

const TextBorder = styled.div`
    width: 100%;
    margin: 10px 0;
`;

const Text = styled.p`
    color: ${COLORS.textColor};
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    margin: -1px 0;
    padding: 2px 0;
`;

export default SummaryOfPayments