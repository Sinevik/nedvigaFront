import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  padding: .7em 0;
  display: flex;
  cursor:pointer;
  flex-direction: row;
  background: #ffffff;
  background: #ffffff;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.75px;
  color: #67768B;
  &:hover ${Container} {
    color: rgb(255, 255, 255);
    background-color: rgb(13, 135, 234);
  }
`;

const Title = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 0px 0px 10px;
  flex-direction: row;
  align-items: center;
`;


const Option = (
    {
      handlerClick,
      value,
      height,
    },
) => (
  <Container
    height={height}
    onClick={(event) => handlerClick(value, event)}
    onKeyPress={() => handlerClick(value)}
  >
    <Title>
      {value}
    </Title>
  </Container>
);

export default Option;

Option.propTypes = {
  handlerClick: PropTypes.func.isRequired,
  height: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
