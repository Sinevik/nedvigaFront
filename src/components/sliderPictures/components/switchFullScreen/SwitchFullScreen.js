import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../../svg/map';


const WrapperImage = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    cursor: pointer;
    z-index: 1;
    top: 4px;
    right: 4px;
    outline: none;
`;

const SwitchFullScreen = (
    {
      switchSliderSize,
      fullScreen,
    },
) => (
  <WrapperImage onClick={switchSliderSize}>
    <Icon name={fullScreen ? 'back' : 'expand'}/>
  </WrapperImage>
);

export default SwitchFullScreen;
