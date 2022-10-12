import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';


const Container = styled.div`
  padding: 0px 8px 8px 0px;
  cursor: pointer;
`;

const Content = styled.div`
  border-radius: 4px;
  border: ${({color}) => (color === '#1C7F62' ? '1px solid #1C7F62' : '1px solid #EFEFF5')};
  background: ${({color}) => color};
  padding: 4px 12px 4px 12px;
`;

const Paragraph = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${({color}) => (color === '#1C7F62' ? '#FFFFFF' : '#B7B7CD')};
  margin: 0px;
`;

const Item = (
    {
      value,
      color,
      handlerClick,
    },
) => {
  const {t} = useTranslation();
  return (
    <Container
      onClick={() => handlerClick(value)}
    >
      <Content
        color={color}
      >
        <Paragraph
          color={color}
        >
          {t(value)}
        </Paragraph>
      </Content>
    </Container>
  );
};


export default Item;
