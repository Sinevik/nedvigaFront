import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Dot} from '../../../../svg/slider';


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    outline: none;
`;

const WrapperDot = styled.div``;


const DotLower = (
    {
      selectNumberSlider,
      /* -------- */
      selectedNumber,
      numberSlider,
    },
) => {
  const active = selectedNumber === numberSlider;

  const [hover, setHover] = useState(false);
  return (
    <Container
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role="button"
      type="button"
      onClick={() => selectNumberSlider(numberSlider)}
      onKeyPress={() => selectNumberSlider(numberSlider)}
      disabled={active}
      tabIndex={0}
    >
      <WrapperDot>
        <Dot active={active} hover={hover}/>
      </WrapperDot>
    </Container>
  );
};


export default DotLower;

DotLower.propTypes = {
  selectedNumber: PropTypes.number.isRequired,
  selectNumberSlider: PropTypes.func.isRequired,
  numberSlider: PropTypes.number.isRequired,
};

DotLower.defaultTypes = {
  selectedNumber: null,
};
