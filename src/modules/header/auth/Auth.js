import React from 'react';
import styled from 'styled-components';
import Account from './account/Account';
import SignIn from './signin/SignIn';

const Container = styled.div`
    height: 100%;
`;


const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: ${({small}) => small ? '0px 16px 0px 0px' : '0px 37px 0px 0px'};
`;


const Auth = ({
  handlerPlug,
  goToCreate,
  goToMyPosters,
  goToMyStore,
  goToSettings,
  goToPayments,
  goToSignUp,
  goToLogIn,
  logOut,
  avatar,
  nickName,
  email,
  user,
  small,
  store,
}) => (
  <Container>
    <Content small={small}>
      {user ? (
        <Account
          handlerPlug={handlerPlug}
          goToCreate={goToCreate}
          goToMyPosters={goToMyPosters}
          goToMyStore={goToMyStore}
          goToSettings={goToSettings}
          goToPayments={goToPayments}
          logOut={logOut}
          avatar={avatar}
          nickName={nickName}
          email={email}
          store={store}
        />
      ) : (
        <SignIn
          small={small}
          goToLogIn={goToLogIn}
          goToSignUp={goToSignUp}
        />
      )}
    </Content>
  </Container>
);


export default Auth;
