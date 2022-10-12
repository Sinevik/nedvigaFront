import React from 'react';
import DropDownTextInput from '../../../../components/dropDownTextInput/DropDownTextInput';
import {Block, Line} from '../style/style';


const area = [
  '20',
  '30',
  '40',
  '50',
  '60',
  '70',
  '100',
  '120',
  '150',
  '200',
  '250',
  '500',
  '1000',
];

const price = [
  '20',
  '50',
  '100',
  '150',
  '200',
  '250',
  '300',
  '350',
  '400',
  '500',
];


const reducer = (array, num) => {
  const getInit = (count) => {
    const trim = count.replace(/\s/g, '');
    return parseInt(trim, 10);
  };

  return array.filter((item) => getInit(item) >= getInit(num));
};


const Room = ({state, heightList}) => (
  <React.Fragment>
    <Line width="50%">
      <Block label="area" width="48%">
        <DropDownTextInput
          width="48%"
          height="32px"
          placeholder="from"
          hook="redux"
          reducer="posters"
          reduxField="areaFrom"
          label="from"
          unit="м"
          sup={2}
          heightScroll={heightList}
          arrayValue={area}
        />
        <DropDownTextInput
          width="48%"
          height="32px"
          placeholder="to"
          hook="redux"
          reducer="posters"
          reduxField="areaTo"
          unit="м"
          sup={2}
          label="to"
          heightScroll={heightList}
          arrayValue={!state.areaFrom ?
            area :
            reducer(area, state.areaFrom)}
        />
      </Block>
      <Block label="price" width="48%">
        <DropDownTextInput
          width="48%"
          height="32px"
          placeholder="from"
          unit="руб"
          hook="redux"
          reducer="posters"
          reduxField="priceFrom"
          label="from"
          heightScroll={heightList}
          arrayValue={price}
        />
        <DropDownTextInput
          width="48%"
          height="32px"
          unit="руб"
          placeholder="to"
          hook="redux"
          reducer="posters"
          reduxField="priceTo"
          label="to"
          heightScroll={heightList}
          arrayValue={!state.priceFrom ?
            price :
            reducer(price, state.priceFrom)}
        />
      </Block>
    </Line>
  </React.Fragment>
);

export default Room;


/* <Container height="120px">
    <TopContainer>
      <Section width="20%">
        <TopSection>
          <Paragraph>
            Площадь
          </Paragraph>
        </TopSection>
        <BottomSection>
          <SubSection>
            <DropDownTextInput
              width="45%"
              height="30px"
              placeholder="Площадь"
              hook="redux"
              reducer="posters"
              reduxField="areaFrom"
              label="От"
              unit="м"
              sup={2}
              heightScroll="300px"
              arrayValue={area}
            />
            <Spacer />
            <DropDownTextInput
              width="45%"
              height="30px"
              placeholder="Площадь"
              hook="redux"
              reducer="posters"
              reduxField="areaTo"
              unit="м"
              sup={2}
              label="До"
              heightScroll="300px"
              arrayValue={!state.areaFrom
                ? area
                : reducer(area, state.areaFrom)}
            />
          </SubSection>
        </BottomSection>
      </Section>
      <Section width="20%">
        <TopSection>
          <Paragraph>
            Цена
          </Paragraph>
        </TopSection>
        <BottomSection>
          <SubSection>
            <DropDownTextInput
              width="45%"
              height="30px"
              placeholder="Цена"
              unit="руб"
              hook="redux"
              reducer="posters"
              reduxField="priceFrom"
              label="От"
              heightScroll="300px"
              arrayValue={price}
            />
            <Spacer />
            <DropDownTextInput
              width="45%"
              height="30px"
              unit="руб"
              placeholder="Цена"
              hook="redux"
              reducer="posters"
              reduxField="priceTo"
              label="До"
              heightScroll="300px"
              arrayValue={!state.priceFrom
                ? price
                : reducer(price, state.priceFrom)}
            />
          </SubSection>
        </BottomSection>
      </Section>
    </TopContainer>
  </Container> */
