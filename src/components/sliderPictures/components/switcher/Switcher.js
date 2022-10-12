import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Left, Right} from '../../../../svg/slider';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: ${({height}) => height};
    width: 5%;
    top: 0;
    cursor: pointer;
    ${({right}) => {
    let result;
    if (right) {
      result = `right: 0;`;
    } else {
      result = `left: 0;`;
    }
    return result;
  }}
    outline: none;
    z-index: 1;
`;


const Switcher = (
    {
      height,
      handlerClick,
      right,
      left,
    },
) => {
  const [hover, setHover] = useState(false);
  return (
    <Container
      height={height}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role="button"
      type="button"
      right={right}
      left={left}
      onClick={() => handlerClick()}
      onKeyPress={() => handlerClick()}
      tabIndex={0}
    >
      {right ? (
        <Right hover={hover}/>
      ) : <Left hover={hover}/>}
    </Container>
  );
};


export default Switcher;

Switcher.propTypes = {
  right: PropTypes.bool,
  left: PropTypes.bool,
  handlerClick: PropTypes.func.isRequired,
};

Switcher.defaultProps = {
  right: undefined,
  left: undefined,
};
