import React from 'react';
import styled from 'styled-components';

const Path = styled.path`
    &:hover {
      stroke: red;
    }
`;

export const Left = (
    {
      hover,
    },
) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="28" y="28" width="28" height="28" rx="14" transform="rotate(-180 28 28)"
      fill={hover ? '#43B949' : '#1E8161'}/>
    <path d="M16 8L10 14L16 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LeftMin = (
    {
      hover,
    },
) => (
  <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 13.5L1.5 7.5L7.5 1.5" stroke={hover ? '#000000' : '#9595B1'} strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>
);

export const Right = (
    {
      hover,
    },
) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="28" height="28" rx="14" fill={hover ? '#43B949' : '#1E8161'}/>
    <path d="M12 20L18 14L12 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const RightMin = (
    {
      hover,
    },
) => (
  <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 13.5L7.5 7.5L1.5 1.5" stroke={hover ? '#000000' : '#9595B1'} strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>
);


export const Dot = (
    {
      hover,
      active,
    },
) => {
  let result = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="5.5" stroke="#C9EECB"/>
    </svg>
  );

  if (hover && !active) {
    result = (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="6" r="6" fill="#9DDCA0"/>
      </svg>
    );
  }

  if (active) {
    result = (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6" cy="6" r="6" fill="#1C7F62"/>
      </svg>
    );
  }

  return result;
};
