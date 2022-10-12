import {useHistory} from 'react-router-dom';
import {useMedia} from 'react-media';


const MarketHook = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const history = useHistory();
  const goToAddHistory = () => {
    history.push('createFirm');
  };
  const goToFirms = (value) => {
    history.push(`firms/${value}`);
  };
  return {
    small,
    goToFirms,
    goToAddHistory,
  };
};

export default MarketHook;
