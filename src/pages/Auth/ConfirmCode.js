import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ReactInputVerificationCode from "react-input-verification-code";

import COLORS from '../../styles/colors';
import IMG from '../../assets/images';

const ConfirmCode = () => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/resetPassword`; 
    navigate(path);
    }

  return (
    <PageContainer>
        <Container>
          <Title>Confirmation code</Title>
          <Form>
            <Text>Please enter the 6-digits verification code that Yumme has sent to your email address.</Text>
        
            <StyledReactInputVerificationCode>
                <ReactInputVerificationCode
                    placeholder={null}
                    length={6}
                />
            </StyledReactInputVerificationCode>

            <Button 
                onClick={routeChange}
                style={{backgroundColor: COLORS.orange, borderColor: COLORS.orange}}
            >Next</Button>
            <Text>I did not receive verification code? <Span>Resend new code.</Span></Text>
          </Form>
          <SignInOption>
            <Text style={{textAlign: 'center'}}>or Sign in with</Text>
            <Row>
              <Image src={IMG.facebook} alt="logo" />
              <Image src={IMG.google} alt="logo" />
              <Image src={IMG.apple} alt="logo" />
            </Row>
          </SignInOption>
        </Container>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8% 0;
`;

const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h6`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  color: ${COLORS.textColor};
  margin: -1px 0;
  padding: 10px 0;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${COLORS.pageTitle};
  padding: 10px 0;
  text-align: center;
`;

const Button = styled.button`
  border: 1px solid;
  margin: 30px 0 10px;
  padding: 15px;
  text-align: center;
  color:  ${COLORS.white};
  border-radius: 12px;
  width: 100%;
`;

const Span = styled.span`
    color: ${COLORS.orange};
`;

const SignInOption = styled.div`
  width: 30%;
  padding-top: 10%;
`;

const Image = styled.img`

`;

const StyledReactInputVerificationCode = styled.div`
  display: flex;
  justify-content: center;

  --ReactInputVerificationCode-itemWidth: 58px;
  --ReactInputVerificationCode-itemHeight: 104px;
  --ReactInputVerificationCode-itemSpacing: 18px;

  .ReactInputVerificationCode__item {
    font-size: 18px;
    font-weight: 500;

    border: 1px solid ${COLORS.border};
    border-radius: 8px;
    box-shadow: none;
  }

  .ReactInputVerificationCode__item.is-active {
    box-shadow: none;
    border: 1px solid #36c6d9;
  }
`;

export default ConfirmCode;

