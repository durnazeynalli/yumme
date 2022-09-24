import React, { useState } from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";
import IMG from "../../assets/images";

import { GiCancel } from "react-icons/gi";

const GiftFormModal = ({ cancel, positionStyle , continueBtn}) => {

  const [element, setElement] = useState({
    name: '',
    postcode: '',
    lat: '',
    lon: '',
    nameValid: false,
    postcodeValid: false,
    latValid: false,
    lonValid: false,
    submitValid: true
});

const nameHandler = (e) => {
    let nameValid = e.target.value ? true : false;
    let submitValid = nameValid && element.postcodeValid && element.latValid && element.lonValid;

    setElement({
        ...element,
        name: e.target.value,
        nameValid: nameValid,
        submitValid: !submitValid
    });
}

const postcodeHandler = (e) => {
    let postcodeValid = e.target.value ? true : false;
    let submitValid = postcodeValid && element.name && element.latValid && element.lonValid;

    setElement({
        ...element,
        postcode: e.target.value,
        postcodeValid: postcodeValid,
        submitValid: !submitValid
    });
}

const latHandler = (e) => {
  let latValid = e.target.value ? true : false;
  let submitValid = latValid && element.name && element.postcodeValid && element.lonValid;

  setElement({
      ...element,
      lat: e.target.value,
      latValid: latValid,
      submitValid: !submitValid
  });
}

const lonHandler = (e) => {
  let lonValid = e.target.value ? true : false;
  let submitValid = lonValid && element.name && element.latValid && element.postcodeValid;

  setElement({
      ...element,
      lon: e.target.value,
      lonValid: lonValid,
      submitValid: !submitValid
  });
}

  return (
      <PageBg style={positionStyle}>
          <Container>
              <GiCancel onClick={cancel} style={cancelBTN} />
              <Title>Thank you for choosing Yumme!</Title>
              <DetailsCont>
                <ImageBorder>
                  <AwardImg src={IMG.award} alt="award" />
                </ImageBorder>
                <Text>Please fill-in the requirements.</Text>
                <Border style={element.name ? {padding: '5px 20px'} : {padding: '13px 20px'}}>
                    <BorderLabel style={element.name ? {display: 'inline'} : {display: 'none'}}>Street name</BorderLabel>
                    <TextInput type="text" placeholder="Street name" value={element.name} onChange={nameHandler} />
                </Border>
                <Border style={element.postcode ? {padding: '5px 20px'} : {padding: '13px 20px'}}>
                    <BorderLabel style={element.postcode ? {display: 'inline'} : {display: 'none'}}>Postcode/Zipcode</BorderLabel>
                    <TextInput type="text" placeholder="Postcode/Zipcode" value={element.postcode} onChange={postcodeHandler} />
                </Border>
                <Border style={element.lat ? {padding: '5px 20px'} : {padding: '13px 20px'}}>
                    <BorderLabel style={element.lat ? {display: 'inline'} : {display: 'none'}}>Latitude</BorderLabel>
                    <TextInput type="text" placeholder="Latitude" value={element.lat} onChange={latHandler} />
                </Border>
                <Border style={element.lon ? {padding: '5px 20px'} : {padding: '13px 20px'}}>
                    <BorderLabel style={element.lon ? {display: 'inline'} : {display: 'none'}}>Longitude</BorderLabel>
                    <TextInput type="text" placeholder="Longitude" value={element.lon} onChange={lonHandler} />
                </Border>
                <SubmitBtn 
                  onClick={continueBtn}
                  disabled={element.submitValid}
                  style={{backgroundColor: element.submitValid ? COLORS.disableOrange : COLORS.orange, borderColor: element.submitValid ? COLORS.disableOrange : COLORS.orange}}
                >Continue</SubmitBtn>
              </DetailsCont>
          </Container>
      </PageBg>
    )
}

const PageBg = styled.div`
  padding: 8% 0;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  border-radius: 25px;
  background-color: ${COLORS.white};
  position: relative;
  padding: 15px 0;
  box-shadow: 0px 12px 40px rgba(181, 173, 176, 0.25);
  position: absolute; 
  z-index: 1; 
  width: 35%;
`;

const cancelBTN = {
  position: 'absolute',
  color: COLORS.pageTitle,
  right: '25px',
  top: '30px'
};

const Title = styled.h6`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: ${COLORS.textColor};
  text-align: center;
  margin: -1px;
  padding: 10px 0;
`;

const DetailsCont = styled.div`
  margin: 0 60px 10px;  
`;

const ImageBorder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AwardImg = styled.img`

`;

const Text = styled.p`
  margin: -1px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color:  ${COLORS.grayTextColor};
  padding: 10px 0;

`;


const Border = styled.div`
  border: 1px solid ${COLORS.border};
  border-radius: 12px;
  width: 100%;
  margin: 10px 0;
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

const SubmitBtn = styled.button`
  border: 1px solid ${COLORS.orange};
  background-color: ${COLORS.orange};
  padding: 10px;
  text-align: center;
  color:  ${COLORS.white};
  border-radius: 10px;
  width: 100%;
  margin: 10px 0;
`;

export default GiftFormModal;