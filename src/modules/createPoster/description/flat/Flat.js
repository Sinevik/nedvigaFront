import React from 'react';
import CombineButton from '../../../../components/combineButton/CombineButton';
import Checkboxes from '../../../../components/checkboxes/Checkboxes';
import InputText from '../../../../components/inputText/InputText';
import CombineInput from '../../../../components/combineInputText/CombineInputText';
import TextArea from '../../../../components/textArea/TextArea';
import {Button, Container, Content, Section, Title, Wrapper} from '../../style/style';
import {useTranslation} from 'react-i18next';

const comfort = [
  'furniture',
  'fridge',
  'internet',
  'kitchen-furniture',
  'washer',
  'loggia-or-balcony',
  'stove',
  'tv',
  'conditioner',
];

const squareOne = [{
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
  reduxField: 'kitchenArea',
  rule: 'area',
  maxLength: 10,
  placeholder: 'area-kitchen',
},
];

const squareTwo = [{
  reduxField: 'area',
  rule: 'area',
  maxLength: 10,
  placeholder: 'total-area',
},
{
  reduxField: 'livingArea',
  rule: 'area',
  maxLength: 10,
  placeholder: 'living-area',
},
];


const Flat = (
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
          <CombineButton
            reducer="createPoster"
            reduxField="typeApartment"
            arrayValues={['first', 'second']}
            width="100px"
            height="36px"
            fontSize="12px"
          />
        </Section>
        <Section>
          {state.typePoster === 'rent' ? (
            <React.Fragment>
              <Title>
                {t('what-amenities-are-there-in-the-apartment')}
              </Title>
              <Checkboxes
                width="100%"
                column={small}
                cellHeight="36px"
                paddingCell="0px 10px 0px 10px"
                fontSize="15px"
                arrayValues={comfort}
                reducer="createPoster"
                reduxField="comfort"
                hook="redux"
              />
            </React.Fragment>
          ) : null}
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
            {t('count-rooms')}
          </Title>
          <CombineButton
            reducer="createPoster"
            reduxField="countRooms"
            arrayValues={['1', '2', '3', '4', '5', '6+']}
            width="100px"
            height="36px"
            fontSize="12px"
          />
        </Section>
        <Section>
          <Title>
            {t('loggia')}
          </Title>
          <CombineButton
            reducer="createPoster"
            reduxField="loggia"
            arrayValues={['yes', 'no']}
            width="100px"
            height="36px"
            fontSize="12px"
          />
        </Section>
        <Section>
          <Title>
            {t('parking-place')}
          </Title>
          <CombineButton
            reducer="createPoster"
            reduxField="parkingPlace"
            arrayValues={['no', 'outside', 'underground']}
            width="100px"
            height="36px"
            fontSize="12px"
          />
        </Section>
        <Section>
          <Title>
            {t('combine-kitchen')}
          </Title>
          <CombineButton
            reducer="createPoster"
            reduxField="combineKitchen"
            arrayValues={['yes', 'no']}
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
            {t('area')} m <sup>2</sup>
          </Title>
          <CombineInput
            arrayValues={state.combineKitchen === 'yes' ? squareTwo : squareOne}
            direction="row"
            reducer="createPoster"
            hook="redux"
            width="104px"
            height="36px"
            fontSize="10px"
            unit="M"
            externalValid={parseInt(state.area.value, 10) <
            parseInt(state.livingArea.value, 10) ||
            parseInt(state.area.value, 10) <
            parseInt(state.kitchenArea.value, 10) ||
            parseInt(state.area.value, 10) <
            parseInt(state.livingArea.value, 10) +
            parseInt(state.kitchenArea.value, 10) ?
              'the-area-is-incorrectly-specified-for-example-the-total-area-is-less-than-residential' : false
            }
            sup={2}
          />
        </Section>
        <Section>
          <Title>
            {t('ceiling-height')}
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
            reduxField="ceilingHeight"
            rule="ceilingHeight"
            reducer="createPoster"
            unit="M"
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
            {t('tell-us-about-what-makes-your-apartment-special')}
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
              state.livingArea.valid,
              state.ceilingHeight.valid,
              state.yearOfConstruction.valid,
              state.description,
            ]}
          />
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Flat;
