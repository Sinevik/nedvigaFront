import {useState} from 'react';
import {useSelector} from 'react-redux';
import {useMedia} from 'react-media';

const AddressHook = () => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const address = useSelector((state) => state.createFirm.address);
  const centerMap = useSelector((state) => state.createFirm.centerMap);
  const [open, setOpen] = useState(false);

  const handlerModal = () => {
    setOpen(!open);
  };


  return {
    handlerModal,
    small,
    centerMap,
    address,
    open,
  };
};

export default AddressHook;
