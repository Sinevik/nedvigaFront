import {useEffect, useState} from 'react';
import {useMedia} from 'react-media';

export const ResetPasswordMainHook = ({
  setError,
  match,
  confirm,
  setInitState,
  initPassword,
  changePassword,
  setToken,
  setValueField,
}) => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const [validConfirmPassword, setValidConfirm] = useState(false);
  const goToSetNewPassword = () => {
    changePassword();
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
    const reduxValue = {
      field: 'confirmPassword',
      value: {
        value: null,
        valid: false,
        warning: null,
      },
    };
    setValueField(reduxValue);
  }, [initPassword]);
  useEffect(() => () => setError(null), []);
  return {
    small,
    validConfirmPassword,
    goToSetNewPassword,
  };
};
