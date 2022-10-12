import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../../../../components/inputText/InputText';
import EmailSentView from '../emailSent/EmailSentView';
import {Section, Title} from '../../style/style';
import {useTranslation} from 'react-i18next';


const EnterEmailView = ({
  purposeSendEmail,
  statusSendEmail,
}) => {
  const {t} = useTranslation();
  return (
    <React.Fragment>
      {!statusSendEmail ? (
        <React.Fragment>
          {purposeSendEmail === 'resetPassword' ? (
            <Section>
              <Title>
                {t('to-restore-your-password-specify-email')}
              </Title>
            </Section>
          ) : (
            <Section>
              <Title>
                {t('to-signup-specify-the-email-address')}
              </Title>
            </Section>
          )}
          <Section>
            <InputText
              hook="redux"
              maxLength={40}
              width="100%"
              height="56px"
              fontSize="15px"
              placeholder="enter-email"
              reduxField="email"
              reducer="auth"
              rule="email"
              direction="column"
            />
          </Section>
        </React.Fragment>
      ) : (
        <EmailSentView/>
      )}
    </React.Fragment>
  );
};


export default EnterEmailView;

EnterEmailView.propTypes = {
  purposeSendEmail: PropTypes.string,
  statusSendEmail: PropTypes.bool.isRequired,
};

EnterEmailView.defaultProps = {
  purposeSendEmail: null,
};
