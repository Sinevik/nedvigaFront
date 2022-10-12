import validate from '../../../common/Validation';

export const SubFormReduxHook = ({
  setValueField,
  reduxFieldValue,
  reduxField,
  rule,
  index,
}) => {
  const handlerInputText = (event) => {
    const validField = validate(event.target.value.trim(), rule);
    const intermediateValue = reduxFieldValue.concat();
    intermediateValue[index] = {
      ...intermediateValue[index],
      value: event.target.value.trim(),
      valid: !validField,
      warning: validField,
    };
    const reduxValue = {
      field: reduxField,
      value: intermediateValue,
    };
    setValueField(reduxValue);
  };

  return {handlerInputText};
};
