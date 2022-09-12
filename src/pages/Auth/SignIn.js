import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import COLORS from '../../styles/colors';
import IMG from '../../assets/images';

const SignIn = () => {

  const [element, setElement] = useState({
    email: '',
    password: '',
    emailValid: false,
    passwordValid: false,
    submitValid: true
});

const emailHandler = (e) => {
    let emailValid = e.target.value ? true : false;
    let submitValid = emailValid && element.password;

    setElement({
        ...element,
        email: e.target.value,
        emailValid: emailValid,
        submitValid: !submitValid
    });
}

const passwordHandler = (e) => {
    let passwordValid = e.target.value ? true : false;
    let submitValid = passwordValid && element.email;

    setElement({
        ...element,
        password: e.target.value,
        passwordValid: passwordValid,
        submitValid: !submitValid
    });
}

  return (
    <PageContainer>
        <Container>
          <Title>Sign in</Title>
          <Form>
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
            <Border 
              style={element.password ? {padding: '5px 20px'} : {padding: '13px 20px'}}
            >
                <BorderLabel 
                  style={element.password ? {display: 'inline'} : {display: 'none'}}
                >Password</BorderLabel>
                <TextInput 
                  type="password" placeholder="Password" value={element.password} onChange={passwordHandler} 
                />
            </Border>
            <Row>
              <StyledLink to="/forgetPassword">Forgotten your Password?</StyledLink>
              <Text>Don’t have an account? <StyledLink to="/register">Register here</StyledLink></Text>
            </Row>
            <Button 
                  disabled={element.submitValid}
                  style={{backgroundColor: element.submitValid ? COLORS.disableOrange : COLORS.orange, borderColor: element.submitValid ? COLORS.disableOrange : COLORS.orange}}
              >Sign in</Button>
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
  width: 35%;
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

const StyledLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: ${COLORS.orange};
  padding: 10px 0;
  text-decoration: none;
  cursor: pointer;
`;

const Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: ${COLORS.pageTitle};
  padding: 10px 0;
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

export default SignIn;

