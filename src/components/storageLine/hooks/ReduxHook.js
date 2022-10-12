export const ReduxHook = ({
  setValueField,
  reduxFieldValue,
  reduxField,
}) => {
  const deleteItem = (item) => {
    const reduxValue = {
      field: reduxField,
      value: reduxFieldValue.filter((value) => value !== item),
    };
    setValueField(reduxValue);
  };
  return {deleteItem};
};
