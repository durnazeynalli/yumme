import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import IMG from "../../assets/images";

import COLORS from "../../styles/colors";

const CancelOrderModal = ({ positionStyle, keep, terms }) => {

    let navigate = useNavigate(); 
    const routeChange = (e) =>{ 
        let path = `/cancelled`;     
      navigate(path);
    }

    return (
        <PageBg style={positionStyle}>
            <Container>
                <Image src={IMG.fail} alt="fail" />
                <Content>
                    <Title>Cancel order</Title>
                    <Scroll>

                        <TextBorder>
                            <Text>Why do you want to cancel this order?</Text>
                        </TextBorder>

                        <RateTextContainer>
                            <RateTextCont>
                                <RateText>Food quality</RateText>
                            </RateTextCont>
                            <RateTextCont>
                                <RateText>Customer service</RateText>
                            </RateTextCont>
                            <RateTextCont>
                                <RateText>Eating out</RateText>
                            </RateTextCont>
                            <RateTextCont>
                                <RateText>Delivery time</RateText>
                            </RateTextCont>
                        </RateTextContainer>
                        <TextArea placeholder="Your message" rows="6" cols="50"/>
                        <CheckCont>
                            <Input type="checkbox" />
                            <ConfirmText>By clicking to Cancel, I agree to <Span onClick={terms} >T&amp;Cs.</Span></ConfirmText>
                        </CheckCont>
                    </Scroll>

                    <Row>
                        <Button 
                            onClick={routeChange}
                            style={{backgroundColor: COLORS.white, color: COLORS.orange}}
                        >Cancel anyway</Button>
                        <Button 
                            onClick={keep}
                        >Keep oder</Button>
                    </Row>
                    
                </Content>

            </Container>
        </PageBg>
    )
}

const PageBg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    border-radius: 25px;
    background-color: ${COLORS.white};
    padding-bottom: 15px;
    box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
    position: absolute; 
    z-index: 1; 
    width: 30%;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    width: 100%;
`;

const Image = styled.img`
    width: 100%;
    margin-top: -15px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    margin-bottom: 20px;
`;

const Content = styled.div`
    padding: 0 60px;
`;

const Scroll = styled.div`
    height: 170px;
    overflow-y: scroll;
`;

const Title = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: ${COLORS.textColor};
    text-align: center;
    margin: -1px 0;
    padding-bottom: 10px;
`;

const TextBorder = styled.div`
    margin: 10px 0;
`;

const Text = styled.p`
    color: ${COLORS.grayTextColor};
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.01em;
`;

const RateTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
  margin: 10px 0;
`;

const RateTextCont = styled.div`
  border: 1px solid ${COLORS.grayBackground};
  background-color: ${COLORS.grayBackground};
  border-radius: 8px;
  margin: 5px 2px;
  padding: 7px 15px;
`;

const RateText = styled.p`
  color: ${COLORS.grayTextColor};
  margin: -1px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  border-radius: 12px;
  background-color: ${COLORS.grayBackground};
  border: 1px solid ${COLORS.border};
  padding: 10px;
  outline: none;
  resize: none;

  ::placeholder {
    color: ${COLORS.pageTitle}
  }
`;

const CheckCont = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 5px 0;
`;

const Input = styled.input`

`;

const ConfirmText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    margin: -1px 0;
    color: ${COLORS.pageTitle};
`;

const Span = styled.span`
  color: ${COLORS.orange};
  cursor: pointer;
`;

const Button = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    padding: 15px;
    text-align: center;
    color:  ${COLORS.white};
    border-radius: 12px;
    width: 47%;
`;

export default CancelOrderModal;