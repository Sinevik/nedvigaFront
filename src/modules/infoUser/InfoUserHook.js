import React, {useEffect} from 'react';
import {Actions} from '../../redux/Actions';
import {useDispatch, useSelector} from 'react-redux';


const InfoUserHook = (
    {
      match,
    },
) => {
  // redux
  const {
    getUser,
  } = Actions('infoUser')(useDispatch());
  const error = useSelector((state) => state.infoUser.error);
  const sideEffects = useSelector((state) => state.infoUser.sideEffects);
  const user = useSelector((state) => state.infoUser.user);

  useEffect(() => {
    getUser(match.params.id);
  }, []);
  return {
    error,
    user,
    sideEffects,
  };
};

export default InfoUserHook;
