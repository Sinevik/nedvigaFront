import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useMedia} from 'react-media';

export const LoginHook = ({
  logIn,
  setError,
  setInitState,
}) => {
  const history = useHistory();
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});

  const goToHome = () => {
    history.push('/');
  };

  const goToLogIn = () => {
    logIn(goToHome);
  };

  const goToSignIn = () => {
    history.push('/sendEmailForSignUp');
  };

  const goToNewPassword = () => {
    history.push('/sendEmailForNewPassword');
  };
  useEffect(() => {
    setInitState();
  }, []);
  return {
    goToLogIn,
    goToSignIn,
    goToNewPassword,
    small,
  };
};
