import React from 'react';
import styled from 'styled-components';
import mapFirst from '../icon/mapFirst.svg';
import mapSecond from '../icon/mapSecond.svg';
import marketFirst from '../icon/marketFirst.svg';
import marketSecond from '../icon/marketSecond.svg';

const WrapperSvg = styled.img`
    width: 100%;
    height: 100%;
`;

const WrapperPng = styled.div`
    width: 100%;
    height: 100%;
    background:  url(${({image}) => image}) no-repeat;
    background-size: cover;
`;


export const Icon = (
    {
      name,
    },
) => {
  let result;
  switch (name) {
    case 'mapFirst':
      result = (
        <WrapperPng image={mapFirst}/>
      );
      break;
    case 'mapSecond':
      result = (
        <WrapperPng image={mapSecond}/>
      );
      break;
    case 'marketFirst':
      result = (
        <WrapperSvg src={marketFirst}/>
      );
      break;
    case 'marketSecond':
      result = (
        <WrapperSvg src={marketSecond}/>
      );
      break;
    default:
      result = null;
  }
  return result;
};
