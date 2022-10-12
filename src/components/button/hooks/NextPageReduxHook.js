export const NextPageReduxHook = ({setIncrementPage}) => {
  const handlerClick = () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIncrementPage();
    }, 100);
  };
  return {handlerClick};
};
