import React from 'react';
import styled from "styled-components";

import COLORS from "../../styles/colors";
import IMG from "../../assets/images";

const QRCode = () => {
  return (
    <Container>
      <Title>QR Code</Title>
      <QRContainer>
        <Text>Your QR code</Text>
        <ImgCont>
          <QrImg src={IMG.qr} alt="qr" />
          <Logo src={IMG.logoCircle} alt="logo"  />
        </ImgCont>
      </QRContainer>
    </Container>
  )
}

const Container = styled.div`
    height: 100%;
`;

const Title = styled.h6`
  margin: -1px 0;
  padding-bottom: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: ${COLORS.orange};
`;

const QRContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${COLORS.grayTextColor};
  margin: -1px 0;
  padding: 15px 0;
`;

const ImgCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const QrImg = styled.img`
  
`;

const Logo = styled.img`
  position: absolute;
  z-index: 1;
`;

export default QRCode;