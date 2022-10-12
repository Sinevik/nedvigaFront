import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Actions} from '../../../redux/Actions';
import PasswordChangedView from './passwordСhanged/PasswordChangedView';
import EnterNewPasswordView from './enterNewPassword/EnterNewPasswordView';
import {ResetPasswordMainHook} from './ResetPasswordMainHook';
import {Container, Content} from '../style/style';
import Error from '../style/error/Error';
import Button from '../style/button/Button';

const ResetPasswordMainView = ({
  changePassword,
  setValueField,
  setInitState,
  setToken,
  setError,
  /* -----*/
  password,
  sideEffects,
  confirmPassword,
  errors,
  match,
  statusResetPassword,
}) => {
  const {
    small,
    validConfirmPassword,
    goToSetNewPassword,
  } = ResetPasswordMainHook({
    match,
    setError,
    confirm: confirmPassword,
    initPassword: password,
    changePassword,
    setToken,
    setValueField,
    setInitState,
  });
  let content;
  switch (statusResetPassword) {
    case (true):
      content = (
        <PasswordChangedView/>
      );
      break;
    case (false):
      content = (
        <EnterNewPasswordView
          validConfirmPassword={validConfirmPassword}
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
        {!statusResetPassword ? (
          <Button
            value="reset"
            sideEffects={sideEffects}
            parentFunction={() => goToSetNewPassword({
              password: password.value,
              confirmPassword: confirmPassword.value,
            })}
            fieldsCheckForDisabled={[
              password.value === confirmPassword.value,
              password.valid,
              confirmPassword.valid,
              !sideEffects,
            ]}
          />
        ) : null}
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  statusResetPassword: state.auth.statusResetPassword,
  password: state.auth.password,
  errors: state.auth.errors,
  confirmPassword: state.auth.confirmPassword,
  sideEffects: state.auth.sideEffects,
});

const mapDispatchToProps = () => {
  const result = Actions('auth');
  return result;
};

export default connect(mapStateToProps,
    mapDispatchToProps)(ResetPasswordMainView);

ResetPasswordMainView.propTypes = {
  changePassword: PropTypes.func.isRequired,
  setValueField: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
  setInitState: PropTypes.func.isRequired,
  statusResetPassword: PropTypes.bool.isRequired,
  sideEffects: PropTypes.bool.isRequired,
  password: PropTypes.objectOf(PropTypes.any).isRequired,
  confirmPassword: PropTypes.objectOf(PropTypes.any).isRequired,
  errors: PropTypes.string,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

ResetPasswordMainView.defaultProps = {
  errors: null,
};
