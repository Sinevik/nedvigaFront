import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Title, Wrapper} from '../../style/style';
import {useTranslation} from 'react-i18next';


const EmailSentView = ({
  purposeSendEmail,
  setStatusSendEmail,
}) => {
  const {t} = useTranslation();
  useEffect(() => () => setStatusSendEmail(false), []);
  return (
    <React.Fragment>
      {purposeSendEmail === 'resetPassword' ? (
        <Wrapper direction="row" justify="center">
          <Title>
            {t('to-recover-your-password-check-your-email')}
          </Title>
        </Wrapper>
      ) : (
        <Wrapper direction="row" justify="center">
          <Title>
            {t('to-register-check-your-email')}
          </Title>
        </Wrapper>
      )}
    </React.Fragment>
  );
};


export default EmailSentView;

EmailSentView.propTypes = {
  purposeSendEmail: PropTypes.string,
};

EmailSentView.defaultProps = {
  purposeSendEmail: null,
};
