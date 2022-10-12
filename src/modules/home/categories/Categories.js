import React from 'react';
import styled from 'styled-components';
import Item from './item/Item';


const Container = styled.div`
    width: 100%;
    min-height: 120px;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.05);
    display: flex;
     @media (max-width: 1024px) {
      overflow-x: scroll;
      padding: 0px;
    }
    flex-direction: row;
`;


const Categories = (
    {
      goTo,
      goToMarket,
    },
) => (
  <Container>
    <Item
      value="flat"
      handlerClick={goTo}
    />
    <Item
      value="house"
      handlerClick={goTo}
    />
    <Item
      value="dacha"
      handlerClick={goTo}
    />
    <Item
      value="shed"
      handlerClick={goTo}
    />
    <Item
      value="land"
      handlerClick={goTo}
    />
    <Item
      value="room"
      handlerClick={goTo}
    />
    <Item
      value="commercial"
      handlerClick={goTo}
    />
    <Item
      value="construction-market"
      handlerClick={goToMarket}
    />
  </Container>
);


export default Categories;
