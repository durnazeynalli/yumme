import React, { useState } from "react";
import styled from "styled-components";

import IMG from "../../../assets/images";
import COLORS from "../../../styles/colors";

const PromoCode = () => {

    const [todos, setTodos] = useState([
        { id: "1", name: "A$5 OFF", selected: true },
        { id: "2", name: "A$8 OFF", selected: false },
        { id: "3", name: "A$10 OFF", selected: false },
      ]);
    
      const todoClicked = (e) => {
    
        setTodos(
          todos.map((todo) =>
            todo.id === e.target.getAttribute("data-id")
              ? { ...todo, selected: !todo.selected }
              : todo
          )
        );
      };

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
                {todos.map((todo) => {
                    return (
                        <PromoCont 
                            onClick={todoClicked}
                            data-id={todo.id}
                            key={todo.id}
                            className={`todoDiv${todo.selected ? " selected" : ""}`}
                            style={{borderWidth: todo.selected ? 1 : 0, borderStyle: 'solid', borderColor: todo.selected ? COLORS.orange : COLORS.searchBar}}
                        >
                            <Row>
                                <DiscountCont               
                                        style={{backgroundColor: todo.selected ? COLORS.orange : COLORS.searchBar}}
                                    >
                                    <Logo src={IMG.logo} />
                                    <Discount>Discount</Discount>
                                </DiscountCont>
                                <TextCont>
                                    <Text1>{todo.name}</Text1>
                                    <Text2>This line is apply conditions</Text2>
                                    <Text3>Valid till: 10/10/2021</Text3>
                                </TextCont>
                            </Row>
                        </PromoCont>
                    )
                })}
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
    width: 75%;
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
    overflow-x: auto;
    white-space: nowrap;
`;

const PromoCont = styled.div`
    width: 70%;
    // border: 1px solid ${COLORS.green};
    box-shadow: 0px 10px 16px rgba(20, 37, 63, 0.06);
    border-radius: 12px;
    padding: 10px;
    margin: 10px 10px 10px 0;
    cursor: pointer;
`;

const DiscountCont = styled.div`
    background-color: ${COLORS.searchBar};
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
    margin-left: 5px;
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