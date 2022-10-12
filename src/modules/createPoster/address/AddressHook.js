import {useSelector} from 'react-redux';
import {useMedia} from 'react-media';

const AddressHook = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const centerMap = useSelector((state) => state.createPoster.centerMap);
  const state = useSelector((state) => state.createPoster);

  return {
    small,
    centerMap,
    state,
  };
};

export default AddressHook;
