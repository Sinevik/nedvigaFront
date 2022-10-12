import React from 'react';
import styled from 'styled-components';
import Loader from 'react-js-loader';
import FirmHook from './FirmHook';
import Swiper from '../../components/swiper/Swiper';
import SliderPictures from '../../components/sliderPictures/SliderPicturesMain';
import Button from '../../components/button/Button';
import Contacts from '../../components/contacts/Contacts';
import Modal from '../../components/modal/Modal';
import Map from '../../components/map/MapView';
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

const LegalName = styled.p`
    width: 600px;
    padding: ${({padding}) => padding || '0px'};
    margin: 0px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: ${({fontSize}) => fontSize};
    line-height: 32px;
    display: flex;
    align-items: center;
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
    color: #70AAEC;
`;

const Wrapper = styled.div`
    display: flex;
    width: ${({width}) => width || '100%'};
    height: ${({height}) => height || 'auto'};
    flex-direction: ${({direction}) => direction || 'column'};
    justify-content: ${({justify}) => justify || 'center'};
    align-items: ${({align}) => align || 'center'};
    padding: ${({padding}) => padding || '0px 0px 0px 0px'};
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

const WrapperImage = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    flex-shrink: 0;
    objectFit: cove;
    cursor: pointer;
    background:  ${({uri}) => uri ? `url(${uri}) no-repeat` : 'white'};
    background-size: cover;
    border-radius: 4px;
    @media (max-width: 1024px) {
      width: 70px;
      height: 70px;
   }
    
`;


const FirmView = (
    {
      match,
    },
) => {
  const {
    data,
    modal,
    small,
    sideEffects,
    closeModal,
    openModal,
  } = FirmHook({match});
  const {t} = useTranslation();
  return (
    <Container>
      {data ? (
        <Content>
          {!small ? (
            <React.Fragment>
              <Section padding="0px 0px 20px 0px" direction="row">
                <Block width="70%">
                  <Wrapper
                    direction="row"
                    justify="flex-start"
                    padding="0px 0px 20px 0px"
                  >
                    <WrapperImage uri={data.avatar}/>
                    <LegalName padding="0px 0px 0px 10px">
                      {data.legalName}
                    </LegalName>
                  </Wrapper>
                </Block>
                <Block width="30%">
                  <Wrapper align="flex-end">
                    <Button
                      borderRadius="4px"
                      value="show-contacts"
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
                <Block width="65%">
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
                <Block width="35%">
                  <Wrapper align="flex-start">
                    <Specifications>
                      {t('description')}:
                    </Specifications>
                    <Description
                      padding="10px 0px 20px 0px"
                    >
                      {data.description}
                    </Description>
                  </Wrapper>
                </Block>
              </Section>
              <Section direction="row">
                <Wrapper padding="20px 0px 0px 0px" height="200px">
                  <Map
                    location={{
                      coordinates: [data.address[0].lat, data.address[0].lng],
                    }}
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
                          value="show-contacts"
                          width="110px"
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
                      </Wrapper>
                    </Block>
                    <Block width="100%">
                      <Wrapper direction="row" justify="flex-start">
                        <WrapperImage uri={data.avatar}/>
                        <LegalName padding="0px 0px 0px 10px">
                          {data.legalName}
                        </LegalName>
                      </Wrapper>
                    </Block>
                    <Block width="100%">
                      <Wrapper align="flex-start">
                        <Specifications padding="20px 0px 0px 0px">
                          {t('description')}:
                        </Specifications>
                        <Description
                          padding="10px 0px 20px 0px"
                        >
                          {data.description}
                        </Description>
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
                  </Wrapper>
                </Wrapper>
              </Section>
              <Section direction="row">
                <Wrapper align="center">
                  <Wrapper height="200px">
                    <Map
                      location={{
                        coordinates: [data.address[0].lat, data.address[0].lng],
                      }}
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
          email={data ? data.email : ''}
          owner={data ? data.owner : ''}
          webSite={data ? data.webSite : ''}
          handlerClose={closeModal}
        />
      </Modal>
    </Container>
  );
};


export default FirmView;


/**/
