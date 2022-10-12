import React from 'react';
import styled from 'styled-components';
import account from '../icon/account.svg';
import addposters from '../icon/addposters.svg';
import addmarket from '../icon/addmarket.svg';
import settings from '../icon/settings.svg';
import payments from '../icon/payments.svg';
import logout from '../icon/logout.svg';
import profile from '../icon/profile.svg';
import profileactive from '../icon/profileactive.svg';
import downarrow from '../icon/downarrow.svg';
import downarrowactive from '../icon/downarrowactive.svg';

const WrapperSvg = styled.img`
    width: 100%;
    height: 100%;
`;


export const Icon = (
    {
      name,
      active,
    },
) => {
  let result;
  switch (name) {
    case 'account':
      result = (
        <WrapperSvg src={account}/>
      );
      break;
    case 'my-posters':
      result = (
        <WrapperSvg src={addposters}/>
      );
      break;
    case 'my-store':
      result = (
        <WrapperSvg src={addmarket}/>
      );
      break;
    case 'settings':
      result = (
        <WrapperSvg src={settings}/>
      );
      break;
    case 'payments':
      result = (
        <WrapperSvg src={payments}/>
      );
      break;
    case 'logout':
      result = (
        <WrapperSvg src={logout}/>
      );
      break;
    case 'profile':
      result = (
        <WrapperSvg src={active ? profileactive : profile}/>
      );
      break;
    case 'arrow':
      result = (
        <WrapperSvg src={active ? downarrowactive : downarrow}/>
      );
      break;
    default:
      result = null;
  }
  return result;
};
