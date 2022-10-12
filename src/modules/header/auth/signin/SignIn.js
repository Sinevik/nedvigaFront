import React from 'react';
import styled from 'styled-components';
import Button from '../../../../components/button/Button';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
  padding: 0px;
  height: 100%;
  position: relative;
`;

const Content = styled.div`
    display: flex;
    height: 100%;
`;


const Wrapper = styled.div`
  padding: 0px 0px 0px 15px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;


const SignIn = ({goToSignUp, goToLogIn, small}) => {
  const {t} = useTranslation();
  return (
    <Container>
      <Content>
        <Wrapper>
          <Button
            value='add-poster'
            width={small ? '90px' : '176px'}
            height={small ? '25px' : '36px'}
            borderRadius='4px'
            backgroundColor="#1C7F62"
            cursor="pointer"
            onFocusColor="#43B949"
            fontColor="#F9F9FB"
            onFocusFontColor="#F9F9FB"
            boxShadow="inset 0px 0px 8px rgba(0, 0, 0, 0.04)"
            fontSize={small ? '8px' : '15px'}
            reducer="auth"
            hook="parent"
            parentFunction={() => goToSignUp()}
            fieldsCheckForDisabled={[true]}
          />
        </Wrapper>
        <Wrapper>
          <Button
            value='login'
            width={small ? '50px' : '116px'}
            height={small ? '25px' : '36px'}
            fontSize={small ? '8px' : '15px'}
            borderRadius='4px'
            border="1px solid #1C7F62"
            backgroundColor="#FFFFFF"
            cursor="pointer"
            onFocusColor="#43B949"
            onFocusBorder="#43B949"
            fontColor="#1C7F62"
            onFocusFontColor="#F9F9FB"
            boxShadow="inset 0px 0px 8px rgba(0, 0, 0, 0.04)"
            reducer="auth"
            hook="parent"
            parentFunction={() => goToLogIn()}
            fieldsCheckForDisabled={[true]}
          />
        </Wrapper>
      </Content>
    </Container>
  );
};


export default SignIn;
