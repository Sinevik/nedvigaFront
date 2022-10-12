import React from 'react';

const Checked = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
      fill="#CCE1F9"/>
    <path d="M5 12L10 17L20 7" stroke="#1C7F62" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NotChecked = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#CCE1F9"/>
  </svg>
);


export const Icon = (
    {
      name,
    },
) => {
  let result;
  switch (name) {
    case 'checked':
      result = (
        <Checked/>
      );
      break;
    case 'not-checked':
      result = (
        <NotChecked/>
      );
      break;
    default:
      result = null;
  }
  return result;
};
