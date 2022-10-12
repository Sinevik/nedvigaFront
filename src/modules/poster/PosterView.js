import React from 'react';
import styled from 'styled-components';
import Loader from 'react-js-loader';
import PosterHook from './PosterHook';
import SliderPictures from '../../components/sliderPictures/SliderPicturesMain';
import Swiper from '../../components/swiper/Swiper';
import DataTable from '../../components/dataTable/DataTable';
import Button from '../../components/button/Button';
import Contacts from '../../components/contacts/Contacts';
import Modal from '../../components/modal/Modal';
import Map from '../../components/map/MapView';
import {commercial, flat, house, land, room, shed} from './dataTable/dataTable';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
    display: flex;
    width: 100%;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;


const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: ${({direction}) => direction}; 
`;

const Block = styled.div`
    width: ${({width}) => width};
`;

const FullAddress = styled.p`
    padding: ${({padding}) => padding || '0px'};
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: ${({fontSize}) => fontSize};
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #000000;
`;

const Type = styled.p`
    margin: 0px;
    padding: ${({padding}) => padding || '0px'};
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #000000;
`;

const Specifications = styled.p`
    margin: 0px;
    padding: ${({padding}) => padding || '0px'};
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #000000;
`;


const Paragraph = styled.div`
    margin: 0px;
    padding: ${({padding}) => padding || '0px'};
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #000000;
`;


const Chapter = styled.p`
    padding: ${({padding}) => padding || '0px'};
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #9595B1;
`;


const Price = styled.div`
    padding: ${({padding}) => padding || '0px'};
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 19px;
    line-height: 24px;
    letter-spacing: 0.015em;
    color: #000000;
`;


const Span = styled.span`
    color: #1C7F62;
`;

const Wrapper = styled.div`
    display: flex;
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || 'auto'};
    flex-direction: ${({direction}) => direction || 'column'};
    justify-content: ${({justify}) => justify || 'center'};
    align-items: ${({align}) => align || 'center'};
    padding: ${({padding}) => padding || 'padding'};
    
`;


const WrapperLoader = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
`;

const Description = styled.p`
    padding: ${({padding}) => padding || '0px'};
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #9595B1;
`;

const AddBookmarks = styled.p`
  cursor: pointer;
  padding: 10px 0px 10px 0px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  text-align: right;
  letter-spacing: 0.005em;
  color: ${({color}) => color};
`;


const getDataTable = (type, data) => {
  let result = null;
  switch (type) {
    case 'flat':
      result = flat(data);
      break;
    case 'house':
      result = house(data);
      break;
    case 'dacha':
      result = house(data);
      break;
    case 'commercial':
      result = commercial(data);
      break;
    case 'shed':
      result = shed(data);
      break;
    case 'room':
      result = room(data);
      break;
    case 'land':
      result = land(data);
      break;
    default:
      result = null;
  }
  return result;
};


