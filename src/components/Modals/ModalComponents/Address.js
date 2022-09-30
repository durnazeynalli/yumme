import React from "react";
import styled from "styled-components";

import COLORS from "../../../styles/colors";

import { AiFillCaretDown } from "react-icons/ai";

const Address = ({ 
                    streetValue, streetOnChange, streetBorderStyle, streetLabelStyle, 
                    suburbValue, suburbOnChange, suburbBorderStyle, suburbLabelStyle, 
                    postCodeValue, postCodeOnChange, postCodeBorderStyle, postCodeLabelStyle 
                }) => {

    return (
        <Container>
                <Text>Address</Text>
            
                <Border style={streetBorderStyle}>
                    <BorderLabel style={streetLabelStyle}>Street</BorderLabel>
                    <TextInput type="text" placeholder="Street" value={streetValue} onChange={streetOnChange}/>
                </Border>
                <Border style={suburbBorderStyle}>
                    <Row>
                        <Cont>
                            <BorderLabel style={suburbLabelStyle}>Suburb</BorderLabel>
                            <TextInput type="text" placeholder="Suburb" value={suburbValue} onChange={suburbOnChange} />
                        </Cont>
                        <AiFillCaretDown style={{color: COLORS.pageTitle}} />
                    </Row>
                </Border>
                <Border style={postCodeBorderStyle}>
                    <BorderLabel style={postCodeLabelStyle}>Postcode</BorderLabel>
                    <TextInput type="text" placeholder="Postcode" value={postCodeValue} onChange={postCodeOnChange} />
                </Border>
        </Container>
    )
}

const Container = styled.form`

`;

const Cont = styled.div`

`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Text = styled.p`
    color: ${COLORS.textColor};
    margin: 20px 0;
    font-weight: 500;
    font-size: 14px;
`;

const Border = styled.div`
    border: 1px solid ${COLORS.border};
    border-radius: 12px;
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

export default Address;