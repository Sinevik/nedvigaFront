import React, {useState} from 'react';
import styled from 'styled-components';
import Loader from 'react-js-loader';
import Button from '../button/Button';
import NumberLine from '../numberLine/NumberLine';
import {useMedia} from 'react-media';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  width: ${({small}) => (small ? '98%' : '100%')};
`;

const WrapperLoader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 0px 20px 0px;
`;

const WrapperNumberLine = styled.div`
  width: ${({small}) => (small ? '98%' : '100%')};
  height: 40px;
  display: flex;
  flex-direction: row;
`;

const WrapperButton = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const WrapperLine = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const NothingFound = styled.p`
  margin: 0px;
  padding: 0px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: #9595B1;
  text-align: center;
`;


const List = (
    {
      children,
      sideEffects,
      countList,
      handlerNextPage,
      pageNumber,
      maxPage,
      reducer,
      reduxField,
    },
) => {
  const {t} = useTranslation();
  const GLOBAL_MEDIA_QUERIES = {
    small: '(max-width: 1024px)',
  };
  const {small} = useMedia({queries: GLOBAL_MEDIA_QUERIES});
  const [openLine, setOpenNumberLine] = useState(true);
  return (
    <Container>
      <Content small={small}>
        {sideEffects ? (
          <WrapperLoader>
            <Loader
              type="spinner-circle"
              bgColor="#1C7F62"
              size={100}
            />
          </WrapperLoader>
        ) : (
          <React.Fragment>
            {!children || children.length === 0 ? (
              <NothingFound>
                {t('nothing-found')}
              </NothingFound>
            ) : (
              children
            )}
          </React.Fragment>
        )}
      </Content>
      {countList > 20 && !sideEffects ? (
        <WrapperNumberLine small={small}>
          <WrapperButton>
            {!openLine && (pageNumber < maxPage) && !sideEffects ? (
              <Button
                borderRadius="4px"
                hook="parent"
                value="next-20-pages"
                width="164px"
                height="32px"
                fontSize="12px"
                parentFunction={() => {
                  window.scrollTo(0, 0);
                  handlerNextPage();
                }}
                backgroundColor="#FFFFFF"
                onFocusColor="#43B949"
                fontColor="#63637E"
                onFocusFontColor="#F9F9FB"
                border="1px solid #EFEFF5"
                onFocusBorder="none"
                fieldsCheckForDisabled={[true]}
                cursor="pointer"
              />
            ) : null}
          </WrapperButton>
          <WrapperLine>
            <NumberLine
              width={small ? '200px' : '700px'}
              handlerClick={(stateLine) => setOpenNumberLine(stateLine)}
              height="40px"
              fontSize="12px"
              number={countList}
              widthCell="24px"
              heightCell="24px"
              hook="redux"
              reducer={reducer}
              reduxField={reduxField}
            />
          </WrapperLine>
        </WrapperNumberLine>
      ) : null}
    </Container>
  );
};

export default List;
