import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Actions} from '../../redux/Actions';
import AddCoordHook from './AddCoordHook';
import {chooseHook} from './hooks';
import Button from '../button/Button';
import Search from '../search/Search';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
    width: 100%;
    padding: 10px;
    background: white;
`;

const WrapperMap = styled.div`
    z-index: 1;
    width: 100%;
    height:300px;
    cursor: default;
`;

const WrapperSearch = styled.div`
    width: 100%;
    padding: 0px 0px 10px 0px;
    display: flex;
    flex-direction: column;
`;

const WrapperCity = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const WrapperButton = styled.div`
    width: 100%;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Title = styled.div`
    margin: 0px;
    padding: 0px 0px 5px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #9595B1;
`;


export const AddCoord = ({
  setAddress,
  setCenterMap,
  handlerClose,
  /* --------- */
  centerMap,
  reduxFieldValue,
  fullAddress,
  city,
  hook,
}) => {
  const [mapRef, setMap] = useState(null);
  const [oldMarker, setOldMarker] = useState(null);
  const {
    searchValue,
    resultSearch,
    latLng,
    resultSearchCity,
    searchValueCity,
    handlerClickSearchCity,
    handlerSearchInputCity,
    handlerOutsideSearchCity,
    handlerClickSearch,
    handlerOutsideSearch,
    handlerSearchInput,
  } = AddCoordHook({
    centerMap,
    mapRef,
    setMap,
    setOldMarker,
    oldMarker,
    city,
    fullAddress,
  });

  const callHook = chooseHook(hook);

  const {
    handlerAddCoordinates = null,
  } = callHook({
    mapRef,
    setCenterMap,
    setAddress,
    setOldMarker,
    latLng,
    searchValueCity,
    searchValue,
    reduxFieldValue,
  });
  const {t} = useTranslation();

  return (
    <Container>
      <WrapperCity>
        <Title>
          {t('choose-a-city-or-a-nearby-city')} *
        </Title>
        <Search
          handlerChange={handlerSearchInputCity}
          handlerClick={handlerClickSearchCity}
          placeholder="text"
          width="100%"
          height="40px"
          maxHeightList="50vh"
          value={searchValueCity}
          handlerOutside={handlerOutsideSearchCity}
          arrayValue={resultSearchCity}
        />
      </WrapperCity>
      <WrapperSearch>
        <Title>
          {t('full-address-map')} *
        </Title>
        <Search
          handlerChange={handlerSearchInput}
          handlerClick={handlerClickSearch}
          placeholder="text"
          width="100%"
          height="40px"
          maxHeightList="50vh"
          value={searchValue}
          handlerOutside={handlerOutsideSearch}
          arrayValue={resultSearch}
        />
      </WrapperSearch>
      <WrapperMap id="map"/>
      {hook === 'subFormRedux' ? (
        <WrapperButton>
          <Button
            value="add"
            width="160px"
            height="48px"
            borderRadius="4px"
            fontSize="15px"
            backgroundColor="#1C7F62"
            cursor="pointer"
            onFocusColor="#43B949"
            fontColor="#F9F9FB"
            onFocusFontColor="#F9F9FB"
            boxShadow="inset 0px 0px 8px rgba(0, 0, 0, 0.04)"
            hook="parent"
            parentFunction={() => {
              handlerClose();
              handlerAddCoordinates(
                  {
                    lat: latLng.lat,
                    lng: latLng.lng,
                    fullAddress: searchValue.length > 2 ? searchValue : null,
                    city: searchValueCity.length > 2 ? searchValueCity : null,
                  },
              );
            }
            }
            fieldsCheckForDisabled={[latLng, searchValue]}
          />
        </WrapperButton>
      ) : null}
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  reduxFieldValue: state[ownProps.reducer][ownProps.reduxField],
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const result = Actions(ownProps.reducer);
  return result;
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCoord);

AddCoord.propTypes = {
  setAddress: PropTypes.func.isRequired,
  fullAddress: PropTypes.string,
  city: PropTypes.string,
  setCenterMap: PropTypes.func.isRequired,
  centerMap: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]),
  hook: PropTypes.string.isRequired,
  reduxFieldValue: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]),
};

AddCoord.defaultProps = {
  city: null,
  centerMap: null,
  fullAddress: null,
  reduxFieldValue: null,
};
