import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import COLORS from '../../styles/colors';
import IMG from '../../assets/images';

const ForgetPassword = () => {

  const [element, setElement] = useState({
    email: '',
    emailValid: false,
    submitValid: true
  });

  const emailHandler = (e) => {
    let emailValid = e.target.value ? true : false;
    let submitValid = emailValid;

    setElement({
        ...element,
        email: e.target.value,
        emailValid: emailValid,
        submitValid: !submitValid
    });
  }

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/confirmCode`; 
    navigate(path);
  }

  return (
    <PageContainer>
        <Container>
          <Title>Forgot password</Title>
          <Form>
            <Text style={{margin: '0 30px'}}>Enter the email address associated with your account and <Span>Yumme</Span> will send an email with instructions on how to reset your password.</Text>
            <Border 
              style={element.email ? {padding: '5px 20px'} : {padding: '13px 20px'}}
            >
                <BorderLabel 
                  style={element.email ? {display: 'inline'} : {display: 'none'}}
                >Email</BorderLabel>
                <TextInput 
                  type="email" placeholder="Email" value={element.email} onChange={emailHandler} 
                />
            </Border>
            <Button 
                  onClick={routeChange}
                  disabled={element.submitValid}
                  style={{backgroundColor: element.submitValid ? COLORS.disableOrange : COLORS.orange, borderColor: element.submitValid ? COLORS.disableOrange : COLORS.orange}}
              >Get Code</Button>
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

const Border = styled.div`
  border: 1px solid ${COLORS.border};
  border-radius: 12px;
  margin: 15px 0;
`;

const BorderLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: ${COLORS.pageTitle};
  width: 100%;
`;

const TextInput = styled.input`
  outline: none;
  border: none;
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
  text-align: justify;
`;

const Span = styled.span`
    font-weight: 700;
    color: ${COLORS.textColor};
`;

const Button = styled.button`
  border: 1px solid;
  margin: 10px 0;
  padding: 15px;
  text-align: center;
  color:  ${COLORS.white};
  border-radius: 12px;
  width: 100%;
`;

const SignInOption = styled.div`
  width: 30%;
  padding-top: 10%;
`;

const Image = styled.img`

`;

export default ForgetPassword;

