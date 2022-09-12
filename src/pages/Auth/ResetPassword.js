import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import COLORS from '../../styles/colors';
import IMG from '../../assets/images';

import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

import ResetPasswordSuccessModal from '../../components/Modals/ResetPasswordSuccessModal';

const ResetPassword = () => {

    const [element, setElement] = useState({
        password: '',
        confirmPassword: '',
        passwordValid: false,
        confirmPasswordValid: false,
        submitValid: true
    });
    
    const [visible, setVisible] = useState(true);
    const [confirmVisible, setConfirmVisible] = useState(true);
    
    const visibilityHandler = () => setVisible(v => !v);
    const confirmVisibilityHandler = () => setConfirmVisible(v => !v);
    
    const passwordHandler = (e) => {
        let passwordValid = e.target.value ? true : false;
        let submitValid = passwordValid && element.confirmPassword;
    
        setElement({
            ...element,
            password: e.target.value,
            passwordValid: passwordValid,
            submitValid: !submitValid
        });
    }
    
    const confirmPasswordHandler = (e) => {
        let confirmPasswordValid = e.target.value ? true : false;
        let submitValid = confirmPasswordValid && element.password;
    
        setElement({
            ...element,
            confirmPassword: e.target.value,
            confirmPasswordValid: confirmPasswordValid,
            submitValid: !submitValid
        });
    }

  const [success, setSuccess] = useState(false);

  const successHandler = () => setSuccess(v => !v);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/sign-in`; 
    navigate(path);
  }

  return (
    <PageContainer>
        <Container>
          <Title>Reset password</Title>
          <Form>
            <Text>Enter new password</Text>
            <Border 
              style={element.password ? {padding: '5px 20px'} : {padding: '13px 20px'}}
            >
                <BorderLabel 
                  style={element.password ? {display: 'inline'} : {display: 'none'}}
                >New Password</BorderLabel>
                <Row>
                    <TextInput 
                        type={visible ? "password" : "text"} 
                        placeholder="New Password" 
                        value={element.password} 
                        onChange={passwordHandler} 
                    />
                    {visible ? 
                        <AiFillEye 
                            onClick={visibilityHandler} 
                            style={{color: COLORS.pageTitle, marginTop: element.password ? '-20px' : 0}}  
                        /> 
                        : 
                        <AiFillEyeInvisible 
                            onClick={visibilityHandler} 
                            style={{color: COLORS.pageTitle, marginTop: element.password ? '-20px' : 0}}  
                        /> 
                    }
                </Row>
            </Border>
            <Border 
              style={element.confirmPassword ? {padding: '5px 20px'} : {padding: '13px 20px'}}
            >
                <BorderLabel 
                  style={element.confirmPassword ? {display: 'inline'} : {display: 'none'}}
                >Confirm New Password</BorderLabel>
                <Row>
                    <TextInput 
                        type={confirmVisible ? "password" : "text"} 
                        placeholder="Confirm New Password" 
                        value={element.confirmPassword} 
                        onChange={confirmPasswordHandler} 
                    />
                    {confirmVisible ? 
                        <AiFillEye 
                            onClick={confirmVisibilityHandler} 
                            style={{color: COLORS.pageTitle, marginTop: element.confirmPassword ? '-20px' : 0}} 
                        /> 
                        : 
                        <AiFillEyeInvisible 
                            onClick={confirmVisibilityHandler} 
                            style={{color: COLORS.pageTitle, marginTop: element.confirmPassword ? '-20px' : 0}}
                        /> 
                    }
                </Row>
            </Border>
            <Button 
                  onClick={successHandler}
                  disabled={element.submitValid}
                  style={{backgroundColor: element.submitValid ? COLORS.disableOrange : COLORS.orange, borderColor: element.submitValid ? COLORS.disableOrange : COLORS.orange}}
            >Save</Button>
          </Form>
          {success && <ResetPasswordSuccessModal positionStyle={positionStyle} signIn={routeChange} />}
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

const positionStyle = {
  position: 'fixed', 
  top: 0, 
  left: 0, 
  bottom: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: 1000,
};

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
  text-align: center;
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

export default ResetPassword;

