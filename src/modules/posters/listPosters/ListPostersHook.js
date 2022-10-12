import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Actions} from '../../../redux/Actions';


const ListPostersHook = () => {
  const history = useHistory();
  const posters = useSelector((state) => state.posters.posters);
  const sideEffects = useSelector((state) => state.posters.sideEffects);
  const countPosters = useSelector((state) => state.posters.countPosters);
  const pageNumber = useSelector((state) => state.posters.pageNumber);
  const maxPage = useSelector((state) => state.posters.maxPage);
  const {
    setValueField,
  } = Actions('posters')(useDispatch());
  const handlerNextPage = () => {
    setValueField({
      field: 'pageNumber',
      value: (pageNumber + 1),
    });
  };

  const handlerGoToBookmark = () => {
    history.push(`/myPosters/bookmark`);
  };
  return {
    posters,
    sideEffects,
    countPosters,
    maxPage,
    pageNumber,
    handlerNextPage,
    handlerGoToBookmark,
  };
};

export default ListPostersHook;
