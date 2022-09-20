import React from 'react';
import styled from 'styled-components';

import { AiFillEdit, AiFillCaretDown } from 'react-icons/ai';
import COLORS from '../../styles/colors';

const data = [
  {
    id: 1,
    variable: "Name",
    value: "Cameron Williamson"
  },
  {
    id: 2,
    variable: "Phone number",
    value: "505 555 01 25"
  },
  {
    id: 3,
    variable: "Email",
    value: "cameronwilliamson@gmail.com"
  },
  {
    id: 4,
    variable: "Birthday",
    value: "24/12/1958"
  },
]

const GeneralInfo = () => {
  return (
    <Container>
      <Row>
        <Title>General Information</Title>
        <AiFillEdit style={icon} />
      </Row>
      {data.map((e, index) => {
        return (
          <DataRow key={index}>
            <Variable>{e.variable}</Variable>
            <ValueCont>
              <Value>{e.value}</Value>
            </ValueCont>
          </DataRow>
        )
      })}
      <Row>
        <Variable>Gender</Variable>
        <GenderCont>
          <Value>Male</Value>
          <AiFillCaretDown style={icon} />
        </GenderCont>
      </Row>
      <Button>Save</Button>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const Button = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: ${COLORS.orange};
  border: 1px solid ${COLORS.orange};
  border-radius: 8px;
  width: 20%;
  padding: 8px;
  color: ${COLORS.white};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h6`
  margin: -1px 0;
  padding-bottom: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: ${COLORS.orange};
`;

const icon = {
  color: COLORS.grayTextColor,
  marginLeft: '10px'
};

const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px 0;
`;

const Variable = styled.p`
  margin: -1px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${COLORS.grayTextColor};
`;

const ValueCont = styled.div`
  border-bottom: 1px solid ${COLORS.border};
  width: 50%;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

const Value = styled.p`
  margin: -1px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${COLORS.textColor};
`;

const GenderCont = styled.div`
  width: 50%;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

export default GeneralInfo;