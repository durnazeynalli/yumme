import React from 'react';
import styled from "styled-components";

import SingleItem from '../SingleItem';

import IMG from '../../assets/images';
import COLORS from "../../styles/colors";

const datas = [
  {
      id: 1,
      image: IMG.shop1,
      name: "Fresh Tamagoyaki",
      address: "237 Thornridge Cir. Shiloh, Melbun...s",
      distance: "1.7km",
      time: "10 min",
      star: "5.0"
  },
  {
      id: 2,
      image: IMG.shop2,
      name: "Fresh Tamagoyaki",
      address: "237 Thornridge Cir. Shiloh, Melbun...s",
      distance: "1.7km",
      time: "10 min",
      star: "5.0"
  },
  {
      id: 3,
      image: IMG.shop3,
      name: "Fresh Tamagoyaki",
      address: "237 Thornridge Cir. Shiloh, Melbun...s",
      distance: "1.7km",
      time: "10 min",
      star: "5.0"
  },
  {
      id: 4,
      image: IMG.shop4,
      name: "Fresh Tamagoyaki",
      address: "237 Thornridge Cir. Shiloh, Melbun...s",
      distance: "1.7km",
      time: "10 min",
      star: "5.0"
  }
]

const FavoriteRestaurants = () => {
  return (
    <Container>
      <Title>Favorite Restaurants</Title>
      <ItemContainer>
        {
          datas.map((el) => {
              return (
                  <SingleItem
                      key={el.id}
                      style={{width: '47%', margin: '15px 0'}}
                      image={el.image}
                      imageStyle={{height: '200px'}}
                      name={el.name}
                      address={el.address}
                      distance={el.distance}
                      time={el.time}
                      star={el.star}
                  />
              )
          })
        }
      </ItemContainer>
    </Container>
  )
}

const Container = styled.div`
    height: 100%;
    padding-bottom: 20px;
`;

const Title = styled.h6`
  margin: -1px 0;
  padding-bottom: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: ${COLORS.orange};
`;

const ItemContainer = styled.div`
  // height: 500px;
  // overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.white};
`;

export default FavoriteRestaurants;