import React from 'react';
import PropTypes from 'prop-types';
import SliderPicturesHook from './SliderPicturesHook';
import SliderPictures from './sliderPicturesView/SliderPictures';
import Modal from './components/modal/Modal';


const SliderPicturesMain = (
    {
      arrayUri,
      width,
      height,
      background,
      speed,
      advanced,
      disabledLower,
    },
) => {
  const {
    selectedNumber,
    lowerScroll,
    slider,
    fullScreen,
    handlerSwipe,
    selectNumberSlider,
    switchSliderSize,
    nextSlider,
    prevSlider,
    autoNext,
    setClick,
  } = SliderPicturesHook({
    advanced,
    numberSlider: arrayUri.length,
  });
  return (
    <React.Fragment>
      {fullScreen ? (
        <Modal
          show={fullScreen}
          handlerClose={switchSliderSize}
        >
          <SliderPictures
            advanced
            arrayUri={arrayUri}
            speed={speed}
            lowerScroll={lowerScroll}
            slider={slider}
            width="80vw"
            height="80vh"
            proportions={10}
            fullScreen={fullScreen}
            background={background}
            autoNext={autoNext}
            selectedNumber={selectedNumber}
            selectNumberSlider={selectNumberSlider}
            handlerSwipe={handlerSwipe}
            nextSlider={nextSlider}
            prevSlider={prevSlider}
            switchSliderSize={switchSliderSize}
          />
        </Modal>
      ) : (
        <SliderPictures
          disabledLower={disabledLower}
          advanced={advanced}
          speed={speed}
          background={background}
          arrayUri={arrayUri}
          proportions={10}
          lowerScroll={lowerScroll}
          slider={slider}
          width={width}
          height={height}
          fullScreen={fullScreen}
          selectedNumber={selectedNumber}
          setClick={setClick}
          autoNext={autoNext}
          handlerSwipe={handlerSwipe}
          selectNumberSlider={selectNumberSlider}
          nextSlider={nextSlider}
          prevSlider={prevSlider}
          switchSliderSize={switchSliderSize}
        />
      )}
    </React.Fragment>
  );
};


export default SliderPicturesMain;

SliderPicturesMain.propTypes = {
  arrayUri: PropTypes.arrayOf(PropTypes.any).isRequired,
  advanced: PropTypes.bool,
  background: PropTypes.string,
  disabledLower: PropTypes.bool,
  speed: PropTypes.number,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

SliderPicturesMain.defaultProps = {
  advanced: undefined,
  disabledLower: undefined,
  background: undefined,
  speed: undefined,
};

