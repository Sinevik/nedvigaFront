import React from 'react';
import DropDownTextInput from '../../../../components/dropDownTextInput/DropDownTextInput';

import {BottomSection, Container, Content, Paragraph, Section, Spacer, SubSection, TopSection} from '../style/style';
import {useTranslation} from 'react-i18next';


const Room = ({state}) => {
  const {t} = useTranslation();
  return (
    <Container>
      <Content>
        <Section>
          <TopSection>
            <Paragraph>
              {t('price')}
            </Paragraph>
          </TopSection>
          <BottomSection>
            <SubSection>
              <DropDownTextInput
                width="45%"
                height="30px"
                placeholder="from"
                unit="руб"
                hook="redux"
                reducer="posters"
                reduxField="priceFrom"
                label="from"
                disabledDrop
              />
              <Spacer/>
              <DropDownTextInput
                width="45%"
                height="30px"
                unit="руб"
                placeholder="to"
                hook="redux"
                reducer="posters"
                reduxField="priceTo"
                label="to"
                disabledDrop
              />
            </SubSection>
          </BottomSection>
        </Section>
        <Section>
          <TopSection>
            <Paragraph>
              {t('area')}
            </Paragraph>
          </TopSection>
          <BottomSection>
            <SubSection>
              <DropDownTextInput
                width="45%"
                height="30px"
                placeholder="from"
                hook="redux"
                reducer="posters"
                reduxField="areaFrom"
                label="from"
                unit="м"
                sup={2}
                disabledDrop
              />
              <Spacer/>
              <DropDownTextInput
                width="45%"
                height="30px"
                placeholder="to"
                hook="redux"
                reducer="posters"
                reduxField="areaTo"
                unit="м"
                sup={2}
                label="to"
                disabledDrop
              />
            </SubSection>
          </BottomSection>
        </Section>
      </Content>
    </Container>
  );
};

export default Room;
