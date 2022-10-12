import React from 'react';
import {Title, Wrapper} from '../../style/style';
import {useTranslation} from 'react-i18next';


const PasswordChangedView = () => {
  const {t} = useTranslation();
  return (
    <Wrapper direction="row" justify="center">
      <Title>{t('the-password-has-been-changed<')}</Title>
    </Wrapper>
  );
};


export default PasswordChangedView;


