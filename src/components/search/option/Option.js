import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 40px;
  padding: 10px 0px 10px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 0px 0px 16px;
  background: #FFFFFF;
  &:hover {
    background: #ebebf1;
  }
`;

const Title = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #000000;
  &:hover {
    color: #3B8AE5;
  }
`;


const Option = (
    {
      handlerClick,
      value,
      titleValue,
      height,
    },
) => (
  <Container
    height={height}
    onClick={() => handlerClick(value)}
    onKeyPress={() => handlerClick(value)}
  >
    <Title>
      {titleValue}
    </Title>
  </Container>
);

export default Option;
