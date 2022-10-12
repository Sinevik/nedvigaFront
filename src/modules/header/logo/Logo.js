import React from 'react';
import styled from 'styled-components';
import logo from '../../../icon/logo.svg';
import logoText from '../../../icon/logoText.svg';

const WrapperLogo = styled.div`
    height: 100%;
    display: flex;
    cursor: pointer;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${({small}) => (small ? '0px 0px 0px 16px' : '0px 0px 0px 32px')};
`;

const WrapperSvg = styled.img`
    width: 36px;
    height: 36px;
`;

const WrapperLogoText = styled.img`
    width: 77px;
    height: 20px;
    padding: 0px 0px 0px 6px;
`;


const Logo = (
    {
      goToHome,
      small,
    },
) => {
  return (
    <WrapperLogo small={small} onClick={() => goToHome()}>
      <WrapperSvg src={logo}/>
      <WrapperLogoText src={logoText}/>
    </WrapperLogo>
  );
};

export default Logo;
