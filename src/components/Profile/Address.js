import React, { useState } from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsPlusCircleDotted } from "react-icons/bs";

const Address = () => {

  const [selectedOption, setSelectedOption] = useState("option1");

  const selectedOptionHandler = (e) => {
      setSelectedOption(e.target.value);
  }

  return (
    <Container>
      <Title>Address</Title>
      <LabelCont>
          <Input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={selectedOptionHandler} />
          <InputRow>
              <LabelCol>
                  <Label>Anh Thi Nguyen<Span>Default address</Span></Label>
                  <LabelText>(+61) 082 771 7873</LabelText>
                  <LabelText>81 Southwell Crescent</LabelText>
                  <LabelText>CHARLEY CREEK, Western Australia</LabelText>
              </LabelCol>
              <BiDotsVerticalRounded style={{color: COLORS.orange}}/>
          </InputRow>
      </LabelCont>
      <LabelCont>
          <Input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={selectedOptionHandler} />
          <InputRow>
              <LabelCol>
                  <Label>Dave Tomlinson</Label>
                  <LabelText>(+61) 082 771 7873</LabelText>
                  <LabelText>81 Southwell Crescent</LabelText>
                  <LabelText>CHARLEY CREEK, Western Australia</LabelText>
              </LabelCol>
              <BiDotsVerticalRounded style={{color: COLORS.orange}} />
          </InputRow>
      </LabelCont>
      <LabelCont>
          <Input type="radio" value="option3" checked={selectedOption === 'option3'} onChange={selectedOptionHandler}/>
          <InputRow>
              <LabelCol>
                  <Label>Tyson H Chin Kaw</Label>
                  <LabelText>(+61) 082 771 7873</LabelText>
                  <LabelText>81 Southwell Crescent</LabelText>
                  <LabelText>CHARLEY CREEK, Western Australia</LabelText>
              </LabelCol>
              <BiDotsVerticalRounded style={{color: COLORS.orange}}/>
          </InputRow>
      </LabelCont>

      <AddNewCont>
          <BsPlusCircleDotted style={{color: COLORS.orange}}/>
          <AddNewText>Add a new address</AddNewText>
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
    align-items: flex-start;
    margin: 30px 20px;
`;

const Input = styled.input`
    accent-color: ${COLORS.orange};
    margin-right: 7px;
`;

const InputRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
`;

const LabelCol = styled.div`

`;

const LabelText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${COLORS.grayTextColor};
    margin: -1px 0;
    padding: 5px 0;
`;

const Label = styled.label`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${COLORS.textColor};
    padding: 2px 0;
`;

const Span = styled.span`
    color: ${COLORS.lightGreen};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    margin-left: 10px;
`;

const AddNewCont = styled.div`
    margin: 10px 20px;
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

export default Address