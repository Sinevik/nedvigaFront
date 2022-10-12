import {useEffect, useState} from 'react';
import {usePrevious} from '../../../common/UsePrev';
import {useMedia} from 'react-media';
import {useHistory} from 'react-router-dom';

export const SignInHook = ({
  setValueField,
  setToken,
  setInitState,
  signIn,
  setError,
  match,
  confirm,
  initPassword,
}) => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const [validConfirmPassword, setValidConfirm] = useState(false);
  const prevInitPassword = usePrevious(initPassword);
  const history = useHistory();
  const goToCreateUser = () => {
    history.push('/createUser');
  };
  const goToSignIn = () => {
    signIn(goToCreateUser);
  };
  useEffect(() => {
    setInitState();
  }, []);
  useEffect(() => {
    setToken(match.params.hash);
  }, []);
  useEffect(() => {
    if (
      initPassword.value !==
      confirm.value &&
      confirm.value !== null
    ) {
      setValidConfirm('Не совпадают пароли');
    } else {
      setValidConfirm(false);
    }
  }, [confirm]);
  useEffect(() => {
    if (prevInitPassword) {
      const reduxValue = {
        field: 'confirmPassword',
        value: {
          value: null,
          valid: false,
          warning: null,
        },
      };
      setValueField(reduxValue);
    }
  }, [initPassword]);
  return {
    small,
    validConfirmPassword,
    goToSignIn,
  };
};
