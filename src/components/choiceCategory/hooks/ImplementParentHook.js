export const ImplementParentHook = ({parentFunction}) => {
  const handlerClick = () => parentFunction();
  return {handlerClick};
};
