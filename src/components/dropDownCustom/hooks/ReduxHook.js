import {useState} from 'react';


export const ReduxHook = ({
  setValueField,
  reduxField,
}) => {
  const [trigger, setTrigger] = useState(false);
  const handlerChange = (value, event) => {
    event.stopPropagation();
    const reduxValue = {
      field: reduxField,
      value,
    };
    setValueField(reduxValue);
    setTrigger(false);
  };

  const handlerClick = (value) => {
    setTrigger(value);
  };

  return {
    handlerChange,
    handlerClick,
    trigger,
  };
};
