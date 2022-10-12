import React from 'react';
import CombineButton from '../../../../components/combineButton/CombineButton';
import InputText from '../../../../components/inputText/InputText';
import TextArea from '../../../../components/textArea/TextArea';

import {Button, Container, Content, Section, Title, Wrapper} from '../../style/style';
import {useTranslation} from 'react-i18next';


const Land = (
    {state, small},
) => {
  const {t} = useTranslation();
  return (
    <Container>
      <Content width={small ? '100%' : '400px'}>
        <Section>
          <Title>
            {t('select-the-type-of-poster')}
          </Title>
          <CombineButton
            reducer="createPoster"
            reduxField="typePoster"
            arrayValues={['rent', 'sale']}
            width="100px"
            height="36px"
            fontSize="12px"
          />
        </Section>
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
            {t('tell-us-about-what-makes-your-land-special')}
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
              state.area.valid,
              state.description,
            ]}
          />
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Land;
