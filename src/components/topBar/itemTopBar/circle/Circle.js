import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Selected = (
    {
      hollow,
      color,
    },
) => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    {hollow ? (
      <path
        d="M23.5 12.2553C23.5 18.7576 18.3414 24.0106 12 24.0106C5.6586 24.0106 0.5 18.7576 0.5 12.2553C0.5 5.75306 5.6586 0.5 12 0.5C18.3414 0.5 23.5 5.75306 23.5 12.2553Z"
        stroke={color}/>
    ) : (
      <ellipse cx="12" cy="12.2553" rx="12" ry="12.2553" fill={color} fillOpacity="0.32"/>
    )}
  </svg>
);

const Approve = () => (
  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2915_7780)">
      <path d="M2.5 6.25534L5 8.80853L10 3.70215" stroke="white" strokeWidth="1.5" strokeLinecap="round"
        strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_2915_7780">
        <rect width="12" height="12.2553" fill="white" transform="translate(0 0.12793)"/>
      </clipPath>
    </defs>
  </svg>
);


const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


const WrapperContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
`;

const Paragraph = styled.div`
    margin: 0px;
    padding: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.01em;
    color: ${({color}) => color};
`;


const Circle = (
    {
      number,
      hollow,
      color,
      approve,
    },
) => (
  <Content>
    <WrapperContent>
      {approve ? (
        <Approve/>
      ) : (
        <Paragraph color={color}>
          {number}
        </Paragraph>
      )}
    </WrapperContent>
    <Selected color={color} hollow={hollow}/>
  </Content>

);

Circle.propTypes = {
  number: PropTypes.number.isRequired,
  hollow: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  approve: PropTypes.bool.isRequired,
};

export default Circle;
