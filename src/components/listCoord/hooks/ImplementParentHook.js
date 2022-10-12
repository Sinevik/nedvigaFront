export const ImplementParentHook = ({parentFunction}) => {
  const handlerInputText = (event) => parentFunction(event);
  return {handlerInputText};
};
