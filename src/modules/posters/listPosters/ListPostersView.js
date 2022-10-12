import React from 'react';
import styled from 'styled-components';
import Loader from 'react-js-loader';
import ListPostersHook from './ListPostersHook';
import Poster from '../poster';
import NumberLine from '../../../components/numberLine/NumberLine';
import Button from '../../../components/button/Button';
import List from '../../../components/list/index';
import {useTranslation} from 'react-i18next';


const Container = styled.div`
   width: 100%;
   ${({screen}) => {
    if (screen) {
      return 'height: calc(100% - 10vh); overflow-x: none; overflow-y: scroll;';
    }
  }}
`;

const WrapperPoster = styled.div`
  width: 100%;
  height: 170px;
  padding: 0px 0px 16px 0px;
  @media (max-width: 800px) {
    height: 100px;
  }
  @media (max-width: 700px) {
    height: 80px;
  }
`;

const ListPosterView = (
    {
      screen,
      handlerSetPoster,
      type,
      handlerBookmark,
      postersBookmark,
    },
) => {
  const {
    sideEffects,
    posters,
    countPosters,
    maxPage,
    pageNumber,
    handlerNextPage,
  } = ListPostersHook();
  return (
    <Container screen={screen}>
      <List
        sideEffects={sideEffects}
        countList={countPosters}
        handlerNextPage={handlerNextPage}
        pageNumber={pageNumber}
        reducer="posters"
        reduxField="pageNumber"
        maxPage={maxPage}
      >
        {posters.map((item, index) => (
          <WrapperPoster
            screen={screen}
            key={index}
          >
            <Poster
              type={type}
              handlerClick={handlerSetPoster}
              handlerBookmark={handlerBookmark}
              postersBookmark={postersBookmark}
              trim={300}
              date={item.createdAt}
              id={item._id}
              price={item.price}
              area={item.area}
              city={item.city}
              fullAddress={item.fullAddress}
              description={item.description}
              img={item.photos[0]}
              poster={item}
            />
          </WrapperPoster>
        ))}
      </List>
    </Container>
  );
};


export default ListPosterView;
