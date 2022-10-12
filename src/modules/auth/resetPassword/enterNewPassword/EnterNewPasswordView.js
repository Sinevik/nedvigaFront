import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../../../../components/inputText/InputText';
import {Section, Title} from '../../style/style';
import {useTranslation} from 'react-i18next';


const EnterNewPasswordView = ({
  validConfirmPassword,
}) => {
  const {t} = useTranslation();
  return (
    <React.Fragment>
      <Section>
        <Title>
          {t('enter-a-new-password')}
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
          externalValid={validConfirmPassword}
          reducer="auth"
          rule="password"
          direction="column"
        />
      </Section>
    </React.Fragment>
  );
};


export default EnterNewPasswordView;

EnterNewPasswordView.propTypes = {
  validConfirmPassword: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

EnterNewPasswordView.defaultProps = {
  validConfirmPassword: undefined,
};
