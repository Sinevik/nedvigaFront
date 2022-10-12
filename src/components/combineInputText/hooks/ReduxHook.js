export const ReduxHook = ({
  setValueField,
  setSelectedCombineInput,
}) => {
  const handlerClick = (value) => {
    setSelectedCombineInput(value);
  };
  const handlerText = (value, reduxField, number, validResult) => {
    const reduxValue = {
      field: reduxField,
      value: {
        value,
        valid: !validResult,
        warning: validResult || null,
      },
    };
    setValueField(reduxValue);
  };
  return {handlerClick, handlerText};
};
