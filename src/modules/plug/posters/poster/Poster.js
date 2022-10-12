import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const Container = styled.div`
    width: 20%;
    @media (max-width: 1500px) {
      width: 25%;
    }
    @media (max-width: 1200px) {
      width: 33.33%;
    }
    @media (max-width: 800px) {
      width: 50%;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
    box-sizing: border-box;
    padding: 0px 16px 16px 0px;
`;

const Image = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #EBEDF1;
    border-radius: 16px;
    background:  ${({img}) => img ? `url(${img}) no-repeat` : 'white'};
    background-size: cover;
    @media (max-width: 1024px) {
      border-radius: 5px;
    }
`;

const Content = styled.div`
    padding: 12px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      transition: 1s;
      transform: scale(1.1);
    }
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
`;

const Price = styled.p`
    padding: 0px 4px 0px 0px;
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 24px;
    letter-spacing: 0.015em;
    color: ${({color}) => color};
`;

const WrapperImage = styled.div`
    width: 100%;
    height: 120px;
`;

const SectionPrice = styled.div`
    width: 100%;
    flex-direction: row;
    display: flex;
    padding: 8px 0px 4px 0px;
`;

const SectionCount = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const ItemCount = styled.div`
    width: ${({width}) => width};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    padding: ${({padding}) => padding || '0px'};
`;

const SectionAddress = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Number = styled.p`
    padding: 0px;
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
`;

const City = styled.p`
    padding: 0px;
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #000000;
`;

const Address = styled.p`
    padding: 0px;
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.01em;
    color: #1E8161;
`;

const Span = styled.span`
    padding: ${({padding}) => padding || '0px 15px 0px 0px'};
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: #1E8161;
`;

const getFullAddress = (value, cut) => {
  const count = cut || 24;
  let result = value;
  if (result && result.length > count) {
    result = result.substr(0, count);
    result += '...';
  }

  return result;
};


const Poster = (
    {
      item,
      price,
      area,
      floor,
      countFloors,
      countRooms,
      fullAddress,
      city,
      img,
    },
) => {
  const history = useHistory();
  return (
    <Container>
      <Content onClick={() => {
        history.push(`/poster/${item.type}/${item._id}`);
      }}>
        <Main>
          <WrapperImage>
            <Image img={img}/>
          </WrapperImage>
          <SectionPrice>
            <Price color="#000000">
              {`${price.toLocaleString('ru')}`}
            </Price>
            <Price color="#1E8161"> руб.</Price>
          </SectionPrice>
          <SectionCount>
            <ItemCount width="30%">
              <Number>
                {area}
                {' '}
                <Span>
                  M
                  <sup>2</sup>
                </Span>
              </Number>
            </ItemCount>
            <ItemCount width="42%">
              <Number>
                {floor}
                /
                {countFloors}
                {' '}
                <Span>этаж</Span>
              </Number>
            </ItemCount>
            <ItemCount width="28%">
              <Number>
                {countRooms}
                <Span padding="0px">-комнат</Span>
              </Number>
            </ItemCount>
          </SectionCount>
          <SectionAddress>
            <City>
              {city}
            </City>
            <Address>
              {getFullAddress(fullAddress, 30)}
            </Address>
          </SectionAddress>
        </Main>
      </Content>
    </Container>
  );
};

export default Poster;
