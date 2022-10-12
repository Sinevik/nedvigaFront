import React from 'react';
import DropDownTextInput from '../../../../components/dropDownTextInput/DropDownTextInput';
import DropDownCustom from '../../../../components/dropDownCustom/DropDownCustom';
import {Block, Line} from '../style/style';


const getPrice = (type) => {
  let result;

  if (type === 'sale') {
    result = [
      '40000',
      '50000',
      '70000',
      '100000',
      '120000',
      '150000',
      '200000',
      '250000',
      '300000',
      '400000',
      '500000',
    ];
  } else {
    result = [
      '50',
      '100',
      '200',
      '400',
      '500',
      '700',
      '1400',
      '1800',
      '2500',
      '3000',
      '4000',
      '6000',
      '8000',
      '10000',
    ];
  }
  return result;
};


const area = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '1000',
  '1200',
  '1500',
];


const reducer = (array, num) => {
  const getInit = (count) => {
    const trim = count.replace(/\s/g, '');
    return parseInt(trim, 10);
  };

  return array.filter((item) => getInit(item) >= getInit(num));
};


const Land = ({state, heightList}) => (
  <React.Fragment>
    <Line width="70%">
      <Block label="common" width="32%">
        <DropDownCustom
          width="48%"
          height="32px"
          placeholder="type"
          hook="redux"
          reducer="posters"
          reduxField="typePoster"
          label="type"
          heightScroll={heightList}
          arrayValue={[
            'rent',
            'sale',
          ]}
        />
      </Block>
      <Block label="area" width="32%">
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
      <Block label="price" width="32%">
        <DropDownTextInput
          width="48%"
          height="32px"
          placeholder="from"
          unit="руб"
          hook="redux"
          reducer="posters"
          reduxField="priceFrom"
          label="От"
          heightScroll={heightList}
          arrayValue={getPrice(state.typePoster)}
        />
        <DropDownTextInput
          width="48%"
          height="32px"
          unit="руб"
          placeholder="from"
          hook="redux"
          reducer="posters"
          reduxField="priceTo"
          label="До"
          heightScroll={heightList}
          arrayValue={!state.priceFrom ?
            getPrice(state.typePoster) :
            reducer(getPrice(state.typePoster), state.priceFrom)}
        />
      </Block>
    </Line>
  </React.Fragment>
);

export default Land;
