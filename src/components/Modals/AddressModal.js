import React from "react";
import styled from "styled-components";

import { GiCancel } from "react-icons/gi";
import COLORS from "../../styles/colors";

const AddressModal = ({ onClick, positionStyle , addBtn}) => {
    return (
        <Container style={positionStyle}>
            <GiCancel onClick={onClick} style={cancelBTN} />
            <Title>Add item</Title>
            <ThinBorder></ThinBorder>
        </Container>
    )
}

const Container = styled.div`
    width: 70%;
    border-radius: 25px;
    background-color: ${COLORS.white};
    position: relative;
    padding: 15px 0;
`;

const cancelBTN = {
    position: 'absolute',
    color: COLORS.pageTitle,
    right: '25px',
    top: '20px'
};

// const Row = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// `;

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

export default AddressModal;