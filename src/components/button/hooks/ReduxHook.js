export const ReduxHook = ({
  setValueField,
  value,
  reduxField,
  parentFunction,
}) => {
  const handlerClick = (e) => {
    if (parentFunction) {
      parentFunction(e);
    }
    setValueField({
      field: reduxField,
      value,
    });
  };
  return {handlerClick};
};
