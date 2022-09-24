import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";
import IMG from "../../assets/images";

import { GiCancel } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { MdAddPhotoAlternate } from "react-icons/md";

const RestaurantRateModal = ({ cancel, positionStyle , submitBtn}) => {

    return (
        <PageBg style={positionStyle}>
            <Container>
                <GiCancel onClick={cancel} style={cancelBTN} />
                <Title>Rating this restaurant</Title>
                <DetailsCont>
                    <ProfileImg src={IMG.detailLogo} alt="prpofile" />
                    <Name>Pizza Hut</Name>
                    <StarRow>
                        <AiFillStar style={{color: COLORS.orange}} />
                        <AiFillStar style={{color: COLORS.orange}} />
                        <AiFillStar style={{color: COLORS.orange}} />
                        <AiFillStar style={{color: COLORS.orange}} />
                        <AiFillStar style={{color: COLORS.searchBar}} />
                    </StarRow>
                    <RateTextContainer>
                      <RateTextCont>
                        <RateText>Accurate Timing</RateText>
                      </RateTextCont>
                      <RateTextCont>
                        <RateText>Genuine</RateText>
                      </RateTextCont>
                      <RateTextCont>
                        <RateText>Friendly</RateText>
                      </RateTextCont>
                      <RateTextCont>
                        <RateText>Professional</RateText>
                      </RateTextCont>
                      <RateTextCont>
                        <RateText>Good</RateText>
                      </RateTextCont>
                    </RateTextContainer>
                    <TextArea placeholder="Your message" rows="4" cols="50"/>
                    <PhotoBorder>
                      <Row>
                        <MdAddPhotoAlternate style={{color: COLORS.searchBar}} />
                        <Text>Add Photo</Text>
                      </Row>
                    </PhotoBorder>
                    <Row>
                      <CancelBtn onClick={cancel} >Cancel</CancelBtn>
                      <SubmitBtn onClick={submitBtn} >Submit</SubmitBtn>
                    </Row>
                </DetailsCont>
            </Container>
        </PageBg>
    )
}

const PageBg = styled.div`
  padding: 13% 0;
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
  width: 30%;
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
  margin: 10px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 70px;
  height: 70px;
`;

const Name = styled.h6`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: ${COLORS.textColor};
  margin: -1px 0;
  padding: 10px 0;
`;

const StarRow = styled.div`
  display: flex;
  align-items: center;
`;

const RateTextContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const RateTextCont = styled.div`
  border: 1px solid ${COLORS.grayBackground};
  background-color: ${COLORS.grayBackground};
  border-radius: 8px;
  margin: 5px 2px;
  padding: 7px;
`;

const RateText = styled.p`
  color: ${COLORS.grayTextColor};
  margin: -1px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  border-radius: 12px;
  background-color: ${COLORS.grayBackground};
  border: 1px solid ${COLORS.grayBackground};
  padding: 7px;
  outline: none;
  resize: none;

  ::placeholder {
    color: ${COLORS.pageTitle}
  }
`;

const PhotoBorder = styled.div`
  border: 1px dashed ${COLORS.searchBar};
  width: 100%;
  padding: 10px;
  margin: 15px 0;
  border-radius: 8px;
`;

const Text = styled.p`
  margin: -1px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color:  ${COLORS.searchBar};
`;

const CancelBtn = styled.button`
  border: 1px solid ${COLORS.orange};
  background-color: ${COLORS.white};
  padding: 10px;
  text-align: center;
  color:  ${COLORS.orange};
  border-radius: 10px;
  width: 48%;
  margin-right: 5px;
`;

const SubmitBtn = styled.button`
  border: 1px solid ${COLORS.orange};
  background-color: ${COLORS.orange};
  padding: 10px;
  text-align: center;
  color:  ${COLORS.white};
  border-radius: 10px;
  width: 49%;
  margin-left: 5px;

`;

export default RestaurantRateModal;