import React, { useState } from "react";
import styled from "styled-components";

import COLORS from "../../styles/colors";
import IMG from "../../assets/images";

import { GiCancel } from "react-icons/gi";
import { BsDot } from "react-icons/bs";
import { MdOutlineStickyNote2 } from "react-icons/md";

const ItemDetailModal = ({ onClick, positionStyle , addBtn}) => {

    const [selectedOption, setSelectedOption] = useState("option1");

    const selectedOptionHandler = (e) => {
        setSelectedOption(e.target.value);
    }

    return (
        <PageBg style={positionStyle}>

        <Container>
            <GiCancel onClick={onClick} style={cancelBTN} />
            <Title>Add item</Title>
            <ThinBorder></ThinBorder>
            <FoodDetails>
                <Image src={IMG.pizza1} alt="image" />
                <Info>
                    <Name>Seafood Pizza</Name>
                    <InfoRow>
                        <Text>🔥 No.1 in Sales</Text>
                        <BsDot style={{color: '#ff961c59'}} />
                        <Text>323 favourites</Text>
                    </InfoRow>
                    <Row>
                        <Price>$40</Price>
                        <Counter>
                            <Oper>-</Oper>
                            <Number>01</Number>
                            <Oper>+</Oper>
                        </Counter> 
                    </Row> 
                </Info>
            </FoodDetails>
            <Border></Border>
            <Form>
                <SizeText>Choose size</SizeText>
                <LabelCont>
                    <Input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={selectedOptionHandler} />
                    <LabelRow>
                        <Label>Size S</Label>
                        <LabelPrice>$40</LabelPrice>
                    </LabelRow>
                </LabelCont>
                <LabelCont>
                    <Input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={selectedOptionHandler} />
                    <LabelRow>
                        <Label>Size M</Label>
                        <LabelPrice>$50</LabelPrice>
                    </LabelRow>
                </LabelCont>
                <LabelCont>
                    <Input type="radio" value="option3" checked={selectedOption === 'option3'} onChange={selectedOptionHandler} />
                    <LabelRow>
                        <Label>Size L</Label>
                        <LabelPrice>$60</LabelPrice>
                    </LabelRow>
                </LabelCont>
                <NoteCont>
                    <MdOutlineStickyNote2 style={{color: COLORS.border}} />
                    <Note type="text" placeholder="Add note"/>
                </NoteCont>
            </Form>
            <Button onClick={addBtn}>Add to cart ($40)</Button>
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
    position: relative;
    padding: 15px 0;
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
    padding: 5px 0;
`;

const ThinBorder = styled.div`
    border-top: 1px solid ${COLORS.border};
    margin: 10px 60px;
`;

const FoodDetails = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 60px;
`;

const Info = styled.div`
    width: 80%;
`;

const InfoRow = styled.div`
    display: flex;
    align-items: center;
`;

const Image = styled.img`
    width: 75px;
    height: 75px;
    margin-right: 15px;
    border-radius: 10px;
`;

const Name = styled.h6`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin: -1px;
    padding: 5px 0;
    color: ${COLORS.textColor};
`;

const Text = styled.p`
    margin: -1px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    padding: 5px 0;
    color: ${COLORS.pageTitle};
`;

const Price = styled.h6`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    margin: -1px;
    padding: 8px 0;
    color: ${COLORS.orange};
`;

const Counter = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${COLORS.border};
    border-radius: 4px;
`;

const Oper = styled.div`
    width: 33%;
    text-align: center;
    color: ${COLORS.textColor};
`;

const Number = styled.div`
    width: 34%;
    height: 20px;
    text-align: center;
    color: ${COLORS.green};
    border-right: 1px solid ${COLORS.border};
    border-left: 1px solid ${COLORS.border};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    padding-top: 5px;
`;

const Border = styled.div`
    border-top: 5px solid ${COLORS.modelBorder};
    margin: 20px 30px;
`;

const Form = styled.form`
    margin: 15px 60px;
`;

const SizeText = styled.label`
    color: ${COLORS.restaurantInfo};
`;

const LabelCont = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`;

const Input = styled.input`
    accent-color: ${COLORS.orange};
    margin-right: 7px;
`;

const LabelRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Label = styled.label`
    font-weight: 400;
    font-size: 14px;
`;

const LabelPrice = styled.label`
    font-weight: 700;
    font-size: 16px;
`;

const NoteCont = styled.div`
    width: 100%;
    border-bottom: 1px solid ${COLORS.border};
    display: flex;
    align-items: center;
    margin: 20px 0;
    padding-bottom: 7px;
`;

const Note = styled.input`
    outline: none;
    border: none;
    margin-left: 8px;

    ::placeholder {
        color: ${COLORS.border}
    }
`;

const Button = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    margin: 10px 60px;
    padding: 15px;
    text-align: center;
    color:  ${COLORS.white};
    border-radius: 12px;
    width: 75%;
`;

export default ItemDetailModal;