import React from 'react';

const Expand = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
      fill="#8d8d8d"/>
    <path d="M7 11L7 7.00001L11 7.00001" stroke="#F9F9FB" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
    <path d="M7.3999 7.40011L10.5999 10.6001" stroke="#F9F9FB" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
    <path d="M17 13L17 17L13 17" stroke="#F9F9FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.6001 16.5999L13.4001 13.3999" stroke="#F9F9FB" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>


);

const Back = () => (
  <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M40 32C40 36.4183 36.4183 40 32 40L8 40C3.58172 40 3.18248e-07 36.4183 7.10827e-07 32L2.84331e-06 7.99999C3.23589e-06 3.58171 3.58173 -6.99848e-06 8 -6.61223e-06L32 -4.51408e-06C36.4183 -4.12782e-06 40 3.58172 40 8L40 32Z"
      fill="#8d8d8d"/>
    <path d="M22.5 13.5L16.5 19.5L22.5 25.5" stroke="#F9F9FB" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>
);

const RollUp = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
      fill="#F5FAFF"/>
    <path d="M10 6L10 9.99999L6.00001 9.99999" stroke="#383842" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
    <path d="M9.59994 9.59997L6.39995 6.39998" stroke="#383842" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
    <path d="M14 18L14 14L18 14" stroke="#383842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.4001 14.4001L17.6 17.6" stroke="#383842" strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"/>
  </svg>
);


export const Icon = (
    {
      name,
    },
) => {
  let result;
  switch (name) {
    case 'expand':
      result = (
        <Expand/>
      );
      break;
    case 'back':
      result = (
        <Back/>
      );
      break;
    case 'rollup':
      result = (
        <RollUp/>
      );
      break;
    default:
      result = null;
  }
  return result;
};
