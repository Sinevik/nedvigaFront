import React from 'react';
import DropDownTextInput from '../../../../components/dropDownTextInput/DropDownTextInput';
import DropDownCustomCheckbox from '../../../../components/dropDownCustomCheckbox/DropDownCustomCheckbox';
import DropDownCustom from '../../../../components/dropDownCustom/DropDownCustom';

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
      '700000',
      '1000000',
      '1500000',
      '2000000',
    ];
  } else {
    result = [
      '50',
      '100',
      '200',
      '400',
      '600',
      '1000',
      '2000',
      '5000',
      '10000',
      '15000',
      '20000',
      '50000',
      '100000',
    ];
  }
  return result;
};

const yearOfConstruction = [
  '1950',
  '1960',
  '1970',
  '1980',
  '1990',
  '2000',
  '2005',
  '2010',
  '2015',
];


const reducer = (array, num) => {
  const getInit = (count) => {
    const trim = count.replace(/\s/g, '');
    return parseInt(trim, 10);
  };

  return array.filter((item) => getInit(item) >= getInit(num));
};


const Commercial = ({state, heightList}) => (
  <React.Fragment>
    <Line width="100%">
      <Block label="common" width="35%">
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
        <DropDownCustomCheckbox
          width="48%"
          height="32px"
          placeholder="type"
          hook="redux"
          reducer="posters"
          reduxField="typeCommercial"
          label="realty"
          heightScroll={heightList}
          arrayValue={[
            'sales',
            'industrial',
            'catering',
            'warehouse',
            'office',
            'hotel',
          ]}
        />
      </Block>
      <Block label="area" width="20%">
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
      <Block label="price" width="20%">
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
          arrayValue={getPrice(state.typePoster)}
        />
        <DropDownTextInput
          width="48%"
          height="32px"
          unit="руб"
          placeholder="to"
          hook="redux"
          reducer="posters"
          reduxField="priceTo"
          label="To"
          heightScroll={heightList}
          arrayValue={!state.priceFrom ?
            getPrice(state.typePoster) :
            reducer(getPrice(state.typePoster), state.priceFrom)}
        />
      </Block>
      <Block label="year-of-construction" width="20%">
        <DropDownTextInput
          width="48%"
          height="32px"
          placeholder="from"
          hook="redux"
          reducer="posters"
          reduxField="yearOfConstructionFrom"
          label="from"
          heightScroll={heightList}
          arrayValue={yearOfConstruction}
        />
        <DropDownTextInput
          width="48%"
          height="32px"
          placeholder="to"
          hook="redux"
          reducer="posters"
          reduxField="yearOfConstructionTo"
          label="to"
          heightScroll={heightList}
          arrayValue={!state.yearOfConstructionFrom ?
            yearOfConstruction :
            reducer(yearOfConstruction,
                state.yearOfConstructionFrom)}
        />
      </Block>
    </Line>
  </React.Fragment>
);

export default Commercial;
