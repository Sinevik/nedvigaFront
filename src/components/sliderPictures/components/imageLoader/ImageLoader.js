import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {urlProcessing} from '../../../../common/image';

const Container = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const WrapperImage = styled.img`
    max-width: 100%;
    max-height: 100%;
`;


const ImageLoader = (
    {
      uri,
      width,
      heightSlider,
    },
) => (
  <Container width={width} height={heightSlider}>
    <WrapperImage
      src={urlProcessing(uri, 40)}
    />
  </Container>
);


export default ImageLoader;

ImageLoader.propTypes = {
  width: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  heightSlider: PropTypes.string.isRequired,
};
