export const ReduxHook = ({
  setAddress,
  reduxFieldValue,
}) => {
  const handlerDeleteCoordinates = (number) => {
    const newArray = reduxFieldValue.concat()
        .filter((item, index) => index !== number);
    setAddress(newArray);
  };

  return {handlerDeleteCoordinates};
};
