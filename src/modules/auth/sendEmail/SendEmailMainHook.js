import {useEffect} from 'react';
import {useMedia} from 'react-media';


const getPurpose = (path) => {
  let result;
  if (path.includes('SignUp')) {
    result = 'signUp';
  } else {
    result = 'resetPassword';
  }
  return result;
};

export const SendEmailMainHook = ({
  match,
  setInitState,
  setCaptcha,
  setTokenCaptcha,
  setError,
  sendEmail,
  setPurposeSendEmail,
}) => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const goToCaptcha = () => {
    setCaptcha(true);
  };

  const goToSendEmail = (value) => {
    setTokenCaptcha(value);
    sendEmail();
  };

  useEffect(() => {
    setInitState();
    setPurposeSendEmail(getPurpose(match.path));
  }, []);
  return {
    small,
    goToCaptcha,
    goToSendEmail,
  };
};
