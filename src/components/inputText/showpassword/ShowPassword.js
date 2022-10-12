import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Icon} from '../../../svg/components';


const Container = styled.div`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: row;
    align-items: center;
`;

const WrapperImage = styled.div`
    width: 24px;
    height: 24px;
`;


const ShowPassword = (
    {
      showPassword,
      handlerClick,
    },
) => {
  const [hover, setHover] = useState(false);
  return (
    <Container
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={(e) => {
        e.stopPropagation();
        handlerClick(!showPassword);
      }}
    >
      <WrapperImage>
        <Icon name={showPassword ? 'password-view' : 'password'}/>
      </WrapperImage>
    </Container>
  );
};

export default ShowPassword;

ShowPassword.propTypes = {
  showPassword: PropTypes.bool.isRequired,
  handlerClick: PropTypes.func.isRequired,
};
