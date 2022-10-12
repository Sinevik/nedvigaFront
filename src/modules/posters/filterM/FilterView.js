import React, {useEffect, useRef, useState} from 'react';
import {getBrowser} from '../../../common/functions';
import styled from 'styled-components';
import {Icon} from '../../../svg/components';
import FilterHook from './FilterHook';
import Flat from './flat/Flat';
import House from './house/House';
import Land from './land/Land';
import Shed from './shed/Shed';
import Commercial from './commercial/Commercial';
import Room from './room/Room';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
    width: 100vw;
    height: ${({height}) => height}px;
    overflow-y: hidden;
    position: fixed;
    left: ${({left}) => left};
    top: 0;
    background: white;
    z-index: 5;
    transition: left 100ms ease;
`;

const Header = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const HeaderContent = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


const Paragraph = styled.div`
    margin: 0px;
    padding: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #63737A;
`;


const WrapperImage = styled.div`
    width: 20px;
    height: 20px;
`;


const getContent = ({state, setOpenKeyboard}) => {
  let result;
  switch (state.kind) {
    case 'flat':
      result = (
        <Flat
          state={state}
        />
      );
      break;
    case 'house':
      result = (
        <House
          state={state}
        />
      );
      break;
    case 'dacha':
      result = (
        <House
          state={state}
        />
      );
      break;
    case 'land':
      result = (
        <Land state={state}/>
      );
      break;
    case 'shed':
      result = (
        <Shed
          state={state}
        />
      );
      break;
    case 'room':
      result = (
        <Room state={state}/>
      );
      break;
    case 'commercial':
      result = (
        <Commercial
          state={state}
          setOpenKeyboard={setOpenKeyboard}
        />
      );
      break;
    default:
      result = null;
  }
  return result;
};


const FilterView = ({open, closeFilter}) => {
  const {t} = useTranslation();
  const {state} = FilterHook();
  const [left, setLeft] = useState('-100%');
  const [scrollArea, setScrollArea] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);
  const scrollRef = useRef(null);

  const handlerResize = () => {
    setHeight(window.innerHeight);
  };

  const handlerScroll = () => {
    if (getBrowser() === 'Safari') {
      setTimeout(() => {
        window.scrollTo({
          top: 200,
          behavior: 'auto',
        });
      }, 0);
    };
  };

  useEffect(() => {
    if (open) {
      window.visualViewport.addEventListener('resize', handlerScroll);
    } else {
      window.visualViewport.removeEventListener('resize', handlerScroll);
    }
    return () => {
      window.visualViewport.removeEventListener('resize', handlerScroll);
    };
  }, [open]);

  useEffect(() => {
    const element = document.getElementById('filter');
    element.addEventListener('touchstart', handleTouchStart, false);
    element.addEventListener('touchmove', handleTouchMove, false);

    let xDown = null;
    let yDown = null;

    function getTouches(evt) {
      return evt.touches || // browser API
        evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
      if ( ! xDown || ! yDown ) {
        return;
      }

      const xUp = evt.touches[0].clientX;
      const yUp = evt.touches[0].clientY;

      const xDiff = xDown - xUp;
      const yDiff = yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/* most significant*/
        if ( xDiff > 0 ) {
          console.log(closeFilter);
          closeFilter(false);
          /* right swipe */
        } else {
          /* left swipe */
        }
      } else {
        if ( yDiff > 0 ) {
          /* down swipe */
        } else {
          /* up swipe */
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setScrollArea(true);
      setLeft('0');
    } else {
      setLeft('-100%');
      setScrollArea(false);
    }
  }, [open]);

  useEffect(() => {
    window.addEventListener('resize', handlerResize);

    return () => {
      window.removeEventListener('resize', handlerResize);
    };
  }, []);

  return (
    <Container
      id="filter"
      height={height}
      left={left}
    >
      <Header onClick={closeFilter}>
        <HeaderContent>
          <Paragraph>
            {t('filter')}
          </Paragraph>
          <WrapperImage>
            <Icon
              name="close"
            />
          </WrapperImage>
        </HeaderContent>
      </Header>
      {scrollArea ? (
        <div
          ref={scrollRef}
          style={{
            width: '98%',
            height: '85%',
            overflowY: 'scroll',
          }}
        >
          <div>
            {getContent({state})}
          </div>
        </div>
      ) : null}
    </Container>
  );
};

export default FilterView;
