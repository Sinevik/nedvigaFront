import React from 'react';
import styled from 'styled-components';
import services from '../icon/services.svg';
import equipment from '../icon/equipment.svg';
import decoration from '../icon/decoration.svg';
import construction from '../icon/construction.svg';
import cottage from '../icon/cottage.svg';
import furniture from '../icon/furniture.svg';
import appliances from '../icon/appliances.svg';
import transportation from '../icon/transportation.svg';


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
    case 'services':
      result = (
        <WrapperSvg src={services}/>
      );
      break;
    case 'tools-and-equipment':
      result = (
        <WrapperSvg src={equipment}/>
      );
      break;
    case 'repair-and-finishing':
      result = (
        <WrapperSvg src={decoration}/>
      );
      break;
    case 'everything-for-construction':
      result = (
        <WrapperSvg src={construction}/>
      );
      break;
    case 'everything-for-the-cottage-and-garden':
      result = (
        <WrapperSvg src={cottage}/>
      );
      break;
    case 'furniture':
      result = (
        <WrapperSvg src={furniture}/>
      );
      break;
    case 'home-appliances':
      result = (
        <WrapperSvg src={appliances}/>
      );
      break;
    case 'transportation':
      result = (
        <WrapperSvg src={transportation}/>
      );
      break;
    default:
      result = null;
  }
  return result;
};
