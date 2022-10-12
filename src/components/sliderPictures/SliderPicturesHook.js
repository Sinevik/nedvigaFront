/* eslint-disable prefer-const */
import {useEffect, useRef, useState} from 'react';

const SliderPicturesHook = (
    {
      advanced,
      numberSlider,
    },
) => {
  const [selectedNumber, setNumber] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);
  const [click, setClick] = useState(false);
  const lowerScroll = useRef(null);
  const slider = useRef(null);

  useEffect(() => {
    const preventTouch = (e) => {
      console.log(e.target.classList.value);
    };
    window.addEventListener('touchmove', preventTouch, {passive: false});
    return () => {
      window.removeEventListener('touchmove', preventTouch, {
        passive: false,
      });
    };
  }, []);

  const selectNumberSlider = (number) => {
    slider.current.slickGoTo(number);
    if (number > selectedNumber) {
      lowerScroll.current.slickNext();
    } else {
      lowerScroll.current.slickPrev();
    }
  };

  const switchSliderSize = () => {
    setFullScreen(!fullScreen);
    setNumber(0);
  };

  const handlerSwipe = (swipe) => {
    if (swipe === 'left' && advanced) {
      lowerScroll.current.slickNext();
    }
    if (swipe === 'right' && advanced) {
      lowerScroll.current.slickPrev();
    }
  };

  const autoNext = (current) => {
    setNumber(current);
  };

  const nextSlider = () => {
    slider.current.slickNext();
    if (advanced) {
      lowerScroll.current.slickNext();
    }
  };

  const prevSlider = () => {
    slider.current.slickPrev();
    if (advanced) {
      lowerScroll.current.slickPrev();
    }
  };

  return {
    selectedNumber,
    fullScreen,
    lowerScroll,
    slider,
    setClick,
    autoNext,
    selectNumberSlider,
    handlerSwipe,
    nextSlider,
    prevSlider,
    switchSliderSize,
  };
};


export default SliderPicturesHook;
