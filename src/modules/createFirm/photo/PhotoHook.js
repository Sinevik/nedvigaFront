import {useSelector} from 'react-redux';
import {useMedia} from 'react-media';

const PhotoHook = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const pictures = useSelector((state) => state.createFirm.pictures);

  return {
    small,
    pictures,
  };
};

export default PhotoHook;
