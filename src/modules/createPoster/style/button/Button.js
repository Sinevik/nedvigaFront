import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import {default as But} from '../../../../components/button/Button';

const WrapperButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0px 0px 20px 0px;
`;

const WrapperLoader = styled.div``;

const Stub = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    opacity: 0.5;
    justify-content: center;
    align-items: center;
    position: absolute;
`;


const Button = (
    {
      value,
      sideEffects,
      parentFunction,
      fieldsCheckForDisabled,
    },
) => {
  return (
    <WrapperButton>
      {sideEffects ? (
        <Stub>
          <WrapperLoader>
            <Loader
              type="Oval"
              color="#1C7F62"
              height={40}
              width={40}
            />
          </WrapperLoader>
        </Stub>
      ) : null}
      <But
        value={value}
        width="160px"
        height="48px"
        borderRadius="4px"
        fontSize="15px"
        backgroundColor="#1C7F62"
        cursor="pointer"
        onFocusColor="#43B949"
        fontColor="#F9F9FB"
        onFocusFontColor="#F9F9FB"
        boxShadow="inset 0px 0px 8px rgba(0, 0, 0, 0.04)"
        reducer="auth"
        hook="parent"
        parentFunction={() => parentFunction()}
        fieldsCheckForDisabled={fieldsCheckForDisabled}
      />
    </WrapperButton>
  );
};

export default Button;
