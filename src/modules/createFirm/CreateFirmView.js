import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import TopBar from '../../components/topBar/TopBar';
import {CreateFirmHook} from './CreateFirmHook';
import DescriptionView from './description/DescriptionView';
import AddressView from './address/AddressView';
import PhotoView from './photo/PhotoView';
import CategoriesView from './categories/CategoriesView';
import Button from '../../components/button/Button';


const sections = [
  {
    name: 'detailed-description',
    image: null,
  },
  {
    name: 'address',
    image: null,
  },
  {
    name: 'photo',
    image: null,
  },
  {
    name: 'categories',
    image: null,
  },
];


const Container = styled.div`
    display: flex;
    padding: 0px 4px 0px 4px;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
`;

const WrapperButton = styled.div`
    position: relative;
    padding: 0px 0px 20px 0px;
`;

const WrapperLoader = styled.div``;

const Stub = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: black;
    opacity: 0.5;
    justify-content: center;
    align-items: center;
    position: absolute;
`;

const WrapperError = styled.div`
  color: red;
`;


const getArrayField = (index, state) => {
  if (index === 0) {
    return [state.unpPhoto[0].path,
      state.legalName.valid,
      state.unp.valid,
      state.email.valid,
      state.phone[0].valid];
  }
  if (index === 1) {
    return [state.address.length > 0];
  }

  if (index === 2) {
    let continueButton = false;
    state.pictures.forEach((item) => {
      if (item.path !== null) {
        continueButton = true;
      }
    });
    return [continueButton];
  }
  if (index === 3) {
    return [state.categories.length > 0];
  }
  return [true];
};


const CreateFirmView = () => {
  const {
    page,
    error,
    state,
    sideEffects,
    goToCreateFirm,
  } = CreateFirmHook();
  let continueButton = false;
  state.pictures.forEach((item) => {
    if (item.path !== null) {
      continueButton = true;
    }
  });

  let content;
  switch (page) {
    case 0:
      content = <DescriptionView/>;
      break;
    case 1:
      content = <AddressView/>;
      break;
    case 2:
      content = <PhotoView/>;
      break;
    case 3:
      content = <CategoriesView/>;
      break;
    default:
      content = null;
  }
  return (
    <Container page={page}>
      <TopBar
        hook="redux"
        height="80px"
        sections={sections}
        reducer="createFirm"
        reduxField="page"
        getArrayField={(index) => getArrayField(index, state)}
      />
      {content}
      {page === 3 ? (
        <React.Fragment>
          {error ? (
            <WrapperError>
              {error}
            </WrapperError>
          ) : null}
          <WrapperButton>
            {sideEffects ? (
              <Stub>
                <WrapperLoader>
                  <Loader
                    type="Oval"
                    color="#1C7F62"
                    height={40}
                    width={40}
                  />
                </WrapperLoader>
              </Stub>
            ) : null}
            <Button
              value="send"
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
              reducer="auth"
              hook="parent"
              parentFunction={() => goToCreateFirm()}
              fieldsCheckForDisabled={[
                continueButton,
                state.unpPhoto[0].path,
                state.legalName.valid,
                state.unp.valid,
                state.email.valid,
                state.phone[0]?.valid,
                state.address.length > 0,
                state.categories.length > 0,
              ]}
            />
          </WrapperButton>
        </React.Fragment>
      ) : null}
    </Container>
  );
};

export default CreateFirmView;
