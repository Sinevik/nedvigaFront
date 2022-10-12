const setValueRedux = (value, reduxField) => {
  let result;
  if (!reduxField) {
    result = [];
    result.push(value);
  } else if (!reduxField.includes(value)) {
    result = [...reduxField];
    result.push(value);
  } else {
    result = reduxField.filter((item) => item !== value);
  }
  return result;
};

export const ReduxHook = ({
  setValueField,
  type,
  reduxFieldValue,
  reduxField,
}) => {
  const handlerClick = (value) => {
    let result;
    if (type === 'many') {
      result = setValueRedux(
          value,
          reduxFieldValue,
      );
    } else {
      result = value;
    }
    const reduxValue = {
      field: reduxField,
      value: result,
    };
    setValueField(reduxValue);
  };


  return {
    handlerClick,
  };
};
