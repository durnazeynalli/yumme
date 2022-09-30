import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { GiCancel } from "react-icons/gi";

const CancelTerms = ({ positionStyle , cancelClick, agreeBtn }) => {

    return (
        <PageBg style={positionStyle}>
            <Container>
                <GiCancel onClick={cancelClick} style={cancelBTN} />
                <Title> Request of cancellation fees </Title>
                <ThinBorder></ThinBorder>

                <TextBorder>
                    <Text style={{textDecoration: 'underline'}}>A non-refundable fees are intended to protect Yumme in circumstances of sudden 
                        cancellation and to compensate the restaurant for the time, effort and money expended up to that point.</Text>
                    <Text>By clicking <Span>Agree</Span>, you affirm that you have read the above, and agree to the terms and conditions stated. 
                        If you do not agree, please press the X button. 
                    </Text>
                </TextBorder>

                <Button onClick={agreeBtn}>Agree</Button>
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
    position: relative;
    padding: 15px 60px;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute; 
    z-index: 1; 
`;

const cancelBTN = {
    position: 'absolute',
    color: COLORS.pageTitle,
    right: '25px',
    top: '20px',
};

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

const TextBorder = styled.div`
    width: 370px;
    margin: 10px 0;
`;

const Text = styled.p`
    color: ${COLORS.restaurantInfo};
    text-align: justify;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.01em;
`;

const Span = styled.span`
    font-weight: 700;
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

export default CancelTerms