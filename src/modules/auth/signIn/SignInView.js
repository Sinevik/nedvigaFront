import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import InputText from '../../../components/inputText/InputText';
import {SignInHook} from './SignInHook';
import {Actions} from '../../../redux/Actions';
import {Container, Content, Section, Title} from '../style/style';
import Error from '../style/error/Error';
import Button from '../style/button/Button';
import {useTranslation} from 'react-i18next';

const SignInView = ({
  signIn,
  setValueField,
  setToken,
  setError,
  setInitState,
  /* ------ */
  errors,
  sideEffects,
  password,
  confirmPassword,
  match,
  nickName,
}) => {
  const {
    small,
    validConfirmPassword,
    goToSignIn,
  } = SignInHook({
    match,
    confirm: confirmPassword,
    initPassword: password,
    setInitState,
    signIn,
    setValueField,
    setToken,
    setError,
  });
  const {t} = useTranslation();
  return (
    <Container>
      <Content width={small ? '100%' : '412px'}>
        <Section>
          <Title>
            {t('enter-the-password')}
          </Title>
          <InputText
            hook="redux"
            maxLength={40}
            width="100%"
            height="56px"
            fontSize="15px"
            placeholder="text"
            type="password"
            reduxField="password"
            reducer="auth"
            rule="password"
            direction="column"
          />
        </Section>
        <Section>
          <Title>
            {t('repeat-the-password')}
          </Title>
          <InputText
            hook="redux"
            maxLength={40}
            width="100%"
            height="56px"
            fontSize="15px"
            type="password"
            placeholder="text"
            reduxField="confirmPassword"
            disabled={!password.value}
            externalValid={validConfirmPassword}
            reducer="auth"
            rule="password"
            direction="column"
          />
        </Section>
        <Section>
          <Title>
            {t('enter-a-unique-name')}
          </Title>
          <InputText
            hook="redux"
            maxLength={40}
            tabIndex={-2}
            width="100%"
            height="56px"
            fontSize="15px"
            placeholder="text"
            reduxField="nickName"
            reducer="auth"
            rule="nickName"
            direction="column"
          />
        </Section>
        <Error errors={errors}/>
        <Button
          value="signup"
          sideEffects={sideEffects}
          parentFunction={() => goToSignIn({
            password: password.value,
            confirmPassword: confirmPassword.value,
          })}
          fieldsCheckForDisabled={[
            password.value === confirmPassword.value,
            password.valid,
            confirmPassword.valid,
            nickName.valid,
            !sideEffects,
          ]}
        />
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  statusResetPassword: state.auth.statusResetPassword,
  password: state.auth.password,
  nickName: state.auth.nickName,
  errors: state.auth.errors,
  sideEffects: state.auth.sideEffects,
  confirmPassword: state.auth.confirmPassword,
});

const mapDispatchToProps = () => {
  const result = Actions('auth');
  return result;
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInView);

SignInView.propTypes = {
  errors: PropTypes.string,
  password: PropTypes.objectOf(PropTypes.any).isRequired,
  nickName: PropTypes.objectOf(PropTypes.any).isRequired,
  sideEffects: PropTypes.bool.isRequired,
  confirmPassword: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  signIn: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setValueField: PropTypes.func.isRequired,
};

SignInView.defaultProps = {
  errors: null,
};
