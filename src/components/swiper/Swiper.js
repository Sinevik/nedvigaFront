// Import Swiper React components
import React from 'react';
import {Autoplay} from 'swiper';
import PropTypes from 'prop-types';
import {Swiper as Sw, SwiperSlide} from 'swiper/react';
import styled from 'styled-components';
import ImageLoader from './imageLoader/ImageLoader';


import 'swiper/css';
import 'swiper/css/autoplay';


const Wrapper = styled.div`
  width: ${({width}) => width};
`;


const Container = styled.div`
  height: ${({height}) => height};
  border: 1px solid green;
`;

const WrapperItem = styled.div`
  width: 100%;
  height: ${({height}) => height};
`;


const getContent = (
    {
      arrayUri,
      height,
    },
) => {
  const content = arrayUri.map((uri, index) => (
    <React.Fragment key={index}>
      <SwiperSlide key={index}>
        {typeof uri === 'string' ? (
          <ImageLoader
            width="100%"
            heightSlider={height}
            uri={uri}
          />
        ) : (
          <WrapperItem height={height}>
            {uri}
          </WrapperItem>
        )}
      </SwiperSlide>

    </React.Fragment>
  ));
  return content;
};

const Swiper = (
    {
      width,
      height,
      arrayUri,
    },
) => {
  const content = getContent({
    arrayUri,
    height,
  });
  return (
    <Wrapper width={width}>
      <Sw
        modules={[Autoplay]}
        spaceBetween={2}
        loop={arrayUri.length > 1}
        autoplay={arrayUri.length > 1 ? {delay: 3000} : false}
        slidesPerView={1}
      >
        {content}
      </Sw>
    </Wrapper>
  );
};

export default Swiper;

Swiper.propTypes = {
  arrayUri: PropTypes.arrayOf(PropTypes.any).isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};
