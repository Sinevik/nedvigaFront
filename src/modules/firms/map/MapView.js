import React from 'react';
import styled from 'styled-components';
import MapHook from './MapHook';
import Search from '../../../components/search/Search';
import {Icon} from '../../../svg/components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: white;
`;

const WrapperMap = styled.div`
    width: 100%;
    border-radius: 4px;
    height:${({fullScreen}) => (fullScreen ? '100%' : '85%')};
    @media (max-width: 1024px) {
      height: calc(100% - 55px);
    }
    cursor: default;
    z-index: 1;
`;

const WrapperSearch = styled.div`
    width: 100%;
    height: ${({small}) => (small ? '55px' : '15%')};
    display: flex;
    flex-direction: row;
    align-items: ${({small}) => (small ? 'center' : 'none')};
    justify-content: space-between;
    padding: 0px;
`;

const WrapperFilter = styled.div`
    height: 24px;
    width: 24px;
`;


export const MapView = ({fullScreen, handlerOpenFilter}) => {
  const {
    searchValue,
    resultSearch,
    small,
    handlerClickSearch,
    handlerOutsideSearch,
    handlerSearchInput,
  } = MapHook({fullScreen});
  return (
    <Container>
      {!fullScreen ? (
        <WrapperSearch small={small}>
          {handlerOpenFilter ? (
            <WrapperFilter onClick={handlerOpenFilter}>
              <Icon name="filter"/>
            </WrapperFilter>
          ) : null}
          <Search
            handlerChange={handlerSearchInput}
            handlerClick={handlerClickSearch}
            placeholder="enter-the-address"
            width="100%"
            height="40px"
            maxHeightList="200px"
            value={searchValue}
            handlerOutside={handlerOutsideSearch}
            arrayValue={resultSearch}
          />
        </WrapperSearch>
      ) : null}
      <WrapperMap fullScreen={fullScreen} id="map"/>
    </Container>
  );
};


export default MapView;
