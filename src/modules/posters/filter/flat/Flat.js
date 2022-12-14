import React from 'react';
import DropDownTextInput from '../../../../components/dropDownTextInput/DropDownTextInput';
import DropDownCustomCheckbox from '../../../../components/dropDownCustomCheckbox/DropDownCustomCheckbox';
import DropDownCustom from '../../../../components/dropDownCustom/DropDownCustom';
import {Block, Line} from '../style/style';

const getPrice = (type) => {
  let result;

  if (type === 'sale') {
    result = [
      '20000',
      '40000',
      '50000',
      '70000',
      '100000',
      '120000',
      '150000',
      '200000',
      '300000',
      '500000',
      '700000',
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
];

const kitchenArea = [
  '5',
  '10',
  '20',
  '30',
  '40',
  '50',
];

const floor = [
  '5',
  '8',
  '9',
  '10',
  '12',
  '15',
  '20',
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


const Flat = (
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
          width="16%"
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
          width="26%"
          height="32px"
          placeholder="state"
          hook="redux"
          reducer="posters"
          reduxField="typeApartment"
          label="state"
          heightScroll={heightList}
          arrayValue={[
            'first',
            'second',
          ]}
        />
        <DropDownCustomCheckbox
          width="29%"
          height="32px"
          placeholder="wall-material"
          hook="redux"
          reducer="posters"
          reduxField="wallMaterial"
          label="???????????????? ????????"
          heightScroll={heightList}
          arrayValue={[
            'cube',
            'panel',
            'monolith',
            'block',
            'other',
          ]}
        />
        <DropDownCustomCheckbox
          width="22%"
          height="32px"
          placeholder="rooms"
          hook="redux"
          reducer="posters"
          reduxField="countRooms"
          label="rooms"
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
      <Block label="area" width="21%">
        <DropDownTextInput
          width="48%"
          height="32px"
          placeholder="from"
          hook="redux"
          reducer="posters"
          reduxField="areaFrom"
          label="from"
          unit="??"
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
          unit="??"
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
          unit="??????"
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
          unit="??????"
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
      <Line width="84%">
        <Block label="kitchen-area" width="27.5%">
          <DropDownTextInput
            width="48%"
            height="32px"
            unit="??"
            sup={2}
            placeholder="from"
            hook="redux"
            reducer="posters"
            reduxField="kitchenAreaFrom"
            label="from"
            heightScroll={heightList}
            arrayValue={kitchenArea}
          />
          <DropDownTextInput
            width="48%"
            height="32px"
            unit="??"
            sup={2}
            placeholder="to"
            hook="redux"
            reducer="posters"
            reduxField="kitchenAreaTo"
            label="to"
            heightScroll={heightList}
            arrayValue={!state.kitchenAreaFrom ?
              kitchenArea :
              reducer(kitchenArea, state.kitchenAreaFrom)}
          />
        </Block>
        <Block label="count-floors" width="23.5%">
          <DropDownTextInput
            width="48%"
            height="32px"
            placeholder="from"
            hook="redux"
            reducer="posters"
            reduxField="countFloorsFrom"
            label="from"
            heightScroll={heightList}
            arrayValue={floor}
          />
          <DropDownTextInput
            width="48%"
            height="32px"
            placeholder="to"
            hook="redux"
            reducer="posters"
            reduxField="countFloorsTo"
            label="to"
            heightScroll={heightList}
            arrayValue={floor}
          />
        </Block>
        <Block label="floor" width="23.5%">
          <DropDownTextInput
            width="48%"
            height="32px"
            placeholder="from"
            hook="redux"
            reducer="posters"
            reduxField="countFloorFrom"
            label="from"
            heightScroll={heightList}
            arrayValue={floor}
          />
          <DropDownTextInput
            width="48%"
            height="32px"
            placeholder="to"
            hook="redux"
            reducer="posters"
            reduxField="countFloorTo"
            label="to"
            heightScroll={heightList}
            arrayValue={!state.countFloorFrom ?
              floor :
              reducer(floor, state.countFloorFrom)}
          />
        </Block>
        <Block label="year-of-construction" width="22.5%">
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
    ) : null}
  </React.Fragment>
);

export default Flat;
