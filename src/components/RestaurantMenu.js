import React from "react";
import styled from "styled-components";

import IMG from "../assets/images";
import COLORS from "../styles/colors";


import { AiOutlineHeart } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";

const data = [
    {
        image: IMG.pizza4,
        name: "Seafood Pizza",
        status: "🔥 No.1 in Sales",
        like: 323,
        price: "A$40"
    },
    {
        image: IMG.pizza5,
        name: "Seafood Pizza",
        status: "🔥 No.1 in Sales",
        like: 323,
        price: "A$40"
    },
    {
        image: IMG.pizza6,
        name: "Seafood Pizza",
        status: "🔥 No.1 in Sales",
        like: 323,
        price: "A$40"
    }
]

const RestaurantMenu = ({ title, onClick }) => {

    return (
        <Container>
            <Title>{title}</Title>
            <ItemsContainer>
                <Row>
                    <ItemCont onClick={onClick}>
                        <Image src={IMG.pizza1} alt="image"/>
                        <ContMargin>
                            <Name>Seafood Pizza</Name>
                            <Row>
                                <Text>🔥 No.1 in Sales</Text>
                                <BsDot style={{color: '#ff961c59'}} />
                                <Text>323</Text>
                                <AiOutlineHeart style={{color: COLORS.orange}} />
                            </Row>
                            <Row>
                                <Price>A$40</Price>
                                <BsFillPlusCircleFill style={{color: COLORS.green}} />
                            </Row>   
                        </ContMargin>
                    </ItemCont>
                    <ItemCont>
                        <Image src={IMG.pizza2} alt="image" />
                        <ContMargin>
                            <Name>Seafood Pizza</Name>
                            <Row>
                                <Text>🔥 No.1 in Sales</Text>
                                <BsDot style={{color: '#ff961c59'}} />
                                <Text>323</Text>
                                <AiOutlineHeart style={{color: COLORS.orange}} />
                            </Row>
                            <Row>
                                <Price>A$40</Price>                          
                                <Counter>
                                    <Oper>-</Oper>
                                    <Number>01</Number>
                                    <Oper>+</Oper>
                                </Counter> 
                            </Row>   
                        </ContMargin>
                    </ItemCont>
                    <ItemCont>
                        <Image src={IMG.pizza3} alt="image"/>
                        <ContMargin>
                            <Name>Seafood Pizza</Name>
                            <Row>
                                <Text>🔥 No.1 in Sales</Text>
                                <BsDot style={{color: '#ff961c59'}} />
                                <Text>323</Text>
                                <AiOutlineHeart style={{color: COLORS.orange}} />
                            </Row>
                            <Row>
                                <Price>A$40</Price>
                                <BsFillPlusCircleFill style={{color: COLORS.green}}/>  
                            </Row>   
                        </ContMargin>
                    </ItemCont>
                </Row>                           
                <Row>
                    {data.map((item, index) => {
                        return (
                                <ItemCont key={index}>
                                    <Image src={item.image} alt="image"/>
                                    <ContMargin>
                                        <Name>{item.name}</Name>
                                        <Row>
                                            <Text>{item.status}</Text>
                                            <BsDot style={{color: '#ff961c59'}} />
                                            <Text>{item.like}</Text>
                                            <AiOutlineHeart style={{color: COLORS.orange}} />
                                        </Row>
                                        <Row>
                                            <Price>{item.price}</Price>
                                            <BsFillPlusCircleFill style={{color: COLORS.green}}/>  
                                        </Row>   
                                    </ContMargin>
                                </ItemCont>            
                        )
                    })}
                </Row>
            </ItemsContainer>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 20px 15px;
    position: relative;
`;

const Title = styled.h6`
    font-weight: 700;
    font-size: 16px;
    color: ${COLORS.textColor};
    margin: -1px;
    padding: 25px 0 10px;
`;

const ItemsContainer = styled.div`

`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

const ItemCont = styled.div`
    border 1px solid ${COLORS.border};
    border-radius: 10px;
    width: 30%;
    margin: 5px 0;
`;

const Image = styled.img`
    width: 100%;
`;

const ContMargin = styled.div`
    padding: 10px;
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

export default RestaurantMenu;