import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useMedia} from 'react-media';

;

const HomeHook = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const {posters} = useSelector((state) => state.home);
  const history = useHistory();

  const goTo = (type) => {
    history.push(`/posters/${type}`);
  };

  const goToMarket = () => {
    history.push('/market');
  };

  return {
    posters,
    small,
    goToMarket,
    goTo,
  };
};

export default HomeHook;
