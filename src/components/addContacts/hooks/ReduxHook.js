import {useState} from 'react';

export const ReduxHook = ({
  numberField,
  setValueField,
  reduxField,
  reduxFieldValue,
}) => {
  const [focus, setFocus] = useState(null);

  const handlerClick = () => {
    if (reduxFieldValue.length < numberField) {
      const newArray = reduxFieldValue.concat();
      newArray.push(
          [
            {value: null, valid: false, warning: null},
            {value: null, valid: false, warning: null},
          ],
      );
      setValueField({
        field: reduxField,
        value: newArray,
      });
    }
  };

  const deleteMethod = (indexDelete) => {
    const newArray = reduxFieldValue.concat();
    const methodArray = newArray.filter((item, index) => index !== indexDelete);
    setValueField({
      field: reduxField,
      value: methodArray,
    });
    setFocus(null);
  };

  const handlerInputText = (event, index, otherIndex) => {
    const intermediateValue = reduxFieldValue.concat();
    intermediateValue[index][otherIndex] = {
      ...intermediateValue[index][otherIndex],
      value: event.target.value,
      valid: false,
      warning: null,
    };
    const reduxValue = {
      field: reduxField,
      value: intermediateValue,
    };
    setValueField(reduxValue);
  };

  const focusOnInput = (index) => {
    setFocus(index);
  };

  const chooseMethod = (header) => {
    const intermediateValue = reduxFieldValue.concat();
    intermediateValue[focus][0] = {
      ...intermediateValue[focus][0],
      value: header,
      valid: false,
      warning: null,
    };
    const reduxValue = {
      field: reduxField,
      value: intermediateValue,
    };
    setValueField(reduxValue);
  };

  return {
    focus,
    setFocus,
    chooseMethod,
    handlerClick,
    handlerInputText,
    deleteMethod,
    focusOnInput,
  };
};
