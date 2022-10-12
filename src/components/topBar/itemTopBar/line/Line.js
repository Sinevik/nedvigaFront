import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Divider = (
    {
      color,
    },
) => (
  <svg width="100" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="2" rx="1" fill={color}/>
  </svg>
);


const Container = styled.div``;


const Line = (
    {
      color = 'red',
    },
) => (
  <Container>
    <Divider color={color}/>
  </Container>
);

Line.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Line;
