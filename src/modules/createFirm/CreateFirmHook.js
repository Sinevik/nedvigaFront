import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {Actions} from '../../redux/Actions';
import {useHistory} from 'react-router-dom';

export const CreateFirmHook = () => {
  // redux
  const history = useHistory();
  const {
    createFirm,
  } = Actions('createFirm')(useDispatch());
  const page = useSelector((state) => state.createFirm.page);
  const sideEffects = useSelector((state) => state.createFirm.sideEffects);
  const state = useSelector((state) => state.createFirm);
  const error = useSelector((state) => state.createFirm.error);

  const goToHome = () => {
    history.push('/');
  };
  const goToCreateFirm = () => {
    createFirm(goToHome);
  };

  //
  return {
    sideEffects,
    error,
    page,
    state,
    goToCreateFirm,
  };
};
