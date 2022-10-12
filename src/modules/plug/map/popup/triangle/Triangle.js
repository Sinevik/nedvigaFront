import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  bottom: -30px;
  left: ${({left}) => left};
  border: 27px solid transparent;
  border-bottom: 0;
  border-top: 30px solid #FFFFFF;
`;


const Triangle = ({left = '10%'}) => {
  return (
    <Container left={left}/>
  );
};

export default Triangle;
