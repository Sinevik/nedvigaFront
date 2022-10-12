export const ReduxHook = (
    {
      setValueField,
      reduxField,
    },
) => {
  const handlerInputText = (event) => {
    setValueField({
      field: reduxField,
      value: event.target.value,
    });
  };
  return {
    handlerInputText,
  };
};
