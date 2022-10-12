import {useState} from 'react';

export const ReduxHook = ({
  setValueField,
  reduxField,
}) => {
  const [trigger, setTrigger] = useState(false);

  const handlerClick = (value) => {
    if (value !== undefined) {
      setTrigger(value);
    } else {
      setTrigger(!trigger);
    }
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
    handlerClick,
    trigger,
    reset,
  };
};
