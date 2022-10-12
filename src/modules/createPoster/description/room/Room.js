import React from 'react';
import CombineButton from '../../../../components/combineButton/CombineButton';
import InputText from '../../../../components/inputText/InputText';
import TextArea from '../../../../components/textArea/TextArea';

import {Button, Container, Content, Section, Title, Wrapper} from '../../style/style';
import {useTranslation} from 'react-i18next';


const Room = (
    {state, small},
) => {
  const {t} = useTranslation();
  return (
    <Container>
      <Content width={small ? '100%' : '450px'}>
        <Section>
          <Title>
            {t('area')} m <sup>2</sup>
          </Title>
          <InputText
            maxLength={3}
            type="number"
            placeholder="text"
            width={small ? '100%' : '324px'}
            height="36px"
            fontSize="10px"
            direction="column"
            hook="redux"
            reduxField="area"
            rule="area"
            unit="M"
            sup={2}
            reducer="createPoster"
          />
        </Section>
        <Section>
          <Title>
            {t('wall-material')}
          </Title>
          <CombineButton
            reducer="createPoster"
            reduxField="wallMaterial"
            arrayValues={['cube', 'panel', 'monolith', 'block', 'other']}
            width="100px"
            height="36px"
            fontSize="12px"
          />
        </Section>
        <Section>
          <Title>
            {t('floor')}
          </Title>
          <InputText
            maxLength={3}
            type="number"
            placeholder="text"
            width={small ? '100%' : '324px'}
            height="36px"
            fontSize="10px"
            direction="column"
            hook="redux"
            reduxField="floor"
            rule="floor"
            reducer="createPoster"
          />
        </Section>
        <Section>
          <Title>
            {t('count-floors')}
          </Title>
          <InputText
            maxLength={3}
            type="number"
            placeholder="text"
            width={small ? '100%' : '324px'}
            height="36px"
            fontSize="10px"
            direction="column"
            hook="redux"
            externalValid={parseInt(state.floor.value, 10) >
            parseInt(state.countFloors.value, 10) ? 'the-number-of-floors-is-less-than-the-specified-floor' : null}
            reduxField="countFloors"
            rule="floor"
            reducer="createPoster"
          />
        </Section>
        <Section>
          <Title>
            {t('year-of-construction')}
          </Title>
          <InputText
            maxLength={3}
            type="number"
            width={small ? '100%' : '324px'}
            placeholder="text"
            height="36px"
            fontSize="10px"
            direction="column"
            hook="redux"
            reduxField="yearOfConstruction"
            rule="yearOfConstruction"
            reducer="createPoster"
          />
        </Section>
        <Section>
          <Title>
            {t('tell-us-about-what-makes-your-room-special')}
          </Title>
          <TextArea
            width={small ? '100%' : '324px'}
            height="100px"
            fontSize="15px"
            reducer="createPoster"
            maxLength={1000}
            reduxField="description"
            hook="redux"
          />
        </Section>
        <Wrapper align="center">
          <Button
            fieldsCheckForDisabled={[
              state.floor.valid,
              state.countFloors.valid,
              state.area.valid,
              state.yearOfConstruction.valid,
              state.description,
            ]}
          />
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Room;
