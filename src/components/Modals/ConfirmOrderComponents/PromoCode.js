import React from "react";
import styled from "styled-components";

import IMG from "../../../assets/images";
import COLORS from "../../../styles/colors";

const PromoCode = () => {

    return (
        <Container>
            <Text>Promo code</Text>
            <Row>
                <Border>
                    <TextInput type="text" placeholder="Enter promo code" />
                </Border>             
                <Button>Apply</Button>
            </Row>
            <PromoCodes>
                <PromoCont>
                    <Row>
                        <DiscountCont>
                            <Logo src={IMG.logo} />
                            <Discount>Discount</Discount>
                        </DiscountCont>
                        <TextCont>
                            <Text1>A$5 OFF</Text1>
                            <Text2>This line is apply conditions</Text2>
                            <Text3>Valid till: 10/10/2021</Text3>
                        </TextCont>
                    </Row>
                </PromoCont>
            </PromoCodes>    
        </Container>
)
}

const Container = styled.div`
    margin: 0 60px;
`;

const Text = styled.p`
    color: ${COLORS.textColor};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Border = styled.div`
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
    padding: 10px 20px;
    width: 65%;
`;

const TextInput = styled.input`
    outline: none;
    border: none;
    width: 100%;
`;

const Button = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    padding: 10px 0;
    text-align: center;
    color: ${COLORS.white};
    border-radius: 12px;
    width: 20%;
`;

const PromoCodes = styled.div`
    display: flex;
    width: 400px;
`;

const PromoCont = styled.div`
    width: 240px;
    border: 1px solid ${COLORS.orange};
    box-shadow: 0px 10px 16px rgba(20, 37, 63, 0.06);
    border-radius: 12px;
    padding: 10px;
    margin: 10px 0;
`;

const DiscountCont = styled.div`
    background-color: ${COLORS.orange};
    text-align: center;
    border-radius: 8px;
    width: 75px;
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    width: 25px;
    height: 25px;
`;

const Discount = styled.p`
    color: ${COLORS.white};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    margin: -1px 0;
    padding: 3px 0;
`;

const TextCont = styled.div`

`;

const Text1 = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color:  ${COLORS.textColor};
    margin: -1px 0;
    padding: 3px 0;
`;

const Text2 = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color:  ${COLORS.restaurantInfo};
    margin: -1px 0;
    padding: 3px 0;
`;

const Text3 = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color:  ${COLORS.grayTextColor};
    margin: -1px 0;
    padding: 3px 0;
`;


export default PromoCode;