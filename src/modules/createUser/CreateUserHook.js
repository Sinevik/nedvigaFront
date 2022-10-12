import {useDispatch, useSelector} from 'react-redux';
import {Actions} from '../../redux/Actions';
import {useMedia} from 'react-media';
import {useHistory} from 'react-router-dom';
import {useEffect} from 'react';

export const CreateUserHook = () => {
  // redux
  const {
    createUser,
    setInit,
    setData,
  } = Actions('createUser')(useDispatch());

  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const history = useHistory();
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const avatar = useSelector((state) => state.createUser.avatar);
  const error = useSelector((state) => state.createUser.error);
  const sideEffects = useSelector((state) => state.createUser.sideEffects);
  const user = useSelector((state) => state.user.data);
  const mode = useSelector((state) => state.createUser.mode);
  const firstName = useSelector((state) => state.createUser.firstName);
  const lastName = useSelector((state) => state.createUser.lastName);
  const email = useSelector((state) => state.createUser.email);
  const webSite = useSelector((state) => state.createUser.webSite);

  //

  const goToHome = () => {
    history.push('/');
  };

  const goToCreateUser = () => {
    createUser(goToHome);
  };

  useEffect(() => {
    if (user) {
      setData(user);
    } else {
      setInit();
    }
  }, []);
  return {
    small,
    mode,
    lastName,
    webSite,
    email,
    user,
    error,
    avatar,
    sideEffects,
    firstName,
    goToCreateUser,
  };
};
