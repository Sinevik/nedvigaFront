import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import {Actions} from '../../../redux/Actions';
import EmailSentView from './emailSent/EmailSentView';
import EnterEmailView from './enterEmail/EnterEmailView';
import {SendEmailMainHook} from './SendEmailMainHook';
import {Container, Content} from '../style/style';
import Error from '../style/error/Error';
import Button from '../style/button/Button';


const WrapperCaptcha = styled.div`
  display: flex;
  height: 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


const SendEmailMainView = ({
  sendEmail,
  setInitState,
  setStatusSendEmail,
  setPurposeSendEmail,
  setTokenCaptcha,
  setCaptcha,
  setError,
  /* -----*/
  small,
  captcha,
  purposeSendEmail,
  errors,
  match,
  email,
  statusSendEmail,
  sideEffects,
}) => {
  const {
    goToCaptcha,
    goToSendEmail,
  } = SendEmailMainHook({
    match,
    setError,
    setCaptcha,
    setTokenCaptcha,
    sendEmail,
    setPurposeSendEmail,
    setInitState,
  });
  let content;
  switch (statusSendEmail) {
    case (true):
      content = (
        <EmailSentView
          setStatusSendEmail={setStatusSendEmail}
          purposeSendEmail={purposeSendEmail}
        />
      );
      break;
    case (false):
      content = (
        <EnterEmailView
          statusSendEmail={statusSendEmail}
          purposeSendEmail={purposeSendEmail}
        />
      );
      break;
    default:
      return null;
  }
  return (
    <Container>
      <Content width={small ? '100%' : '412px'}>
        {content}
        <Error errors={errors}/>
        {!captcha && !statusSendEmail ? (
          <Button
            value='send'
            sideEffects={sideEffects}
            parentFunction={() => goToCaptcha()}
            fieldsCheckForDisabled={[email.valid, !sideEffects]}
          />
        ) : null}
        {captcha ? (
          <WrapperCaptcha>
            <ReCAPTCHA
              onChange={(value) => goToSendEmail(value)}
              sitekey="6LczsdIgAAAAAMRRZ8aesV_ct-C1Vp2OVsbIidDN"
            />
          </WrapperCaptcha>
        ) : null}
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  statusSendEmail: state.auth.statusSendEmail,
  purposeSendEmail: state.auth.purposeSendEmail,
  errors: state.auth.errors,
  email: state.auth.email,
  sideEffects: state.auth.sideEffects,
  captcha: state.auth.captcha,
});

const mapDispatchToProps = () => {
  const result = Actions('auth');
  return result;
};

export default connect(mapStateToProps, mapDispatchToProps)(SendEmailMainView);

SendEmailMainView.propTypes = {
  setError: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
  setInitState: PropTypes.func.isRequired,
  statusSendEmail: PropTypes.bool.isRequired,
  sideEffects: PropTypes.bool.isRequired,
  setPurposeSendEmail: PropTypes.func.isRequired,
  setTokenCaptcha: PropTypes.func.isRequired,
  setStatusSendEmail: PropTypes.func.isRequired,
  purposeSendEmail: PropTypes.string,
  errors: PropTypes.string,
  captcha: PropTypes.bool.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  email: PropTypes.objectOf(PropTypes.any).isRequired,
};
SendEmailMainView.defaultProps = {
  purposeSendEmail: null,
  errors: null,
};
