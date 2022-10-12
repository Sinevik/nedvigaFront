import React from 'react';
import styled from 'styled-components';
import Poster from './poster/Poster';
import {useTranslation} from 'react-i18next';


const Container = styled.div`
   width: 100%;
   background: #F5FAFF;
   display: flex;
   flex-direction: column;
   padding: 0px 0px 0px 24px;
   @media (max-width: 800px) {
      padding: 0px 0px 0px 10px;
   }
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const Paragraph = styled.p`
    margin: 0px;
    padding: 20px 0px 16px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
`;


const Posters = ({posters}) => {
  const content = posters.map((item, index) => (
    <Poster
      key={index}
      item={item}
      img={item.photos[0]}
      price={item.price}
      area={900}
      floor={item.floor}
      countRooms={item.countRooms}
      countFloors={item.countFloors}
      trim={50}
      city={item.city}
      description={item.description}
      fullAddress={item.fullAddress}
    />
  ));
  const {t} = useTranslation();
  return (
    <Container>
      <Header>
        <Paragraph>
          {t('posters')}
        </Paragraph>
      </Header>
      <Content>
        {content}
      </Content>
    </Container>

  );
};

export default Posters;
