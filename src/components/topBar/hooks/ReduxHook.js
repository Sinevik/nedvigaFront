export const ReduxHook = (
    {
      setValueField,
      reduxField,
    },
) => {
  const handlerClick = (number) => {
    setValueField({
      field: reduxField,
      value: number,
    });
  };
  return {
    handlerClick,
  };
};
