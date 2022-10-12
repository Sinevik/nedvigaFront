import styled from 'styled-components';
import {default as But} from '../../../components/button/Button';
import React from 'react';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const Content = styled.div`
    width: ${({width}) => width};
    padding: 20px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    @media (max-width: 1024px) {
      padding: 20px 0px 0px 0px;
    } 
`;


export const Section = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 0px 16px 0px;
`;


export const Wrapper = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    display: flex;
    flex-direction: ${({direction}) => direction || 'column'};
    justify-content:  ${({justify}) => justify || 'center'};
    align-items: ${({align}) => align || 'center'};
    padding: ${({padding}) => padding || '0px'}
`;


export const Title = styled.div`
    margin: 0px;
    padding: 0px 0px 5px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #9595B1;
`;


export const Button = ({
  fieldsCheckForDisabled,
}) => {
  return (
    <But
      value="continue"
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
      reducer="createFirm"
      hook="nextPageRedux"
      fieldsCheckForDisabled={fieldsCheckForDisabled}
    />
  );
};

