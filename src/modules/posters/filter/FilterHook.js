import {useSelector} from 'react-redux';


const FilterHook = () => {
  const state = useSelector((state) => state.posters);

  return {
    state,
  };
};


export default FilterHook;
