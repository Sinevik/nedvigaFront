import React from 'react';
import styled from 'styled-components';
import InfoUserHook from './InfoUserHook';
import Avatar from './avatar/Avatar';
import Item from './item/Item';
import {Icon} from '../../svg/account';

export const Container = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0px 15px 0px 15px;
`;


export const Content = styled.div`
    width: ${({width}) => width};
    padding: 20px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    @media (max-width: 1024px) {
      padding: 20px 0px 0px 0px;
    } 
`;

export const Title = styled.p`
    margin: 0px;
    padding: 0px 0px 5px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #9595B1;
`;

const Loading = styled.div`
    margin: 0px;
    padding: 40px 0px 40px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: #3B8AE5;
`;

const Phone = styled.p`
  display: ${({phone}) => phone.length > 0 ? 'block' : 'none'};
  margin: 0px;
  padding: 0px 0px 0px 0px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #9595B1;
`;

const WrapperImage = styled.div`
    width: 80px;
    height: 80px;
    padding: 0px 0px 10px 0px;
`;

const InfoUserView = (
    {
      match,
    },
) => {
  const {
    error,
    user,
    sideEffects,
  } = InfoUserHook({
    match,
  });
  return (
    <Container>
      <Content>
        {user && !sideEffects && !error ? (
          <React.Fragment>
            {user.avatar ? (
              <Avatar
                nickName={user.nickName}
                avatar={user.avatar}
              />
            ) : (
              <WrapperImage>
                <Icon name="profile"/>
              </WrapperImage>
            )}
            <Item
              title="Имя"
              type="text"
              value={user.firstName}
            />
            <Item
              title="Фамилия"
              type="text"
              value={user.lastName}
            />
            <Item
              title="Email"
              type="mail"
              value={user.publicEmail}
            />
            <Item
              title="Веб-сайт"
              type="link"
              value={user.webSite}
            />
            <Phone phone={user.phone}>
              Телефон
            </Phone>
            {user.phone.map((phone, index) => {
              return (
                <Item
                  key={index}
                  title={null}
                  type="phone"
                  value={phone}
                />
              );
            })}
            {user.contacts.map((item, index) => {
              return (
                <Item
                  key={index}
                  title={item.method}
                  type="link"
                  value={item.path}
                />
              );
            })}
            <Item
              title="Кол-во объявлений"
              type="text"
              value={user.countPosters}
            />
          </React.Fragment>
        ) : null}
        {sideEffects ? (
          <Loading>
            Loading
          </Loading>
        ) : null}
        {error ? (
          <Title>
            {error}
          </Title>
        ) : null}
      </Content>
    </Container>
  );
};

export default InfoUserView;
