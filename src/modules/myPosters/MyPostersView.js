import React, {useState} from 'react';
import styled from 'styled-components';
import moment from 'moment';
import MyPostersHook from './MyPostersHook';
import Poster from '../posters/poster';
import {Icon} from '../../svg/components';
import Up from './up/Up';
import Delete from '../../components/delete/Delete';
import Modal from '../../components/modal/Modal';
import {useTranslation} from 'react-i18next';
import List from '../../components/list';


const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  @media (max-width: 800px) {
    height: 90vh;
    overflow-y: scroll;
  }
  
`;


const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;


const WrapperDelete = styled.div`
  width: 10%;
  height: 154px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    height: 84px;
  }
  @media (max-width: 700px) {
    height: 64px;
  }
`;

const WrapperPoster = styled.div`
    width: 90%;
    position: relative;
    height: 170px;
    padding: 0px 0px 16px 0px;
    @media (max-width: 800px) {
      height: 100px;
  }
    @media (max-width: 700px) {
      height: 80px;
  }
`;

const WrapperSvg = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

export const Title = styled.div`
    margin: 0px;
    padding: 8px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #9595B1;
`;

const getUp = (up) => {
  const upDate = moment(up).add('days', 1);
  return moment(new Date()).isAfter(upDate);
};


const Basket = (
    {
      openModal,
      item,
    },
) => {
  const [hover, setHover] = useState(false);
  return (
    <WrapperSvg
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => openModal(item._id)}
    >
      <Icon name="delete" hover={hover}/>
    </WrapperSvg>
  );
};


const MyPostersView = ({history, match}) => {
  const {
    closeModal,
    openModal,
    handlerClick,
    handlerDelete,
    handlerNextPage,
    handlerUp,
    modal,
    small,
    sideEffects,
    posters,
    countPosters,
    maxPage,
    pageNumber,
  } = MyPostersHook({history, match});
  const {t} = useTranslation();
  return (
    <Container>
      {posters.length > 0 ? (
        <Title>{match.params.kind === 'posters' ? t('click-on-the-ad-to-edit') : t('bookmarks')}</Title>
      ) : null}
      <List
        sideEffects={sideEffects}
        countList={countPosters}
        handlerNextPage={handlerNextPage}
        pageNumber={pageNumber}
        reducer="myPosters"
        reduxField="pageNumber"
        maxPage={maxPage}
      >
        {posters.map((item, index) => (
          <Section key={index}>
            <WrapperPoster
              small={small}
            >
              <Poster
                disabledLink
                type={item.type}
                handlerClick={handlerClick}
                trim={500}
                date={item.createdAt}
                id={item._id}
                price={item.price}
                area={item.area}
                fullAddress={item.fullAddress}
                description={item.description}
                img={item.photos[0]}
                poster={item}
              />
              {match.params.kind === 'posters' && getUp(item.up) ? <Up handlerUp={handlerUp} id={item._id}>
                Up
              </Up> : null}
            </WrapperPoster>
            <WrapperDelete>
              <Basket item={item} openModal={openModal} />
            </WrapperDelete>
          </Section>
        ))}
      </List>
      <Modal show={modal} handlerClose={closeModal}>
        <Delete
          handlerClose={() => closeModal()}
          handlerDelete={() => handlerDelete()}
          value={match.params.kind}
        />
      </Modal>
    </Container>
  );
};

export default MyPostersView;
