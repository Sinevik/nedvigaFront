import React from 'react';

const Open = () => (
  <svg width="100%" height="100%" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M1.41421 0C0.523309 0 0.077142 1.07714 0.707107 1.70711L3.29289 4.29289C3.68342 4.68342 4.31658 4.68342 4.70711 4.29289L7.2929 1.70711C7.92286 1.07714 7.47669 0 6.58579 0H1.41421Z"
      fill="#83949C"/>
  </svg>
);

const Close = () => (
  <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.8002 1.20001L1.2002 10.8" stroke="#383842" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
    <path d="M1.2002 1.20001L10.8002 10.8" stroke="#383842" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>

);

const Cities = () => (
  <svg width="100%" height="100%" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 5.5L8 8.5L11 5.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export const Icon = (
    {
      name,
    },
) => {
  let result;
  switch (name) {
    case 'open':
      result = (
        <Open/>
      );
      break;
    case 'close':
      result = (
        <Close/>
      );
      break;
    case 'cities':
      result = (
        <Cities/>
      );
      break;
    default:
      result = null;
  }
  return result;
};
