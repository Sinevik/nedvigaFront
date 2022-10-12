import React from 'react';
import styled from 'styled-components';
import List from '../../../components/list';
import ListFirmsHook from './ListFirmsHook';
import Firm from '../firm';


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

const ListFirmsView = (
    {
      screen,
      handlerSetFirm,
    },
) => {
  const {
    firms,
    sideEffects,
    countFirms,
    maxPage,
    pageNumber,
    handlerNextPage,
  } = ListFirmsHook();
  return (
    <Container screen={screen}>
      <List
        sideEffects={sideEffects}
        countList={countFirms}
        handlerNextPage={handlerNextPage}
        pageNumber={pageNumber}
        reducer="firms"
        reduxField="pageNumber"
        maxPage={maxPage}
      >
        {firms.map((item, index) => (
          <WrapperPoster
            screen={screen}
            key={index}
          >
            <Firm
              key={index}
              id={item._id}
              legalName={item.legalName}
              fullAddress={item.address[0].fullAddress}
              img={item.avatar}
              firm={item}
              handlerClick={handlerSetFirm}
            />
          </WrapperPoster>
        ))}
      </List>
    </Container>
  );
};


export default ListFirmsView;
