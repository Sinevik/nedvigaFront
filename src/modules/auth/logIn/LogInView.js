import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputText from '../../../components/inputText/InputText';
import {Actions} from '../../../redux/Actions';
import {LoginHook} from './LoginHook';
import {Container, Content, Section, Title} from '../style/style';
import Error from '../style/error/Error';
import Button from '../style/button/Button';
import {useTranslation} from 'react-i18next';


const Link = styled.div`
    outline: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const LogInView = ({
  logIn,
  /* -----*/
  setInitState,
  setError,
  email,
  sideEffects,
  password,
  errors,
}) => {
  const {
    goToSignIn,
    goToLogIn,
    goToNewPassword,
    small,
  } = LoginHook({
    setInitState,
    logIn,
    setError,
  });
  const {t} = useTranslation();
  return (
    <Container>
      <Content width={small ? '100%' : '412px'}>
        <Section>
          <Title>
            {t('enter-email')}
          </Title>
          <InputText
            hook="redux"
            maxLength={40}
            width="100%"
            height="56px"
            fontSize="15px"
            placeholder="text"
            reduxField="email"
            reducer="auth"
            rule="email"
            direction="column"
          />
        </Section>
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
            reduxField="password"
            reducer="auth"
            type="password"
            rule="password"
            direction="column"
          />
        </Section>
        <Error errors={errors}/>
        <Button
          value="login"
          sideEffects={sideEffects}
          parentFunction={() => goToLogIn()}
          fieldsCheckForDisabled={[email.valid, password.valid, !sideEffects]}
        />
        <Link
          role="button"
          type="button"
          onClick={() => goToSignIn()}
          onKeyPress={() => goToSignIn()}
          tabIndex={0}
        >
          <Title>
            {t('go-to-signup')}
          </Title>
        </Link>
        <Link
          role="button"
          type="button"
          onClick={() => goToNewPassword()}
          onKeyPress={() => goToNewPassword()}
          tabIndex={0}
        >
          <Title>
            {t('forgot-your-password')}
          </Title>
        </Link>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  errors: state.auth.errors,
  sideEffects: state.auth.sideEffects,
});

const mapDispatchToProps = () => {
  const result = Actions('auth');
  return result;
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInView);

LogInView.propTypes = {
  setError: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
  email: PropTypes.objectOf(PropTypes.any).isRequired,
  password: PropTypes.objectOf(PropTypes.any).isRequired,
  sideEffects: PropTypes.bool.isRequired,
  errors: PropTypes.string,
};

LogInView.defaultProps = {
  errors: null,
};
