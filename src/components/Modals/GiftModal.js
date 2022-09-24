import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";
import IMG from "../../assets/images";

import { GiCancel } from "react-icons/gi";

const GiftModal = ({ cancel, positionStyle , continueBtn}) => {

    return (
        <PageBg style={positionStyle}>
            <Container>
                <GiCancel onClick={cancel} style={cancelBTN} />
                <Title>Thank you for choosing Yumme!</Title>
                <DetailsCont>
                    <AwardImg src={IMG.award} alt="award" />
                    <Text>On behalf of TRAN Systems, Thank you for choosing Yumme.</Text>
                    <Text>Your support is greatly appreciated. </Text>
                    <Text>Our cryptocurrency coins will be distributed to you via the Redbelly blockchain.</Text>
                    <SubmitBtn onClick={continueBtn} >Continue</SubmitBtn>
                </DetailsCont>
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
  padding: 15px 0;
  box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
  position: absolute; 
  z-index: 1; 
  width: 35%;
`;

const cancelBTN = {
  position: 'absolute',
  color: COLORS.pageTitle,
  right: '25px',
  top: '30px'
};

const Title = styled.h6`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: ${COLORS.textColor};
  text-align: center;
  margin: -1px;
  padding: 10px 0;
`;

const DetailsCont = styled.div`
  margin: 0 60px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AwardImg = styled.img`
  
`;

const Text = styled.p`
  margin: -1px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color:  ${COLORS.grayTextColor};
  text-align: center;
  line-height: 22px;

`;

const SubmitBtn = styled.button`
  border: 1px solid ${COLORS.orange};
  background-color: ${COLORS.orange};
  padding: 10px;
  text-align: center;
  color:  ${COLORS.white};
  border-radius: 10px;
  width: 100%;
  margin: 10px 0;
`;

export default GiftModal;