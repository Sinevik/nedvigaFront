import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    padding: 40px 0px 40px 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 80vh;
`;

const Paragraph = styled.div`
    margin: 0px;
    padding: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: #1C7F62;
`;


const Loading = () => (
  <Container>
    <Paragraph>
      Loading
    </Paragraph>
  </Container>
);

export default Loading;
