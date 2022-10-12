import React from 'react';
import styled from 'styled-components';
import TopBar from '../../components/topBar/TopBar';
import {CreatePosterHook} from './CreatePosterHook';
import DescriptionView from './description/DescriptionView';
import AddressView from './address/AddressView';
import PhotoView from './photo/PhotoView';
import TermsView from './terms/TermsView';
import ContactsView from './contacts/ContactsView';
import Error from './style/error/Error';
import Button from './style/button/Button';

const sections = [
  {
    name: 'photos',
    image: null,
  },
  {
    name: 'address',
    image: null,
  },
  {
    name: 'detailed-description',
    image: null,
  },
  {
    name: 'terms-of-sale',
    image: null,
  },
  {
    name: 'contact-information',
    image: null,
  },
];

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    padding: 0px 4px 0px 4px;
`;

const getDescriptionsField = (state) => {
  let result;
  switch (state.kind) {
    case 'flat':
      result = [
        state.floor.valid,
        state.countFloors.valid,
        state.area.valid,
        state.livingArea.valid,
        state.ceilingHeight.valid,
        state.yearOfConstruction.valid,
      ];
      break;
    case 'house':
      result = [
        state.countRoomsInput.valid,
        state.countFloors.valid,
        state.area.valid,
        state.livingArea.valid,
        state.landArea.valid,
        state.yearOfConstruction.valid,
      ];
      break;
    case 'dacha':
      result = [
        state.countRoomsInput.valid,
        state.countFloors.valid,
        state.area.valid,
        state.livingArea.valid,
        state.landArea.valid,
        state.yearOfConstruction.valid,
      ];
      break;
    case 'room':
      result = [
        state.floor.valid,
        state.countFloors.valid,
        state.area.valid,
        state.yearOfConstruction.valid,
      ];
      break;
    case 'land':
      result = [
        state.area.valid,
      ];
      break;
    case 'commercial':
      result = [
        state.area.valid,
        state.yearOfConstruction.valid,
      ];
      break;
    case 'shed':
      result = [
        state.area.valid,
        state.yearOfConstruction.valid,
      ];
      break;
    default:
      result = [
        state.area.valid,
      ];
  }
  return result;
};


const getArrayField = (index, state) => {
  let continueButton = false;
  state.pictures.forEach((item) => {
    if (item.path !== null) {
      continueButton = true;
    }
  });
  if (index === 0) {
    return [
      continueButton,
    ];
  }
  if (index === 1) {
    return [
      state.location.lat,
      state.location.lng,
      state.fullAddress.length > 0,
    ];
  }
  if (index === 2) {
    return getDescriptionsField(state);
  }
  if (index === 3) {
    return [
      state.price.valid,
    ];
  }
  if (index === 4) {
    return [
      state.phone.length > 0,
      state.name.valid,
    ];
  }
  return [true];
};


const CreatePosterView = ({match, history}) => {
  const {
    page,
    state,
    goToCreatePoster,
    error,
    sideEffects,
  } = CreatePosterHook({match, history});
  let content;
  switch (page) {
    case 0:
      content = <PhotoView/>;
      break;
    case 1:
      content = <AddressView/>;
      break;
    case 2:
      content = <DescriptionView/>;
      break;
    case 3:
      content = <TermsView/>;
      break;
    case 4:
      content = <ContactsView/>;
      break;
    default:
      content = null;
  }
  let continueButton = false;
  state.pictures.forEach((item) => {
    if (item.path !== null) {
      continueButton = true;
    }
  });
  return (
    <Container>
      <TopBar
        hook="redux"
        height="80px"
        sections={sections}
        reducer="createPoster"
        reduxField="page"
        edit={state.edit}
        getArrayField={(index) => getArrayField(index, state)}
      />
      {content}
      {page === 4 ? (
        <React.Fragment>
          <Error errors={error}/>
          <Button
            value="send"
            sideEffects={sideEffects}
            parentFunction={() => goToCreatePoster()}
            fieldsCheckForDisabled={[
              ...getDescriptionsField(state),
              continueButton,
              state.location.lat,
              state.location.lng,
              state.fullAddress.length > 0,
              state.price.valid,
              state.name.valid,
              state.phone[0]?.valid,
              !sideEffects,
            ]}
          />
        </React.Fragment>
      ) : null}
    </Container>
  );
};

export default CreatePosterView;
