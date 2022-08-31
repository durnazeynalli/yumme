import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { GiCancel } from "react-icons/gi";
import { FiImage } from "react-icons/fi";

const NewCardInfoModal = ({ onClick, positionStyle , continueBtn, terms }) => {

    return (
        <PageBg style={positionStyle} onClick={onClick}>
            <Container>
                <GiCancel onClick={onClick} style={cancelBTN} />
                <Title>Credit card information</Title>
                <ThinBorder></ThinBorder>

                <Text>Fill credit card information</Text>
                <Border>
                    <TextInput type="text" placeholder="Name on card" />
                </Border>
                <Border>
                    <TextInput type="text" placeholder="Card number" />
                </Border>
                <InfoRow>
                    <Row>
                        <InfoBorder>
                            <TextInput type="text" placeholder="Expiry Date" />
                        </InfoBorder>
                        <InfoBorder>
                            <TextInput type="text" placeholder="CVC" />
                        </InfoBorder>
                    </Row>
                </InfoRow> 
                <ImageCont>
                    <FiImage style={{color: COLORS.orange}} />    
                    <ImageText>Or upload credit card image</ImageText>
                </ImageCont>
                <Button onClick={continueBtn}>Continue</Button>
                <Terms>By clicking to Continue, I agree to <Span onClick={terms}>Credit Card Registration Terms.</Span></Terms>
            </Container>
        </PageBg>
    )
}

const PageBg = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    position: relative;
    z-index: 1;
    padding: 13% 0;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    border-radius: 25px;
    background-color: ${COLORS.white};
    position: relative;
    padding: 15px 0;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute;  
`;

const cancelBTN = {
    position: 'absolute',
    color: COLORS.pageTitle,
    right: '25px',
    top: '20px'
};

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

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
    margin: 10px 60px;
`;

const Text = styled.p`
    color: ${COLORS.textColor};
    margin: 20px 60px;
`;

const Border = styled.div`
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
    margin: 10px 60px;
    padding: 10px 20px;
`;

const InfoRow = styled.div`
    margin: 10px 60px;
`;

const InfoBorder = styled.div`
    width: 39%;
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
    padding: 10px 20px;
`;

const TextInput = styled.input`
    outline: none;
    border: none;
    width: 100%;
`;

const ImageCont = styled.div`
    margin: 10px 60px;
    padding: 10px 0;
    display: flex;
    align-items; center;
    justify-content: center;
`;

const ImageText = styled.p`
    color: ${COLORS.orange};
    margin: -1px 0;
    padding-left: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
`;

const Terms = styled.p`
    margin: -1px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.pageTitle};
    margin: 10px 60px;
`;

const Span = styled.span`
    color: ${COLORS.orange};
    cursor: pointer;
`;

const Button = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    margin: 10px 60px;
    padding: 15px;
    text-align: center;
    color:  ${COLORS.white};
    border-radius: 12px;
    width: 78%;
`;

export default NewCardInfoModal;