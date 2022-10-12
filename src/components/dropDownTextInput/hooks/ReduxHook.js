import {useEffect, useRef, useState} from 'react';

export const ReduxHook = ({
  setValueField,
  reduxField,
}) => {
  const [trigger, setTrigger] = useState(false);
  const inputEl = useRef(null);
  const handlerChange = (value, event) => {
    event.stopPropagation();
    const reduxValue = {
      field: reduxField,
      value,
    };
    setValueField(reduxValue);
    setTrigger(false);
  };

  const handlerChangeInput = (e) => {
    setTrigger(false);
    const value = e.target.value;
    if (/^\d+$/.test(value) || value === '') {
      const reduxValue = {
        field: reduxField,
        value: value === '' ? null : value.slice(0, 10),
      };
      setValueField(reduxValue);
    }
  };
  const handlerClick = (value) => {
    setTrigger(value);
  };
  const reset = (event) => {
    event.stopPropagation();
    const reduxValue = {
      field: reduxField,
      value: null,
    };
    setValueField(reduxValue);
    setTrigger(false);
  };

  return {
    handlerChange,
    handlerChangeInput,
    handlerClick,
    reset,
    trigger,
    inputEl,
  };
};
