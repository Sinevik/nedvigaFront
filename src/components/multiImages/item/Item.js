import React from 'react';
import styled from 'styled-components';
import Loader from 'react-js-loader';
import {useTranslation} from 'react-i18next';
import {urlProcessing} from '../../../common/image';

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;


const Wrapper = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: ${({master}) => master ? '2px solid #cc1f1f' : 'none'};
  border-radius: 16px;
  &:hover {
    opacity: 0.5
  }
`;

const Content = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
`;

const WrapperImage = styled.div`
    width: 100%;
    height: 100%;
    background:  ${({img}) => img ? `url(${urlProcessing(img, 15)}) no-repeat` : 'white'};
    background-size: cover;
`;

const Delete = styled.p`
  margin: 0px;
  padding: 10px 0px 10px 0px;
  cursor: pointer;
  text-align: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0.005em;
  color: #cc1f1f;
`;

const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #290909;
`;


const Item = (
    {
      item,
      index,
      master = true,
      path = null,
      handlerClick,
      handlerDelete,
    },
) => {
  const {t} = useTranslation();
  return (
    <Container onClick={() => handlerClick(index)}>
      <Wrapper master={master}>
        <Content>
          {path ? (
            <WrapperImage img={path}/>
          ) : (
            <Loading>
              <Loader
                type="box-rotate-z"
                bgColor={'#1C7F62'}
                title={t('loading')}
                color={'#FFFFFF'}
                size={100}/>
            </Loading>
          )}
        </Content>
      </Wrapper>
      <Delete
        onClick={(e) => {
          e.stopPropagation();
          handlerDelete(item);
        }}
      >
        {t('delete')}
      </Delete>
    </Container>
  );
};

export default Item;
