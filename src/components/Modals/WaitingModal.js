import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { AiFillCheckCircle } from "react-icons/ai";

const WaitingModal = ({ positionStyle }) => {

    return (
        <PageBg style={positionStyle}>
            <Container>
                <AiFillCheckCircle style={cancelBTN} />

                <TextBorder>
                    <Text>Payment successfully!</Text>
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
    padding: 60px 40px;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute; 
    z-index: 1; 
    text-align: center;
`;

const cancelBTN = {
    color: COLORS.lightGreen,
};

const TextBorder = styled.div`
    width: 200px;
    margin: 10px 0;
`;

const Text = styled.p`
    color: ${COLORS.textColor};
    text-align: center;
    font-weight: 500;
    font-size: 16px;
`;

export default WaitingModal;