import React from "react";
import styled from "styled-components";
import IMG from "../../assets/images";

import COLORS from "../../styles/colors";

const FailModal = ({ positionStyle, agreeBtn }) => {

    return (
        <PageBg style={positionStyle}>
            <Container>
                <Image src={IMG.fail} alt="fail" />
                <Title>Your order has been declined</Title>

                <TextBorder>
                    <Text>Your order ID is xxx1234567890</Text>
                </TextBorder>
                <Text style={{fontSize: '12px'}}>You will receive an email with details of the decline.</Text>

                <Button onClick={agreeBtn}>CONTINUE SHOPPING</Button>
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

const Title = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: ${COLORS.textColor};
    text-align: center;
    margin: -1px;
    padding-bottom: 10px;
`;

const TextBorder = styled.div`
    width: 300px;
    margin: 10px 60px;
`;

const Text = styled.p`
    color: ${COLORS.grayTextColor};
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.01em;
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

export default FailModal;