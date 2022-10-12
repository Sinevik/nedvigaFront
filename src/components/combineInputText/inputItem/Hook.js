import validate from '../../../common/Validation';

export const Hook = ({
  handlerText, reduxField, number, rule,
}) => {
  const handlerInputText = (event) => {
    const validField = validate(event.target.value, rule);
    handlerText(event.target.value,
        reduxField,
        number,
        validField,
    );
  };
  return {handlerInputText};
};
