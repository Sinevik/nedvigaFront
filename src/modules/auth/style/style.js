import styled from 'styled-components';
import React from 'react';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0px 15px 0px 15px;
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


export const Title = styled.p`
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

