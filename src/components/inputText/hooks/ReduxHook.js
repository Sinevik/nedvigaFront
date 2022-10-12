import validate from '../../../common/Validation';

export const ReduxHook = ({
  setValueField,
  reduxField,
  rule,
}) => {
  const handlerInputText = (event) => {
    const validField = validate(event.target.value.trim(), rule);
    const reduxValue = {
      field: reduxField,
      value: {
        value: event.target.value,
        valid: !validField,
        warning: validField,
      },
    };
    setValueField(reduxValue);
  };

  return {handlerInputText};
};
