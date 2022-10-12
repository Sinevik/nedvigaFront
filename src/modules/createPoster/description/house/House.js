import React from 'react';
import CombineButton from '../../../../components/combineButton/CombineButton';
import Checkboxes from '../../../../components/checkboxes/Checkboxes';
import InputText from '../../../../components/inputText/InputText';
import CombineInput from '../../../../components/combineInputText/CombineInputText';
import TextArea from '../../../../components/textArea/TextArea';
import {Button, Container, Content, Section, Title, Wrapper} from '../../style/style';
import {useTranslation} from 'react-i18next';

const comfortOne = [
  'furniture',
  'fridge',
  'internet',
  'kitchen-furniture',
  'washer',
  'loggia-or-balcony',
  'stove',
  'tv',
  'sauna',
  'pool',
  'conditioner',
];

const comfortTwo = [
  'furniture',
  'internet',
  'loggia-or-balcony',
  'sauna',
  'pool',
];

const square = [{
  reduxField: 'area',
  rule: 'area',
  maxLength: 10,
  placeholder: 'area-total',
},
{
  reduxField: 'livingArea',
  rule: 'area',
  maxLength: 10,
  placeholder: 'area-living',
},
{
  reduxField: 'landArea',
  rule: 'area',
  maxLength: 10,
  placeholder: 'area-land',
},
];


const House = (
    {state, small},
) => {
  const {t} = useTranslation();
  return (
    <Container>
      <Content width={small ? '100%' : '700px'}>
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
            {t('state')}
          </Title>
          <CombineButton
            reducer="createPoster"
            reduxField="state"
            arrayValues={['decoration', 'not-decoration', 'building']}
            width="100px"
            height="36px"
            fontSize="12px"
          />
        </Section>
        <Section>
          <Title>
            {t('what-amenities-are-there-in-the-house')}
          </Title>
          <Checkboxes
            width="100%"
            column={small}
            cellHeight="36px"
            paddingCell="0px 10px 0px 10px"
            fontSize="15px"
            arrayValues={state.typePoster === 'rent' ? comfortOne : comfortTwo}
            reducer="createPoster"
            reduxField="comfort"
            hook="redux"
          />
        </Section>
        <Section>
          <Title>
            {t('wall-material')}
          </Title>
          <CombineButton
            reducer="createPoster"
            reduxField="wallMaterial"
            arrayValues={['cube', 'block', 'tree', 'other']}
            width="100px"
            height="36px"
            fontSize="12px"
          />
        </Section>
        <Section>
          <Title>
            {t('is-shed')}
          </Title>
          <CombineButton
            reducer="createPoster"
            reduxField="shed"
            arrayValues={['yes', 'no']}
            width="100px"
            height="36px"
            fontSize="12px"
          />
        </Section>
        {state.shed === 'yes' ? (
          <Section>
            <Title>
              {t('number-of-car-spaces-in-the-garage')}
            </Title>
            <CombineButton
              reducer="createPoster"
              reduxField="countSeatsShed"
              arrayValues={['1', '2', '3', '4+']}
              width="100px"
              height="36px"
              fontSize="12px"
            />
          </Section>
        ) : null}
        <Section>
          <Title>
            {t('count-rooms')}
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
            reduxField="countRoomsInput"
            rule="room"
            reducer="createPoster"
          />
        </Section>
        <Section>
          <Title>
            {t('count-floors')}
          </Title>
          <InputText
            maxLength={3}
            placeholder="text"
            type="number"
            width={small ? '100%' : '324px'}
            height="36px"
            fontSize="10px"
            direction="column"
            hook="redux"
            reduxField="countFloors"
            rule="floor"
            reducer="createPoster"
          />
        </Section>
        <Section>
          <Title>
            {t('area')} m <sup>2</sup>
          </Title>
          <CombineInput
            arrayValues={square}
            direction="column"
            reducer="createPoster"
            hook="redux"
            width="104px"
            height="36px"
            fontSize="10px"
            unit="M"
            externalValid={parseInt(state.landArea.value, 10) >
            parseInt(state.area.value, 10) ||
            parseInt(state.livingArea.value, 10) >
            parseInt(state.area.value, 10) ||
            parseInt(state.area.value, 10) <
            parseInt(state.livingArea.value, 10) +
            parseInt(state.landArea.value, 10) ?
              'the-area-is-incorrectly-specified-for-example-the-living-area-is-larger-than-the-total' : false
            }
            sup={2}
          />
        </Section>
        <Section>
          <Title>
            {t('year-of-construction')}
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
            reduxField="yearOfConstruction"
            rule="yearOfConstruction"
            reducer="createPoster"
          />
        </Section>
        <Section>
          <Title>
            {t('tell-us-about-what-makes-your-home-special')}
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
              state.countRoomsInput.valid,
              state.countFloors.valid,
              state.area.valid,
              state.livingArea.valid,
              state.landArea.valid,
              state.yearOfConstruction.valid,
              state.description,
            ]}
          />
        </Wrapper>
      </Content>
    </Container>
  );
};

export default House;
