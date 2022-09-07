import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

const FailModal = ({ positionStyle, agreeBtn }) => {

    return (
        <PageBg style={positionStyle}>
            <Container>
                <Title>Oh uh, Sorry</Title>

                <TextBorder>
                    <Text>We’re sorry to inform you that our order is cancelled by 
                        restaurants caz out of stock. We hope you get your order <br/> soon!</Text>
                </TextBorder>

                <Button onClick={agreeBtn}>Find other restaurant</Button>
            </Container>
        </PageBg>
    )
}

const PageBg = styled.div`
    padding: 10% 0 11%;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    border-radius: 25px;
    background-color: ${COLORS.white};
    padding: 15px 60px;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute; 
    z-index: 1; 
`;

const Title = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: ${COLORS.textColor};
    text-align: center;
    margin: -1px;
    padding: 10px 0;
`;

const TextBorder = styled.div`
    width: 300px;
    margin: 10px 0;
`;

const Text = styled.p`
    color: ${COLORS.grayTextColor};
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
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

export default FailModal;