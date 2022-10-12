import React from 'react';
import styled from 'styled-components';

const Svg = () => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 6L6 11L16 1" stroke="#43B949" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Approved = () => (
  <Container>
    <Svg/>
  </Container>
);

export default Approved;
