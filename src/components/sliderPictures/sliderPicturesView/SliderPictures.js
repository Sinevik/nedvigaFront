import React, {useMemo, useState} from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../style.css';
import Switcher from '../components/switcher/Switcher';
import SwitchFullScreen from '../components/switchFullScreen/SwitchFullScreen';
import ImageLoader from '../components/imageLoader/ImageLoader';
import ItemImageLower from '../components/itemImageLower/ItemImageLower';
import DotLower from '../components/dotLower/DotLower';


const Container = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({background}) => background || 'white'};
    position: relative;
`;

const Content = styled.div`
    width: ${({width}) => width};
    display: flex;
    height: 90%;
    flex-direction: column;
    justify-content: center;
`;

const WrapperLower = styled.div`
    width: ${({width}) => width};
`;

const WrapperItemLower = styled.div`
    width: 100px;
    height: ${({height}) => height};
    border-radius: 4px;
`;

const Footer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: ${({advanced}) => (advanced ? 'flex-start' : 'center')}
`;

const WrapperItem = styled.div`
    width: 100%;
    height: ${({height}) => height};
`;


const SliderPictures = (
    {
      selectNumberSlider,
      nextSlider,
      prevSlider,
      switchSliderSize,
      handlerSwipe,
      autoNext,
      background,
      speed,
      /* ------ */
      proportions,
      disabledLower,
      advanced,
      arrayUri,
      width,
      height,
      fullScreen,
      selectedNumber,
      lowerScroll,
      slider,
    },
) => {
  const [xDown, setXDown] = useState(null);
  const [yDown, setYDown] = useState(null);

  const getTouches = (evt) => evt.touches;

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    setXDown(firstTouch.clientX);
    setYDown(firstTouch.clientY);
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/* most significant */
      document.body.classList.add('prevent-scroll');
    }
    /* reset values */
    setXDown(null);
    setYDown(null);
  }


  /* ------- */
  const num = proportions === 20 ? 80 : 90;
  const r = /\d+/;
  const count = advanced ? 10 : 2;
  const heightSlider = `${parseInt(height.match(r)[0], 10) * num / 100}${height.match(/\D/g).join('')}`;
  const widthLower = arrayUri.length <= 10 ?
    `${parseInt(width.match(r)[0], 12) * count / 100 * arrayUri.length}${width.match(/\D/g).join('')}` :
    '100%';
  const widthLowerFullScreen = `${arrayUri.length * 80}px`;
  const content = useMemo(() => (
    arrayUri.map((uri, index) => (
      <React.Fragment key={index}>
        {typeof uri === 'string' ? (
          <ImageLoader
            width="100%"
            heightSlider={heightSlider}
            uri={uri}
          />
        ) : (
          <WrapperItem height={heightSlider}>
            {uri}
          </WrapperItem>
        )}
      </React.Fragment>

    ))
  ), []);
  const settings = {
    infinite: true,
    speed: speed || 200,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current) => autoNext(current),
  };
  /* ------ */
  const contentLower = useMemo(() => (
    arrayUri.map((item, index) => (
      <WrapperItemLower
        height={`${parseInt(height.match(r)[0], 10) * proportions / 100}${height.match(/\D/g).join('')}`}
        key={index}
      >
        {advanced ? (
          <ItemImageLower
            numberSlider={index}
            selectedNumber={selectedNumber}
            selectNumberSlider={selectNumberSlider}
            uri={item}
          />
        ) : (
          <DotLower
            numberSlider={index}
            selectedNumber={selectedNumber}
            selectNumberSlider={selectNumberSlider}
            uri={item}
          />
        )}
      </WrapperItemLower>
    ))
  ), [arrayUri, selectedNumber]);
  const slidesToShow = arrayUri.length <= 10 ? arrayUri.length : 10;
  const settingsLower = {
    arrows: false,
    slidesToShow,
    speed: 500,
    draggable: false,
  };
  return (
    <Container
      width={width}
      height={height}
      background={background}
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchMove(e)}
      onTouchEnd={() => {
        setTimeout(() => {
          document.body.classList.remove('prevent-scroll');
        }, 50);
      }}
    >
      <Content width={width}>
        {!disabledLower && arrayUri.length > 1 ? (
          <React.Fragment>
            <Switcher
              height={heightSlider}
              handlerClick={nextSlider}
              value="Next"
              right
            />
            <Switcher
              height={heightSlider}
              handlerClick={prevSlider}
              value="Prev"
              left
            />
          </React.Fragment>
        ) : null}
        <Slider
          ref={slider}
          autoplay={!advanced}
          {...settings}
          onSwipe={(e) => handlerSwipe(e)}
        >
          {content}
        </Slider>
      </Content>
      {advanced ? (
        <SwitchFullScreen
          fullScreen={fullScreen}
          switchSliderSize={switchSliderSize}
        />
      ) : null}
      {!disabledLower ? (
        <Footer advanced={advanced}>
          <WrapperLower
            width={fullScreen ? widthLowerFullScreen : widthLower}
            height={`${parseInt(height.match(r)[0], 20) * proportions / 100}${height.match(/\D/g).join('')}`}
          >
            <Slider
              {...settingsLower}
              ref={lowerScroll}
            >
              {contentLower}
            </Slider>
          </WrapperLower>
        </Footer>
      ) : null}
    </Container>
  );
};

export default SliderPictures;


SliderPictures.propTypes = {
  arrayUri: PropTypes.arrayOf(PropTypes.any).isRequired,
  advanced: PropTypes.bool,
  disabledLower: PropTypes.bool,
  background: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  proportions: PropTypes.number.isRequired,
  selectedNumber: PropTypes.number.isRequired,
  handlerSwipe: PropTypes.func.isRequired,
  autoNext: PropTypes.func.isRequired,
  speed: PropTypes.number,
  selectNumberSlider: PropTypes.func.isRequired,
  switchSliderSize: PropTypes.func.isRequired,
  nextSlider: PropTypes.func.isRequired,
  prevSlider: PropTypes.func.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  lowerScroll: PropTypes.objectOf(PropTypes.any).isRequired,
  slider: PropTypes.objectOf(PropTypes.any).isRequired,
};

SliderPictures.defaultProps = {
  advanced: undefined,
  disabledLower: undefined,
  background: undefined,
  speed: undefined,
};
