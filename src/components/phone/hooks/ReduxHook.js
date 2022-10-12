export const ReduxHook = ({
  numberField,
  setValueField,
  reduxField,
  reduxFieldValue,
}) => {
  const handlerClick = () => {
    if (reduxFieldValue.length < numberField) {
      const newArray = reduxFieldValue.concat();
      newArray.push({value: null, valid: false, warning: null});
      setValueField({
        field: reduxField,
        value: newArray,
      });
    }
  };
  const deletePhone = (indexPhone) => {
    const newArray = reduxFieldValue.concat();
    const filteredArray = newArray.filter((item, index) => index !== indexPhone);
    setValueField({
      field: reduxField,
      value: filteredArray,
    });
  };
  return {handlerClick, deletePhone};
};
