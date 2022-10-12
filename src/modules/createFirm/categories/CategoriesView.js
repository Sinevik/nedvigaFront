import React from 'react';
import {Container, Content, Section, Wrapper} from '../style/style';
import listCategories from './categories.json';
import ChoiceCategory from '../../../components/choiceCategory/ChoiceCategory';
import StorageLine from '../../../components/storageLine/StorageLine';
import CategoriesHook from './CategoriesHook';


const CategoriesView = () => {
  const {
    categories,
    small,
  } = CategoriesHook();


  return (
    <Container>
      <Content width="100%">
        <Section>
          <Wrapper
            width="100%"
            height="100%"
            direction="row"
            justufy="center"
          >
            <StorageLine
              width="95%"
              height="56px"
              placeholder="select-the-categories-in-which-you-want-to-place-the-company"
              reducer="createFirm"
              reduxField="categories"
              hook="redux"
            />
          </Wrapper>
        </Section>
        <Section>
          <ChoiceCategory
            width="100%"
            fontSize="10px"
            exceptions={categories}
            categoryList={listCategories}
            hook="redux"
            reduxField="categories"
            reducer="createFirm"
            mobile={small}
          />
        </Section>
      </Content>
    </Container>
  );
};

export default CategoriesView;