const PosterView = (
    {
      match,
    },
) => {
  const {
    data,
    modal,
    small,
    sideEffects,
    postersBookmark,
    closeModal,
    openModal,
    handlerBookmark,
  } = PosterHook({match});
  const dataTable = data ? getDataTable(match.params.type, data) : [];
  const {t} = useTranslation();

  return (
    <Container>
      {data ? (
        <Content>
          {!small ? (
            <React.Fragment>
              <Section direction="row">
                <Block width="70%">
                  <Wrapper align="flex-start">
                    <FullAddress
                      fontSize="24px"
                      padding="10px"
                    >
                      {data.fullAddress}
                    </FullAddress>
                    <Type
                      padding="0px 0px 30px 10px"
                    >
                      {t(data.typePoster)}
                    </Type>
                  </Wrapper>
                </Block>
                <Block width="30%">
                  <Wrapper align="flex-end">
                    <Price
                      padding="12px"
                    >
                      {data.price.toLocaleString('ru')} <Span>руб.</Span>
                    </Price>
                    <Button
                      borderRadius="4px"
                      value={t('show-contacts')}
                      width="176px"
                      height="48px"
                      fontSize="15px"
                      hook="parent"
                      parentFunction={() => openModal()}
                      fieldsCheckForDisabled={[true]}
                      backgroundColor="#1C7F62"
                      cursor="pointer"
                      onFocusColor="#43B949"
                      fontColor="#F9F9FB"
                      onFocusFontColor="#F9F9FB"
                      boxShadow="inset 0px 0px 8px rgba(0, 0, 0, 0.04)"
                    />
                  </Wrapper>
                </Block>
              </Section>
              <Section direction="row">
                <Block width="58%">
                  <Wrapper align="flex-start">
                    <SliderPictures
                      width="90%"
                      height="60vh"
                      background="#f6f6f6"
                      advanced
                      arrayUri={[
                        ...data.photos,
                      ]}
                    />
                  </Wrapper>
                </Block>
                <Block width="42%">
                  <Wrapper align="flex-start">
                    <Specifications
                      padding="0px 0px 20px 0px"
                    >
                      {t('specifications')}:
                    </Specifications>
                    <DataTable
                      width="100%"
                      title="Описание"
                      cellHeight="40px"
                      arrayValue={dataTable}
                    />
                    <AddBookmarks
                      color={postersBookmark.includes(data._id) ? '#1C7F62' : '#000000'}
                      onClick={() => handlerBookmark(data._id)}
                    >
                      Добавить в закладки
                    </AddBookmarks>
                  </Wrapper>
                </Block>
              </Section>
              <Section direction="row">
                <Block width="50%">
                  <Wrapper align="flex-start">
                    <Description
                      padding="20px 0px 20px 0px"
                    >
                      {data.description}
                    </Description>
                    {data.comfort.length > 0 ? (
                      <React.Fragment>
                        <Paragraph
                          padding="5px 0px 5px 0px"
                        >
                          {t('comfort')}:
                        </Paragraph>
                        <Chapter padding="0px 0px 20px 0px">
                          {data.comfort.map((item, index) => {
                            return `${t(item)}${index !== data.comfort.length - 1 ? ', ' : ''}`;
                          })}
                        </Chapter>
                      </React.Fragment>
                    ) : null}
                    {data.conditionsRent.length > 0 ? (
                      <React.Fragment>
                        <Paragraph padding="5px 0px 5px 0px">
                          {t('rental-conditions')}:
                        </Paragraph>
                        <Chapter padding="0px 0px 20px 0px">
                          {data.conditionsRent.map((item, index) => {
                            return `${t(item)}${index !== data.conditionsRent.length - 1 ? ', ' : ''}`;
                          })}
                        </Chapter>
                      </React.Fragment>
                    ) : null}
                  </Wrapper>
                </Block>
              </Section>
              <Section direction="row">
                <Wrapper height="200px">
                  <Map
                    location={data.location}
                  />
                </Wrapper>
              </Section>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Section direction="column">
                <Wrapper align="center">
                  <Wrapper width="90%">
                    <Block width="100%">
                      <Wrapper
                        height="50px"
                        direction="row"
                        justify="space-between"
                        align="center"
                      >
                        <Button
                          borderRadius="4px"
                          value={t('show-contacts')}
                          width="140px"
                          height="30px"
                          fontSize="11px"
                          hook="parent"
                          parentFunction={() => openModal()}
                          fieldsCheckForDisabled={[true]}
                          backgroundColor="#1C7F62"
                          cursor="pointer"
                          onFocusColor="#43B949"
                          fontColor="#F9F9FB"
                          onFocusFontColor="#F9F9FB"
                          boxShadow="inset 0px 0px 8px rgba(0, 0, 0, 0.04)"
                        />
                        <Price>
                          {data.price.toLocaleString('ru')} <Span>руб.</Span>
                        </Price>
                      </Wrapper>
                    </Block>
                    <Block width="100%">
                      <Wrapper align="flex-start">
                        <FullAddress fontSize="15px" padding="10px 0px 10px 0px">
                          {data.fullAddress}
                        </FullAddress>
                        <Type padding="0px 0px 20px 0px">
                          {t(data.typePoster)}
                        </Type>
                      </Wrapper>
                    </Block>
                    <Block width="100%">
                      <Wrapper align="flex-start">
                        <Specifications>
                          {t('specifications')}:
                        </Specifications>
                        <DataTable
                          width="100%"
                          title="Описание"
                          cellHeight="40px"
                          arrayValue={dataTable}
                        />
                        <AddBookmarks
                          color={postersBookmark.includes(data._id) ? '#1C7F62' : '#000000'}
                          onClick={() => handlerBookmark(data._id)}
                        >
                          Добавить в закладки
                        </AddBookmarks>
                      </Wrapper>
                    </Block>
                    <Block width="100%">
                      <Wrapper width="100%" align="flex-start">
                        <Swiper
                          width="100%"
                          height="40vh"
                          arrayUri={[
                            ...data.photos,
                          ]}
                        />
                      </Wrapper>
                    </Block>
                    <Block width="100%">
                      <Wrapper align="flex-start">
                        <Description
                          padding="20px 0px 20px 0px"
                        >
                          {data.description}
                        </Description>
                        {data.comfort.length > 0 ? (
                          <React.Fragment>
                            <Paragraph
                              padding="5px 0px 5px 0px"
                            >
                              {t('comfort')}:
                            </Paragraph>
                            <Chapter padding="0px 0px 20px 0px">
                              {data.comfort.map((item, index) => {
                                return `${t(item)}${index !== data.comfort.length - 1 ? ', ' : ''}`;
                              })}
                            </Chapter>
                          </React.Fragment>
                        ) : null}
                        {data.conditionsRent.length > 0 ? (
                          <React.Fragment>
                            <Paragraph padding="5px 0px 5px 0px">
                              {t('rental-conditions')}:
                            </Paragraph>
                            <Chapter padding="0px 0px 20px 0px">
                              {data.conditionsRent.map((item, index) => {
                                return `${t(item)}${index !== data.conditionsRent.length - 1 ? ', ' : ''}`;
                              })}
                            </Chapter>
                          </React.Fragment>
                        ) : null}
                      </Wrapper>
                    </Block>
                  </Wrapper>
                </Wrapper>
              </Section>
              <Section direction="row">
                <Wrapper align="center">
                  <Wrapper height="200px">
                    <Map
                      location={data.location}
                    />
                  </Wrapper>
                </Wrapper>
              </Section>
            </React.Fragment>
          )}
        </Content>
      ) : (
        <WrapperLoader>
          {sideEffects ? (
            <Loader
              type="spinner-circle"
              bgColor="#1C7F62"
              size={100}
            />
          ) : (
            <NothingFound>
              {t('nothing-found')}
            </NothingFound>
          )}
        </WrapperLoader>
      )}
      <Modal show={modal} handlerClose={closeModal}>
        <Contacts
          methods={data ? data.contacts : []}
          phone={data ? data.phone : []}
          name={data ? data.name : ''}
          owner={data ? data.owner : ''}
          typeSales={data ? data.typeSales : ''}
          handlerClose={closeModal}
        />
      </Modal>
    </Container>
  );
};


export default PosterView;
