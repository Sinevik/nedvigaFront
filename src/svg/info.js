import React from 'react';
import styled from 'styled-components';
import tools from '../icon/tools.svg';
import plumbing from '../icon/plumbing.svg';
import work from '../icon/work.svg';

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
    case 'construction-tool':
      result = (
        <WrapperSvg src={tools}/>
      );
      break;
    case 'plumbing':
      result = (
        <WrapperSvg src={plumbing}/>
      );
      break;
    case 'finishing-works':
      result = (
        <WrapperSvg src={work}/>
      );
      break;
    default:
      result = null;
  }
  return result;
};
