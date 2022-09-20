import React from 'react';
import styled from "styled-components";

import COLORS from "../../styles/colors";

const QRCode = () => {
  return (
    <Container>
      <Title>QR Code</Title>
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

export default QRCode;