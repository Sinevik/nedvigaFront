import {Icon} from '../../svg/components';
import Button from '../button/Button';
import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
  width: 350px;
  height: 120px;
  background: white;
  border-radius: 4px;
`;


const Header = styled.div`
  width: 100%;
  height: 30%;
  padding: 0px 10px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const SectionButton = styled.div`
  display: flex;
  flex-direction: row;
`;

const WrapperButton = styled.div`
  display: flex;
  flex-direction: row;
`;


const WrapperCancel = styled.div`
  width: auto;
  cursor: pointer;
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Cancel = styled.p`
    margin: 0px;
    padding: 0px 40px 0px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #9595B1;
`;

export const Title = styled.p`
    margin: 0px;
    padding: 0px 0px 20px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #9595B1;
`;

const WrapperClose = styled.div`
    width: 15px;
    height: 15px;
    cursor: pointer;
    padding: 0px;
`;

const Delete = (
    {
      handlerClose,
      handlerDelete,
      value,
    },
) => {
  const {t} = useTranslation();
  return (
    <Container>
      <Header>
        <WrapperClose onClick={() => handlerClose()}>
          <Icon name="close"/>
        </WrapperClose>
      </Header>
      <Content>
        <Title>{t(`are-you-sure-you-want-to-delete-${value}`)}?</Title>
        <SectionButton>
          <WrapperCancel onClick={() => handlerClose()}>
            <Cancel>
              {t('cancel')}
            </Cancel>
          </WrapperCancel>
          <WrapperButton>
            <Button
              value="delete"
              width="100px"
              height="28px"
              borderRadius="4px"
              fontSize="15px"
              backgroundColor="#C4434B"
              cursor="pointer"
              onFocusColor="#C4002A"
              fontColor="#F9F9FB"
              onFocusFontColor="#F9F9FB"
              boxShadow="inset 0px 0px 8px rgba(0, 0, 0, 0.04)"
              reducer="auth"
              hook="parent"
              parentFunction={() => handlerDelete()}
              fieldsCheckForDisabled={[true]}
            />
          </WrapperButton>
        </SectionButton>
      </Content>
    </Container>
  );
};

export default Delete;
