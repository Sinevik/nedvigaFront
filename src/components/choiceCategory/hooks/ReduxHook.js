import {useState} from 'react';

export const ReduxHook = (
    {
      setValueField,
      reduxFieldValue,
      reduxField,
    },
) => {
  const [category, setCategory] = useState(null);
  const chooseCategory = (value) => {
    setCategory(value);
  };
  const handlerClick = (value) => {
    const newArray = reduxFieldValue.concat();
    newArray.push(value);
    setValueField({
      field: reduxField,
      value: newArray,
    });
  };
  return {
    chooseCategory,
    handlerClick,
    category,
  };
};
