import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useMedia} from 'react-media';
import {Actions} from '../../redux/Actions';
import {useEffect, useState} from 'react';

const HeaderHook = () => {
  const history = useHistory();
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});

  const {setPlug} = Actions('general')(useDispatch());
  const {setToken} = Actions('storage')(useDispatch());
  const {setUser} = Actions('user')(useDispatch());
  const {setData} = Actions('createFirm')(useDispatch());
  const user = useSelector((state) => state.user.data);
  const postersBookmark = useSelector((state) => state.storage.postersBookmark);
  const [stateHeader, setStateHeader] = useState(false);

  const handlerPlug = (plug) => {
    setPlug(plug);
  };

  const goToSignUp = () => {
    history.push('/sendEmailForSignUp');
  };

  const goToLogIn = () => {
    history.push('/logIn');
  };

  const goToHome = () => {
    history.push('/');
  };

  const goToMyStore = () => {
    setData(user.store);
    history.push(`/createFirm`);
  };

  const goToSettings = () => {
    setPlug(false);
    history.push('/createUser');
  };

  const goToPayments = () => {
    alert('MyPayments');
  };

  const logOut = () => {
    setPlug(false);
    setToken(null);
    setUser(null);
  };

  const goToMyPosters = () => {
    setPlug(false);
    history.push('/myPosters/posters');
  };

  const goToCreate = (kind) => {
    setPlug(false);
    history.push(`/createPoster/${kind}`);
  };

  useEffect(() => {
    if (history.location.pathname !== '/') {
      setStateHeader(true);
    }
    const unlisten = history.listen(() => {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
      if (history.location.pathname !== '/') {
        setStateHeader(true);
      } else {
        setStateHeader(false);
      }
    });
    return () => {
      unlisten();
    };
  }, []);

  return {
    small,
    user,
    stateHeader,
    postersBookmark,
    goToLogIn,
    goToSignUp,
    handlerPlug,
    goToHome,
    goToCreate,
    goToMyPosters,
    goToMyStore,
    goToSettings,
    goToPayments,
    logOut,
  };
};

export default HeaderHook;
