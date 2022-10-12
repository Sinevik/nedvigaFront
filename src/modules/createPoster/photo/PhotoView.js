import React from 'react';
import PhotoHook from './PhotoHook';
import {Button, Container, Section, Wrapper} from '../style/style';
import MultiImages from '../../../components/multiImages/MultiImages';


const CategoriesView = () => {
  const {pictures} = PhotoHook();
  let continueButton = false;
  pictures.forEach((item) => {
    if (item.path !== null) {
      continueButton = true;
    }
  });
  return (
    <Container>
      <MultiImages
        width="100%"
        height="500px"
        hook="redux"
        reduxField="pictures"
        reducer="createPoster"
      />
      <Section>
        <Wrapper padding="10px 0px 0px 0px" align="center">
          <Button
            fieldsCheckForDisabled={[
              continueButton,
            ]}
          />
        </Wrapper>
      </Section>
    </Container>
  );
};

export default CategoriesView;
