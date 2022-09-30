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
        price: "$40"
    },
    {
        image: IMG.pizza5,
        name: "Seafood Pizza",
        status: "🔥 No.1 in Sales",
        like: 323,
        price: "$40"
    },
    {
        image: IMG.pizza6,
        name: "Seafood Pizza",
        status: "🔥 No.1 in Sales",
        like: 323,
        price: "$40"
    }
]

const RestaurantMenu = ({ title, onClick }) => {

    return (
        <Container>
            <Title>{title}</Title>
            <ItemsContainer>
                <Row>
                    <ItemCont onClick={onClick}>
                        <ImageCont>
                            <Image src={IMG.pizza1} alt="image"/>
                            <AiOutlineHeart style={heartIcon}/>
                        </ImageCont>                        
                        <ContMargin>
                            <Name>Seafood Pizza</Name>
                            <Row>
                                <Text>🔥 No.1 in Sales</Text>
                                <BsDot style={{color: '#ff961c59'}} />
                                <Text>323</Text>
                                <AiOutlineHeart style={{color: COLORS.orange}} />
                            </Row>
                            <Row>
                                <Price>$40</Price>
                                <BsFillPlusCircleFill style={{color: COLORS.lightGreen}} />
                            </Row>   
                        </ContMargin>
                    </ItemCont>
                    <ItemCont>
                        <ImageCont>
                            <Image src={IMG.pizza2} alt="image"/>
                            <AiOutlineHeart style={heartIcon}/>
                        </ImageCont>
                        <ContMargin>
                            <Name>Seafood Pizza</Name>
                            <Row>
                                <Text>🔥 No.1 in Sales</Text>
                                <BsDot style={{color: '#ff961c59'}} />
                                <Text>323</Text>
                                <AiOutlineHeart style={{color: COLORS.orange}} />
                            </Row>
                            <Row>
                                <Price>$40</Price>                          
                                <Counter>
                                    <Oper>-</Oper>
                                    <Number>01</Number>
                                    <Oper>+</Oper>
                                </Counter> 
                            </Row>   
                        </ContMargin>
                    </ItemCont>
                    <ItemCont>
                        <ImageCont>
                            <Image src={IMG.pizza3} alt="image"/>
                            <AiOutlineHeart style={heartIcon}/>
                            <OpacityBg></OpacityBg>
                            <AlignCont>
                                <StockCont>
                                    <StockText>Out of stock</StockText>
                                </StockCont>
                            </AlignCont>
                        </ImageCont>
                        <ContMargin>
                            <Name>Seafood Pizza</Name>
                            <Row>
                                <Text>🔥 No.1 in Sales</Text>
                                <BsDot style={{color: '#ff961c59'}} />
                                <Text>323</Text>
                                <AiOutlineHeart style={{color: COLORS.orange}} />
                            </Row>
                            <Row>
                                <Price>$40</Price>
                                <BsFillPlusCircleFill style={{color: COLORS.searchBar}}/>  
                            </Row>   
                        </ContMargin>
                    </ItemCont>
                </Row>                           
                <Row>
                    {data.map((item, index) => {
                        return (
                                <ItemCont key={index}>
                                    <ImageCont>
                                        <Image src={item.image} alt="image"/>
                                        <AiOutlineHeart style={heartIcon}/>
                                    </ImageCont>
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
                                            <BsFillPlusCircleFill style={{color: COLORS.lightGreen}}/>  
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
    padding: 10px 0;
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
    margin: 13px 0;
`;

const ImageCont = styled.div`
    position: relative;
`;

const heartIcon = {
    position: 'absolute',
    top: '13px',
    right: '13px',
    color: COLORS.white,
}

const OpacityBg = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${COLORS.white};
    opacity: 0.3;
    z-index: 1;
    top: 0;
    left: 0;
`;

const AlignCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const StockCont = styled.div`
    background-color: ${COLORS.white};
    border-radius: 8px;
    padding: 7px 10px; 
    opacity: 1;

`;

const StockText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin: -1px 0;
    color: ${COLORS.pageTitle};
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
    color: ${COLORS.lightGreen};
    border-right: 1px solid ${COLORS.border};
    border-left: 1px solid ${COLORS.border};
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    padding-top: 5px;
`;

export default RestaurantMenu;