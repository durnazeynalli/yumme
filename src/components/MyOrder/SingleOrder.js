import React from 'react';
import styled from 'styled-components';
import COLORS from '../../styles/colors';

const SingleOrder = ({ e, state, details, rate }) => {

    const statusColor = (e) => {
        if (e.status === "Cooking") {
            return {color: COLORS.orange}
        } else if (e.status === "Pending") {
            return {color: COLORS.pendingColor}
        } else if (e.status === "Completed") {
            return {color: COLORS.completedColor}
        } else if (e.status === "Cancelled") {
            return {color: COLORS.canceledColor}
        } else {
            return {color: COLORS.blue}
        }
    }

  return (
    <OrderContainer key={e.id}>
        <Row>
            <OrderNumber>{e.orderNUmber}</OrderNumber>
            <Status
                style={statusColor(e)}
            >{e.status}</Status>
        </Row>
        <ItemDetails>
            <Row>
                <Image src={e.image} alt="image" />
                <DetailsCont>
                    <Name>{e.restaurantName}</Name>
                    <Text>{e.address}</Text>
                    <Row>
                        <TextRow>
                            <Price>{e.price}</Price>
                            <Text>- {e.itemNumber}</Text>
                        </TextRow>
                        <Text>{e.dateAndTime}</Text>
                    </Row>
                    {state === "ongoing" ? 
                        <Button 
                            onClick={details}
                            style={state === "ongoing" ? {position: 'absolute'} : {position: 'none'} }
                        >View details</Button>
                        :
                        <ButtonRow>
                            <Button 
                                onClick={rate}
                                style={{backgroundColor: COLORS.white, color: COLORS.orange, marginRight: '7px', padding: '8px 16px'}} 
                            >Rate</Button>
                            <Button>Reorder</Button>
                        </ButtonRow>
                    }
                </DetailsCont>
            </Row>
        </ItemDetails>
    </OrderContainer>
  )
}

const OrderContainer = styled.div`
    border 1px solid ${COLORS.border};
    border-radius: 16px;
    padding: 15px 30px;
    margin: 15px 0;
    width: 48%;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const OrderNumber = styled.p`
    margin: -1px 0;
    padding: 5px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: ${COLORS.lightGreen};
`;

const Status = styled.p`
    margin: -1px 0;
    padding: 5px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
`;

const ItemDetails = styled.div`
    margin: 5px 0;
`;

const Image = styled.img`
    width: 105px;
    height: 105px;
    border-radius: 6px;
`;

const DetailsCont = styled.div`
    width: 75%;
    height: 105px;
    position: relative;
`;

const Name = styled.h6`
    margin: -1px 0;
    padding-bottom: 5px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: ${COLORS.textColor};
`;

const Text = styled.p`
    color: ${COLORS.grayTextColor};
    font-weight: 400;
    font-size: 12px;
    margin: -1px 0;
    padding: 5px 0;
`;

const TextRow = styled.div`
    display: flex;
    align-items: center;
`;

const Price = styled.h6`
    margin: -1px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    padding: 5px 3px 5px 0;
    color: ${COLORS.orange};
`;

const Button = styled.button`
    border: 1px solid ${COLORS.orange};
    background-color: ${COLORS.orange};
    color: ${COLORS.white};
    border-radius: 6px;
    font-weight: 500;
    font-size: 12px;
    padding: 8px 16px;
    bottom: 0;
    right: 0;
`;

const ButtonRow = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;
`;

export default SingleOrder