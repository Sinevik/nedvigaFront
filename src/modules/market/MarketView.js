import React from 'react';
import styled from 'styled-components';
import MarketHook from './MarketHook';
import listCategories from '../createFirm/categories/categories.json';
import ChoiceCategory from '../../components/choiceCategory/ChoiceCategory';
import Button from '../../components/button/Button';
import {useTranslation} from 'react-i18next';


const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`;


const Header = styled.div`
    margin: 0px;
    width: 100%;
`;

const Paragraph = styled.div`
    margin: 0px;
    padding: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #000000;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WrapperCategories = styled.div`
    width: 100%;
`;

const WrapperAddCompany = styled.div`
    width: 90%;
    padding: 40px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


const MarketView = () => {
  const {
    goToAddHistory,
    goToFirms,
    small,
  } = MarketHook();
  const {t} = useTranslation();
  return (
    <Container>
      <Header>
        <Paragraph>
          {t('construction-market')}
        </Paragraph>
      </Header>
      <Content>
        <WrapperCategories>
          <ChoiceCategory
            width="100%"
            exceptions={[]}
            categoryList={listCategories}
            hook="parent"
            parentFunction={(value) => goToFirms(value)}
            mobile={small}
          />
        </WrapperCategories>
      </Content>
    </Container>
  );
};

export default MarketView;

/*  <WrapperAddCompany>
          <Button
            borderRadius="4px"
            value="add-your-company"
            width="220px"
            height="48px"
            fontSize="15px"
            hook="parent"
            parentFunction={() => goToAddHistory()}
            fieldsCheckForDisabled={[true]}
            backgroundColor="#1C7F62"
            cursor="pointer"
            onFocusColor="#43B949"
            fontColor="#F9F9FB"
            onFocusFontColor="#F9F9FB"
            boxShadow="inset 0px 0px 8px rgba(0, 0, 0, 0.04)"
          />
        </WrapperAddCompany>*/
