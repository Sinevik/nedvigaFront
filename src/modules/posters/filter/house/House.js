import React from 'react';
import DropDownTextInput from '../../../../components/dropDownTextInput/DropDownTextInput';
import DropDownCustomCheckbox from '../../../../components/dropDownCustomCheckbox/DropDownCustomCheckbox';
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
      '150',
      '200',
      '250',
      '300',
      '350',
      '400',
      '450',
      '500',
      '600',
      '700',
      '1000',
      '1500',
      '2000',
    ];
  }
  return result;
};


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
];

const landArea = [
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


const House = (
    {
      state,
      show,
      heightList,
    },
) => (
  <React.Fragment>
    <Line width="100%">
      <Block label="common" width="48%">
        <DropDownCustom
          width="32%"
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
          width="32%"
          height="32px"
          placeholder="state"
          hook="redux"
          reducer="posters"
          reduxField="state"
          label="state"
          heightScroll={heightList}
          arrayValue={[
            'decoration',
            'not-decoration',
            'building',
          ]}
        />
        <DropDownCustomCheckbox
          width="32%"
          height="32px"
          placeholder="wall-material"
          hook="redux"
          reducer="posters"
          reduxField="wallMaterial"
          label="wall-material"
          heightScroll={heightList}
          arrayValue={[
            'cube',
            'block',
            'tree',
            'other',
          ]}
        />
      </Block>
      <Block label="area" width="21%">
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
      <Block label="price" width="27.5%">
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
          label="to"
          heightScroll={heightList}
          arrayValue={!state.priceFrom ?
            getPrice(state.typePoster) :
            reducer(getPrice(state.typePoster), state.priceFrom)}
        />
      </Block>
    </Line>
    {show ? (
      <Line width="60%">
        <Block label="land-area" width="32%">
          <DropDownTextInput
            width="45%"
            height="32px"
            unit="м"
            sup={2}
            placeholder="from"
            hook="redux"
            reducer="posters"
            reduxField="landAreaFrom"
            label="from"
            heightScroll={heightList}
            arrayValue={landArea}
          />
          <DropDownTextInput
            width="45%"
            height="32px"
            unit="м"
            sup={2}
            placeholder="to"
            hook="redux"
            reducer="posters"
            reduxField="landAreaTo"
            label="to"
            heightScroll={heightList}
            arrayValue={!state.landAreaFrom ?
              landArea :
              reducer(landArea, state.landAreaFrom)}
          />
        </Block>
        <Block label="count-floors" width="32%">
          <DropDownCustomCheckbox
            width="100%"
            height="32px"
            placeholder="count-floors"
            hook="redux"
            reducer="posters"
            reduxField="countFloors"
            label="Этажы"
            heightScroll={heightList}
            arrayValue={[
              '1',
              '2',
              '3',
              '4',
              '5',
              '6+',
            ]}
          />
        </Block>
        <Block label="year-of-construction" width="32%">
          <DropDownTextInput
            width="45%"
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
            width="45%"
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
    ) : null}
  </React.Fragment>
);

export default House;
