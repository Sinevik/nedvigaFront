export const ReduxHook = ({
  setValueField,
  reduxField,
}) => {
  const handlerChange = (event) => {
    const reduxValue = {
      field: reduxField,
      value: event.target.value,
    };
    setValueField(reduxValue);
  };
  return {handlerChange};
};
