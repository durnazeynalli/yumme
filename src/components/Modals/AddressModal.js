import React from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";

import { AiFillCaretDown } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsPlusCircleDotted } from "react-icons/bs";

const AddressModal = ({ cancel, positionStyle, addNew, continueBtn}) => {

    return (
        <PageBg style={positionStyle}>
            <Container>
                <GiCancel onClick={cancel} style={cancelBTN} />
                <Title>Address</Title>
                <ThinBorder></ThinBorder>

                <LabelCont>
                    <Input type="radio" checked/>
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
                    <Input type="radio"/>
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
                    <Input type="radio"/>
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

                <AddNewCont onClick={addNew}>
                    <BsPlusCircleDotted style={{color: COLORS.orange}}/>
                    <AddNewText>Add a new address</AddNewText>
                </AddNewCont>

                <LargeBorder></LargeBorder>

                <Text>Time</Text>
                <TimeRow>
                    <Row>
                        <TimeBorder>
                            <Row>
                                <TextInput type="text" placeholder="Choose time" />
                                <AiFillCaretDown style={{color: COLORS.pageTitle}} />
                            </Row>
                        </TimeBorder>
                        <AMBorder>
                            <Row>
                                <TextInput type="text" placeholder="AM" />
                                <AiFillCaretDown style={{color: COLORS.pageTitle}} />
                            </Row>
                        </AMBorder>
                    </Row>
                </TimeRow>     
                <Border>
                    <TextInput type="text" placeholder="Choose date" />
                </Border>
                <Button onClick={continueBtn}>Continue</Button>
            </Container>
        </PageBg>
    )
}

const PageBg = styled.div`
    padding: 5% 0 20%;
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
`;

const cancelBTN = {
    position: 'absolute',
    color: COLORS.pageTitle,
    right: '25px',
    top: '20px'
};

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: ${COLORS.textColor};
    text-align: center;
    margin: -1px;
    padding: 10px 0;
`;

const ThinBorder = styled.div`
    border-top: 1px solid ${COLORS.border};
    margin: 10px 60px;
`;

const Text = styled.p`
    color: ${COLORS.textColor};
    margin: 20px 60px;
`;

const Border = styled.div`
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
    margin: 10px 60px;
    padding: 10px 20px;
`;

const LargeBorder = styled.div`
    border-top: 8px solid ${COLORS.modelBorder};
    margin: 10px 60px;
`;

const TimeRow = styled.div`
    margin: 10px 60px;
`;

const TimeBorder = styled.div`
    width: 63%;
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
    padding: 10px 20px;
`;

const AMBorder = styled.div`
    width: 15%;
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
    padding: 10px 20px;
`;

const TextInput = styled.input`
    outline: none;
    border: none;
    width: 100%;
`;

const LabelCont = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 10px 60px;
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
    padding: 2px 0;
`;

const Label = styled.label`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${COLORS.textColor};
    padding: 2px 0;
`;

const Span = styled.span`
    color: ${COLORS.green};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    margin-left: 10px;
`;

const Button = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    margin: 10px 60px;
    padding: 15px;
    text-align: center;
    color:  ${COLORS.white};
    border-radius: 12px;
    width: 78%;
`;

const AddNewCont = styled.div`
    margin: 10px 60px;
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

export default AddressModal;