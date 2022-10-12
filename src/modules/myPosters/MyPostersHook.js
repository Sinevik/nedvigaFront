import React, {useEffect, useState} from 'react';
import {Actions} from '../../redux/Actions';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useMedia} from 'react-media';


const MyPostersHook = (
    {
      match,
    },
) => {
  // redux
  const {
    getPosters,
    deletePoster,
    setValueField,
    getPostersBookmark,
    setUp,
  } = Actions('myPosters')(useDispatch());
  const {
    setData,
  } = Actions('createPoster')(useDispatch());
  const {
    deletePosterBookmark,
  } = Actions('storage')(useDispatch());
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const history = useHistory();
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const [openLine, setOpenNumberLine] = useState(true);
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);


  const sideEffects = useSelector((state) => state.myPosters.sideEffects);
  const countPosters = useSelector((state) => state.myPosters.countPosters);
  const posters = useSelector((state) => state.myPosters.posters);
  const pageNumber = useSelector((state) => state.myPosters.pageNumber);
  const maxPage = useSelector((state) => state.myPosters.maxPage);
  const user = useSelector((state) => state.user.data);

  const closeModal = () => {
    setSelectedId(null);
    setModal(false);
  };
  const openModal = (id) => {
    setSelectedId(id);
    setModal(true);
  };
  const handlerClick = (poster) => {
    if (match.params.kind === 'posters') {
      setData(poster);
      history.push(`/createPoster/${poster.type}/edit`);
    } else {
      history.push(`/poster/${poster.type}/${poster._id}`);
    }
  };
  const handlerDelete = () => {
    closeModal();
    if (match.params.kind === 'posters') {
      deletePoster(selectedId);
    } else {
      deletePosterBookmark(selectedId);
      getPostersBookmark();
    }

    setSelectedId(null);
  };
  const handlerNextPage = () => {
    setValueField({
      field: 'pageNumber',
      value: (pageNumber + 1),
    });
  };
  const handlerUp = (id) => {
    setUp(id);
  };

  useEffect(() => {
    if (user?._id && match.params.kind === 'posters') {
      getPosters();
    } else if (match.params.kind === 'bookmark') {
      getPostersBookmark();
    }
  }, [pageNumber]);

  useEffect(() => {
    if (small) {
      document.body.classList.add('prevent-scroll');
    }
    return () => {
      document.body.classList.remove('prevent-scroll');
    };
  }, []);


  return {
    posters,
    sideEffects,
    countPosters,
    openLine,
    setOpenNumberLine,
    small,
    modal,
    maxPage,
    pageNumber,
    handlerUp,
    handlerNextPage,
    closeModal,
    openModal,
    handlerClick,
    handlerDelete,
  };
};

export default MyPostersHook;
