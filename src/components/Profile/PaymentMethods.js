import React, { useState } from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { BsPlusCircleDotted } from "react-icons/bs";
import IMG from "../../assets/images";

const PaymentMethods = () => {

  const [selectedOption, setSelectedOption] = useState("option1");

  const selectedOptionHandler = (e) => {
      setSelectedOption(e.target.value);
  }

  return (
    <Container>
      <Title>Payment Method</Title>
      <LabelCont>
          <Input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={selectedOptionHandler} />
          <CardImage src={IMG.visa} alt="card" />
          <LabelCol>
              <Label>NATIONAL AUSTRALIA BANK</Label>
              <LabelText>•••• 9824</LabelText>
          </LabelCol>
      </LabelCont>
      <LabelCont>
          <Input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={selectedOptionHandler} />
          <CardImage src={IMG.paypal} alt="card" />
          <LabelCol>
              <Label>Paypal</Label>
              <LabelText>cameronwill@gmail.com</LabelText>
          </LabelCol>
      </LabelCont>
      <LabelCont>
          <Input type="radio" value="option3" checked={selectedOption === 'option3'} onChange={selectedOptionHandler} />
          <CardImage src={IMG.master} alt="card" />
          <LabelCol>
              <Label>NATIONAL AUSTRALIA BANK</Label>
              <LabelText>•••• 2354</LabelText>
          </LabelCol>
      </LabelCont>

      <AddNewCont>
          <BsPlusCircleDotted style={{color: COLORS.orange}}/>
          <AddNewText>Add payment method</AddNewText>
      </AddNewCont>

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

const LabelCont = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
`;

const Input = styled.input`
    accent-color: ${COLORS.orange};
    margin-right: 7px;
`;

const LabelCol = styled.div`

`;

const LabelText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.grayTextColor};
    margin: -1px 0;
    padding: 2px 0;
`;

const Label = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.textColor};
    padding: 2px 0;
`;

const CardImage = styled.img`
    margin: 0 10px;
`;

const AddNewCont = styled.div`
    margin: 10px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

const AddNewText = styled.p`
    color: ${COLORS.orange};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-left: 7px;
`;

export default PaymentMethods