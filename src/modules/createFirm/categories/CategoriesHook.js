import {useSelector} from 'react-redux';
import {useMedia} from 'react-media';


const CategoriesHook = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const categories = useSelector((state) => state.createFirm.categories);
  const state = useSelector((state) => state.createFirm);

  return {
    small,
    categories,
    state,
  };
};

export default CategoriesHook;
