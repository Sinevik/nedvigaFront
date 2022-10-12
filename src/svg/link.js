import React from 'react';
import styled from 'styled-components';
import vk from '../icon/vk.svg';
import facebook from '../icon/facebook.svg';
import telegram from '../icon/telegram.svg';
import viber from '../icon/viber.svg';

const WrapperSvg = styled.img`
    width: 100%;
    height: 100%;
`;


export const Icon = (
    {
      name,
    },
) => {
  let result;
  switch (name) {
    case 'vk':
      result = (
        <WrapperSvg src={vk}/>
      );
      break;
    case 'facebook':
      result = (
        <WrapperSvg src={facebook}/>
      );
      break;
    case 'telegram':
      result = (
        <WrapperSvg src={telegram}/>
      );
      break;
    case 'viber':
      result = (
        <WrapperSvg src={viber}/>
      );
      break;
    default:
      result = null;
  }
  return result;
};
