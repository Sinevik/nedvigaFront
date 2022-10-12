import React from 'react';
import styled from 'styled-components';
import Auth from './auth/Auth';
import Logo from './logo/Logo';
import HeaderHook from './HeaderHook';
import Cities from './cities';
import Bookmarks from '../../components/bookmarks';


const Wrapper = styled.div`
  padding:${({stateHeader}) => stateHeader ? '0px 0px 10px 0px' : '0px'};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background: #FFFFFF;
  height: 70px;
  box-shadow: ${({stateHeader}) => stateHeader ? '0px 7px 10px rgba(0, 0, 0, 0.05)' : 'none'};
  border-bottom: 0.5px solid #EBEBEB;
  @media (max-width: 1024px) {
    height: 56px;
  }
`;

const WrapperCities = styled.div`
  width: auto;
  padding: 0px 0px 0px 20px;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const Content = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  height: 100%;
`;

const WrapperBookmark = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;


const Header = () => {
  const {
    small,
    user,
    stateHeader,
    postersBookmark,
    goToSignUp,
    goToLogIn,
    goToHome,
    goToCreate,
    goToMyPosters,
    goToMyStore,
    goToSettings,
    goToPayments,
    logOut,
    handlerPlug,
  } = HeaderHook();
  return (
    <Wrapper stateHeader={stateHeader}>
      <Container stateHeader={stateHeader}>
        <Logo small={small} goToHome={goToHome}/>
        <Content>
          {!small ? (
            <WrapperCities>
              <Cities
                capital="Минск"
                arrayValues={
                  [
                    'Минск',
                    'Борисов',
                    'Солигорск',
                    'Молодечно',
                    'Жодино',
                    'Слуцк',
                    'Дзержинск',
                    'Вилейка',
                    'Марьина Горка',
                    'Столбцы',
                    'Смолевичи',
                    'Фаниполь',
                    'Несвиж',
                    'Заславль',
                    'Логойск',
                    'Березино',
                    'Клецк',
                    'Любань',
                    'Старые Дороги',
                    'Воложин',
                    'Узда',
                  ]
                }
              />
              <Cities
                capital="Гродно"
                arrayValues={
                  [
                    'Гродно',
                    'Лида',
                    'Слоним',
                    'Волковыск',
                    'Сморгонь',
                    'Новогрудок',
                    'Ошмяны',
                    'Щучин',
                    'Мосты',
                    'Островец',
                    'Скидель',
                    'Дятлово',
                    'Ивье',
                    'Свислочь',
                  ]
                }
              />
              <Cities
                capital="Брест"
                arrayValues={
                  [
                    'Брест',
                    'Барановичи',
                    'Пинск',
                    'Кобрин',
                    'Берёза',
                    'Лунинец',
                    'Ивацевичи',
                    'Пружаны',
                    'Иваново',
                    'Дрогичин',
                    'Ганцевичи',
                    'Жабинка',
                    'Столин',
                    'Микашевичи',
                    'Малорита',
                    'Ляховичи',
                    'Каменец',
                  ]
                }
              />
              <Cities
                capital="Витебск"
                arrayValues={
                  [
                    'Витебск',
                    'Орша',
                    'Новополоцк',
                    'Полоцк',
                    'Новополоцк',
                    'Поставы',
                    'Глубокое',
                    'Лепель',
                    'Новолукомль',
                    'Городок',
                    'Барань',
                    'Браслав',
                    'Толочин',
                    'Чашники',
                    'Миоры',
                    'Сенно',
                    'Верхнедвинск',
                    'Дубровно',
                  ]
                }
              />
              <Cities
                capital="Могилёв"
                arrayValues={
                  [
                    'Могилёв',
                    'Бобруйск',
                    'Горки',
                    'Осиповичи',
                    'Кричев',
                    'Быхов',
                    'Климовичи',
                    'Шклов',
                    'Костюковичи',
                    'Чаусы',
                    'Мстиславль',
                    'Белыничи',
                    'Кировск',
                    'Чериков',
                    'Славгород',
                    'Круглое',
                    'Кличев',
                  ]
                }
              />
              <Cities
                capital="Гомель"
                arrayValues={
                  [
                    'Гомель',
                    'Мозырь',
                    'Жлобин',
                    'Речица',
                    'Светлогорск',
                    'Калинковичи',
                    'Рогачёв',
                    'Добруш',
                    'Житковичи',
                    'Хойники',
                    'Петриков',
                    'Ельск',
                    'Чечерск',
                    'Ветка',
                    'Наровля',
                  ]
                }
              />
            </WrapperCities>
          ) : null}
          {postersBookmark?.length > 0 ? (
            <WrapperBookmark>
              <Bookmarks/>
            </WrapperBookmark>
          ) : null}
        </Content>
        <Auth
          user={user}
          small={small}
          goToLogIn={goToLogIn}
          goToSignUp={goToSignUp}
          handlerPlug={handlerPlug}
          goToCreate={goToCreate}
          goToMyPosters={goToMyPosters}
          goToMyStore={goToMyStore}
          goToSettings={goToSettings}
          goToPayments={goToPayments}
          logOut={logOut}
          avatar={user?.avatar}
          nickName={user?.nickName}
          email={user?.email}
          store={user?.store}
        />
      </Container>
    </Wrapper>
  );
};


export default Header;
