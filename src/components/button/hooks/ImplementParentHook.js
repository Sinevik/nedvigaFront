import {useState} from 'react';

export const ImplementParentHook = ({parentFunction}) => {
  const [category, setCategory] = useState(null);
  const chooseCategory = (value) => {
    setCategory(value);
  };
  const handlerClick = (value) => parentFunction(value);
  return {
    chooseCategory,
    handlerClick,
    category,
  };
};
