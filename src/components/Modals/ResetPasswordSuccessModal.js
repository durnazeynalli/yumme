import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { AiFillCheckCircle } from "react-icons/ai";

const ResetPasswordSuccessModal = ({ positionStyle, signIn }) => {

    return (
        <PageBg style={positionStyle}>
            <Container>
                <AiFillCheckCircle style={cancelBTN} />

                <TextBorder>
                    <Text>Reset password successfully!</Text>
                </TextBorder>

                <Button onClick={signIn}>OK</Button>

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
    padding: 70px 40px;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute; 
    z-index: 1; 
    text-align: center;
`;

const cancelBTN = {
    color: COLORS.green,
};

const TextBorder = styled.div`
    margin: 10px 0;
`;

const Text = styled.p`
    color: ${COLORS.textColor};
    text-align: center;
    font-weight: 500;
    font-size: 16px;
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

export default ResetPasswordSuccessModal;