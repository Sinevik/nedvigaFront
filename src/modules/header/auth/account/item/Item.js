import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../../../svg/categories';
import {Icon as IconAccount} from '../../../../../svg/account';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
    height: 48px;
    background: #FFFFFF;
    padding: 0px 0px 0px 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #F5FAFF;
    }
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const LeftSide = styled.div`
    padding: 0px 16px 0px 0px;
`;


const WrapperImage = styled.div`
      width: 25px;
      height: 25px;
`;

const RightSide = styled.div`
`;

const Paragraph = styled.p`
  padding: 0px;
  margin: 0px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.005em;
  color: #000000;
`;


const Item = (
    {
      handlerClick,
      type,
      value = 'Мои объявления',
    },
) => {
  const {t} = useTranslation();
  return (
    <Container onClick={() => handlerClick(value)}>
      <Content>
        <LeftSide>
          <WrapperImage>
            {type === 'account' ? (
              <IconAccount name={value}/>
            ) : null}
            <Icon name={value}/>
          </WrapperImage>
        </LeftSide>
        <RightSide>
          <Paragraph>
            {t(value)}
          </Paragraph>
        </RightSide>
      </Content>
    </Container>
  );
};


export default Item;


