import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LineItem from './lineItem/LineItem';
import DropDown from '../dropDown/DropDown';
import {Hook} from './Hook';

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    height: ${({mobile}) => (mobile ? '120px' : '200px')};
    flex-direction: row;
`;


const Line = (
    {
      categoryList,
      exceptions,
      mobile,
      chooseCategory,
      handlerClick,
      selectedCategory,
    },
) => {
  const {dropDown} = Hook({
    categoryList,
    selectedCategory,
    mobile,
  });
  const content = categoryList.map((item, index) => (
    <LineItem
      key={index}
      mobile={mobile}
      image={item.img}
      name={item.name}
      selectedCategory={selectedCategory}
      chooseCategory={chooseCategory}
    />
  ));
  return (
    <Container>
      <Content mobile={mobile}>
        {content}
      </Content>
      {dropDown ? (
        <DropDown
          mobile={mobile}
          subcategories={dropDown.subcategories
              .filter((item) => !exceptions.includes(item))}
          nameCategory={dropDown.name}
          handlerClick={handlerClick}
        />
      ) : null}
    </Container>
  );
};


export default Line;

Line.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.any).isRequired,
  mobile: PropTypes.bool.isRequired,
  selectedCategory: PropTypes.string,
  chooseCategory: PropTypes.func.isRequired,
  handlerClick: PropTypes.func.isRequired,
  exceptions: PropTypes.arrayOf(PropTypes.any),
};

Line.defaultProps = {
  selectedCategory: null,
  exceptions: undefined,
};
