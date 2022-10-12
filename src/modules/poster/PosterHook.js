import {useEffect, useState} from 'react';
import {useMedia} from 'react-media';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from '../../redux/Actions';

const PosterHook = (
    {
      match,
    },
) => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const {getPoster, setPoster} = Actions('poster')(useDispatch());
  const data = useSelector((state) => state.poster.data);
  const sideEffects = useSelector((state) => state.poster.sideEffects);
  const {
    addPosterBookmark,
    deletePosterBookmark,
  } = Actions('storage')(useDispatch());
  const postersBookmark = useSelector((state) => state.storage.postersBookmark);
  const [modal, setModal] = useState(false);
  const handlerBookmark = (id) => {
    if (postersBookmark.includes(id)) {
      deletePosterBookmark(id);
    } else {
      addPosterBookmark(id);
    }
  };
  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };
  useEffect(() => {
    if (!data) {
      getPoster(match.params.id);
    }
  }, []);

  useEffect(() => () => {
    setPoster(null);
  }, []);

  return {
    data,
    modal,
    sideEffects,
    small,
    postersBookmark,
    handlerBookmark,
    closeModal,
    openModal,
  };
};

export default PosterHook;
