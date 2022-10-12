import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {urlProcessing} from '../../../../common/image';


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

const Stub = styled.div`
    width: 90%;
    height: 90%;
    border-radius: 4px;
    background-color: rgba(60, 60, 60, 0.5);
    position: absolute;
    outline: none;
    pointer-events: none;
`;

const WrapperImage = styled.img`
    width: 90%;
    height: 90%;
    cursor: pointer;
    display: flex;
    border-radius: 4px;
`;


const ItemImageLower = (
    {
      selectNumberSlider,
      /* -------- */
      uri,
      selectedNumber,
      numberSlider,
    },
) => {
  const disabled = selectedNumber === numberSlider;
  return (
    <Container
      role="button"
      type="button"
      onClick={() => selectNumberSlider(numberSlider)}
      onKeyPress={() => selectNumberSlider(numberSlider)}
      disabled={disabled}
      tabIndex={0}
    >
      {disabled ? (
        <Stub
          type="button"
          role="button"
          draggable={false}
        />
      ) : null}
      <WrapperImage
        src={urlProcessing(uri, 8)}
        draggable={false}
      />
    </Container>
  );
};


export default ItemImageLower;

ItemImageLower.propTypes = {
  uri: PropTypes.string.isRequired,
  selectedNumber: PropTypes.number.isRequired,
  selectNumberSlider: PropTypes.func.isRequired,
  numberSlider: PropTypes.number.isRequired,
};

ItemImageLower.defaultTypes = {
  selectedNumber: null,
};
