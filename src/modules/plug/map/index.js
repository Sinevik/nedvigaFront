import React, {useState} from 'react';
import styled from 'styled-components';
import SvgArea from './svg';
import PopUp from './popup';
import {useMedia} from 'react-media';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px 0px 10px 0px;
  flex-direction: row;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 95%;
  max-width: 1000px;
  height: ${({small}) => small ? '250px' : '700px'};
`;


const Map = (
    {
      name,
      history,
    },
) => {
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const [area, setArea] = useState(null);
  const handlerMap = (value) => {
    setArea(value);
  };

  return (
    <Wrapper>
      <Content small={small} onMouseLeave={() => setArea(null)}>
        <SvgArea
          handlerMap={handlerMap}
          area={area}
          small={small}
        />
        {area === 'vitebsk' ? (
          <PopUp
            history={history}
            small={small}
            handlerClose={() => setArea(null)}
            top="-10%"
            left="30%"
            triangle="30%"
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
        ) : null}
        {area === 'mogilev' ? (
          <PopUp
            history={history}
            small={small}
            handlerClose={() => setArea(null)}
            top="20%"
            left="50%"
            triangle="30%"
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
        ) : null}
        {area === 'gomel' ? (
          <PopUp
            history={history}
            small={small}
            handlerClose={() => setArea(null)}
            top="50%"
            left="50%"
            triangle="30%"
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
        ) : null}
        {area === 'brest' ? (
          <PopUp
            history={history}
            small={small}
            handlerClose={() => setArea(null)}
            top="50%"
            left="0%"
            triangle="30%"
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
        ) : null}
        {area === 'grodno' ? (
          <PopUp
            history={history}
            small={small}
            handlerClose={() => setArea(null)}
            top="15%"
            left="10%"
            triangle="30%"
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
        ) : null}
        {area === 'minsk' ? (
          <PopUp
            history={history}
            small={small}
            handlerClose={() => setArea(null)}
            top="20%"
            left="30%"
            triangle="30%"
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
        ) : null}
      </Content>
    </Wrapper>
  );
};

export default Map;
