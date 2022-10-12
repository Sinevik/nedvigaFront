import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {Actions} from '../../../redux/Actions';


const ListFirmsHook = () => {
  const history = useHistory();
  const firms = useSelector((state) => state.firms.firms);
  const sideEffects = useSelector((state) => state.firms.sideEffects);
  const countFirms = useSelector((state) => state.firms.countFirms);
  const pageNumber = useSelector((state) => state.firms.pageNumber);
  const maxPage = useSelector((state) => state.firms.maxPage);
  const {
    setValueField,
  } = Actions('firms')(useDispatch());
  const handlerNextPage = () => {
    setValueField({
      field: 'pageNumber',
      value: (pageNumber + 1),
    });
  };
  return {
    firms,
    sideEffects,
    countFirms,
    maxPage,
    pageNumber,
    handlerNextPage,
  };
};

export default ListFirmsHook;
