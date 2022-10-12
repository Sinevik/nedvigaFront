import {useSelector} from 'react-redux';
import {useMedia} from 'react-media';

const ContactsHook = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const state = useSelector((state) => state.createPoster);

  return {
    small,
    state,
  };
};

export default ContactsHook;
