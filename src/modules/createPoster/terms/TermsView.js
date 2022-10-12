import React from 'react';
import TermsHook from './TermsHook';
import CombineButton from '../../../components/combineButton/CombineButton';
import Checkboxes from '../../../components/checkboxes/Checkboxes';
import InputText from '../../../components/inputText/InputText';
import {Button, Container, Content, Section, Title, Wrapper} from '../style/style';
import {useTranslation} from 'react-i18next';

const getUnit = (state) => {
  let result;
  if (state.typePoster === 'rent') {
    if (state.typeRent === 'monthly') {
      result = 'в месяц (br)';
    } else if (state.typeRent === 'daily') {
      result = 'в сутки (br)';
    } else {
      result = 'в год (br)';
    }
  } else {
    result = 'руб';
  }
  return result;
};


const TermsView = () => {
  const {state, small} = TermsHook();
  const {t} = useTranslation();
  return (
    <Container>
      <Content width={small ? '100%' : '600px'}>
        {state.typePoster === 'rent' ? (
          <React.Fragment>
            <Section>
              <Title>
                {t('type-of-rental')}
              </Title>
              <CombineButton
                reducer="createPoster"
                reduxField="typeRent"
                arrayValues={['monthly']}
                width="100px"
                height="36px"
                fontSize="12px"
              />
            </Section>
            {state.kind === 'room' || state.kind === 'flat' || state.kind === 'house' ? (
              <Section>
                <Title>
                  {t('rental-conditions')}
                </Title>
                <Checkboxes
                  width="100%"
                  column={small}
                  cellHeight="36px"
                  paddingCell="0px 10px 0px 10px"
                  fontSize="15px"
                  arrayValues={['students', 'children', 'animals']}
                  reducer="createPoster"
                  reduxField="conditionsRent"
                  hook="redux"
                />
              </Section>
            ) : null}
          </React.Fragment>
        ) : null}
        <Section>
          <Title>
            {`${t('price')} ${getUnit(state)}`}
          </Title>
          <InputText
            maxLength={10}
            type="number"
            placeholder="text"
            width="300px"
            height="36px"
            fontSize="10px"
            direction="column"
            hook="redux"
            reduxField="price"
            rule="price"
            unit={getUnit(state)}
            reducer="createPoster"
          />
        </Section>
        <Wrapper>
          <Button
            fieldsCheckForDisabled={[
              state.price.valid,
            ]}
          />
        </Wrapper>
      </Content>
    </Container>
  );
};

export default TermsView;
