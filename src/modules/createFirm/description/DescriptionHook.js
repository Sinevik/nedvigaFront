import {useSelector} from 'react-redux';
import {useMedia} from 'react-media';

export const DescriptionHook = () => {
  // redux
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const avatar = useSelector((state) => state.createFirm.avatar);
  const unpPhoto = useSelector((state) => state.createFirm.unpPhoto);
  const phone = useSelector((state) => state.createFirm.phone);
  const unp = useSelector((state) => state.createFirm.unp);
  const legalName = useSelector((state) => state.createFirm.legalName);
  const email = useSelector((state) => state.createFirm.email);
  const description = useSelector((state) => state.createFirm.description);
  //
  return {
    small,
    avatar,
    unpPhoto,
    phone,
    unp,
    legalName,
    email,
    description,
  };
};
