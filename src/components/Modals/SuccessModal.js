import React from "react";
import styled from "styled-components";
import IMG from "../../assets/images";

import COLORS from "../../styles/colors";

const SuccessModal = ({ positionStyle, agreeBtn }) => {

    return (
        <PageBg style={positionStyle}>
            <Container>
                <Image src={IMG.success} alt="success" />
                <Body>
                    <Title>Congratulations!</Title>
                    <TextBorder>
                        <Text>Your order at Pizza Hut has been accepted.</Text>
                    </TextBorder>
                    <Button onClick={agreeBtn}>OK</Button>
                </Body>
            </Container>
        </PageBg>
    )
}

const PageBg = styled.div`
    padding: 13% 0;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    border-radius: 25px;
    background-color: ${COLORS.white};
    position: relative;
    padding-bottom: 15px;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute; 
    z-index: 1; 
`;

const Image = styled.img`
    width: 100%;
    margin-top: -15px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    margin-bottom: 20px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: ${COLORS.textColor};
    margin: -1px;
    // padding: 10px 0;
`;

const TextBorder = styled.div`
    width: 250px;
    margin: 5px 60px;
`;

const Text = styled.p`
    color: ${COLORS.grayTextColor};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
    text-align: center;
`;

const Button = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    margin: 10px 60px;
    padding: 15px;
    text-align: center;
    color:  ${COLORS.white};
    border-radius: 12px;
    width: 70%;
`;

export default SuccessModal;