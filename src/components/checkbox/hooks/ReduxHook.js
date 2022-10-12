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
  item,
  reduxField,
  reduxFieldValue,
}) => {
  const handlerClick = () => {
    const result = setValueRedux(
        item,
        reduxFieldValue,
    );
    const reduxValue = {
      field: reduxField,
      value: result,
    };
    setValueField(reduxValue);
  };
  return {handlerClick};
};
