import React, {useState} from 'react';
import FilterHook from './FilterHook';
import Flat from './flat/Flat';
import House from './house/House';
import Land from './land/Land';
import Shed from './shed/Shed';
import Commercial from './commercial/Commercial';
import Room from './room/Room';
import {onJumpUp} from '../../../common/functions';
import {Container, Line} from './style/style';
import Button from '../../../components/button/Button';
import {useTranslation} from 'react-i18next';

const getContent = (
    {
      state,
      show,
      heightList,
    },
) => {
  let result;
  switch (state.kind) {
    case 'flat':
      result = (
        <Flat
          state={state}
          show={show}
          heightList={heightList}
        />
      );
      break;
    case 'house':
      result = (
        <House
          state={state}
          show={show}
          heightList={heightList}
        />
      );
      break;
    case 'dacha':
      result = (
        <House
          state={state}
          show={show}
          heightList={heightList}
        />
      );
      break;
    case 'shed':
      result = (
        <Shed
          state={state}
          show={show}
          heightList={heightList}
        />
      );
      break;
    case 'commercial':
      result = (
        <Commercial
          state={state}
          show={show}
          heightList={heightList}
        />
      );
      break;
    case 'room':
      result = (
        <Room
          state={state}
          show={show}
          heightList={heightList}
        />
      );
      break;
    case 'land':
      result = (
        <Land
          state={state}
          show={show}
          heightList={heightList}
        />
      );
      break;
    default:
      result = null;
  }
  return result;
};


const getButton = (
    {
      kind,
      switchHeight,
      show,
    },
) => {
  const {t} = useTranslation();
  let result = null;

  if (kind === 'flat' || kind === 'house' || kind === 'dacha' || kind === 'shed') {
    result = (
      <Line justify="center" width="100%">
        <Button
          borderRadius="4px"
          hook="parent"
          value={show ? t('back') : t('still')}
          width="116px"
          height="32px"
          fontSize="15px"
          parentFunction={switchHeight}
          fieldsCheckForDisabled={[true]}
          backgroundColor="#1C7F62"
          cursor="pointer"
          onFocusColor="#43B949"
          fontColor="#F9F9FB"
          onFocusFontColor="#F9F9FB"
          boxShadow="inset 0px 0px 8px rgba(0, 0, 0, 0.04)"
        />
      </Line>
    );
  }

  return result;
};


const FilterView = ({fullScreen}) => {
  const {state} = FilterHook();
  const [height, setHeight] = useState('140px');
  const [show, setShow] = useState(false);
  const heightList = '150px';
  const switchHeight = () => {
    if (height === '140px') {
      setHeight('240px');
      setTimeout(() => {
        setShow(true);
        onJumpUp()(300, 1, 'easeInOutQuint');
      }, 900);
    } else {
      setHeight('140px');
      setTimeout(() => {
        setShow(false);
        onJumpUp()(0, 1, 'easeInOutQuint');
      }, 1);
    }
  };
  return (
    <Container
      height={height}
      fullScreen={fullScreen}
    >
      {getContent({
        state,
        show,
        heightList,
      })}
      {getButton({
        kind: state.kind,
        switchHeight,
        show,
      })}

    </Container>
  );
};

export default FilterView;
