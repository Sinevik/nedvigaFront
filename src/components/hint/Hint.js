import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: auto;
    position: absolute;
    background: #CCE1F9;
    z-index: 1;
    border-radius: 8px;
    top: ${({top}) => top};
    left: ${({left}) => left};
`;

const Content = styled.div`
    width: auto;
`;

const Paragraph = styled.p`
    white-space: nowrap;
    margin: 0px;
    padding: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: #000000;
`;


const Hint = (
    {
      top,
      left,
      value,
    },
) => (
  <Container top={top} left={left}>
    <Content>
      <Paragraph>
        {value}
      </Paragraph>
    </Content>
  </Container>
);

export default Hint;
