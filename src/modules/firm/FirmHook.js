import {useEffect, useState} from 'react';
import {useMedia} from 'react-media';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from '../../redux/Actions';

const FirmHook = (
    {
      match,
    },
) => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const {getFirm, setFirm} = Actions('firm')(useDispatch());
  const data = useSelector((state) => state.firm.data);
  const sideEffects = useSelector((state) => state.firm.sideEffects);
  const [modal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };
  useEffect(() => {
    if (!data) {
      getFirm(match.params.id);
    }
  }, []);

  useEffect(() => () => {
    setFirm(null);
  }, []);

  return {
    data,
    modal,
    sideEffects,
    small,
    closeModal,
    openModal,
  };
};

export default FirmHook;
