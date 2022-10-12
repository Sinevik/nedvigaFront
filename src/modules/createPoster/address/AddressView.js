import React from 'react';
import AddresHook from './AddressHook';
import AddCoord from '../../../components/addСoord/AddCoord';
import {Button, Container, Content, Section, Wrapper} from '../style/style';


const AddressView = () => {
  const {centerMap, state, small} = AddresHook();
  return (
    <Container>
      <Content width={small ? '100%' : '1000px'}>
        <Section>
          <AddCoord
            centerMap={centerMap}
            fullAddress={state.fullAddress}
            city={state.city}
            reduxField="location"
            reducer="createPoster"
            numberField={5}
            hook="redux"
          />
        </Section>
        <Wrapper align="center">
          <Button
            fieldsCheckForDisabled={[
              state.location.lat,
              state.location.lng,
              state.fullAddress.length > 0,
            ]}
          />
        </Wrapper>
      </Content>
    </Container>
  );
};

export default AddressView;
