import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Actions} from '../../redux/Actions';
import {chooseHook} from './hooks';
import Line from './line/Line';


const Container = styled.div`
    width: ${({width}) => width};
    display: flex;
    flex-direction: column;
`;


const ChoiceCategory = (
    {
      setValueField,
      parentFunction,
      /* ------ */
      reduxField,
      reduxFieldValue,
      hook,
      mobile,
      exceptions,
      categoryList,
      width,
    },
) => {
  const callHook = chooseHook(hook);
  const {
    chooseCategory,
    handlerClick,
    category,
  } = callHook({
    parentFunction,
    setValueField,
    reduxFieldValue,
    reduxField,
  });

  const allCategory = categoryList.concat();
  const splitBy = mobile ? 1 : 4;
  const splitCategoryArray = [];

  const splitCategory = () => {
    const item = allCategory.slice(0, splitBy);
    splitCategoryArray.push(item);
    allCategory.splice(0, splitBy);
    if (allCategory.length !== 0) {
      splitCategory();
    }
  };

  useMemo(() => {
    splitCategory();
  }, [categoryList, category, exceptions]);

  const content = splitCategoryArray.map((item, index) => (
    <Line
      key={index}
      exceptions={exceptions}
      categoryList={item}
      mobile={mobile}
      selectedCategory={category}
      handlerClick={handlerClick}
      chooseCategory={chooseCategory}
    />
  ));


  return (
    <Container
      width={width}
    >
      {content}
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  reduxFieldValue: ownProps.reducer ?
    state[ownProps.reducer][ownProps.reduxField] :
    null,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const result = ownProps.reducer ? Actions(ownProps.reducer) : {};
  return result;
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceCategory);


ChoiceCategory.propTypes = {
  hook: PropTypes.string.isRequired,
  mobile: PropTypes.bool.isRequired,
  categoryList: PropTypes.arrayOf(PropTypes.any).isRequired,
  width: PropTypes.string.isRequired,
  reduxFieldValue: PropTypes.arrayOf(PropTypes.any),
  exceptions: PropTypes.arrayOf(PropTypes.any),
  parentFunction: PropTypes.func,
  setValueField: PropTypes.func,
  reduxField: PropTypes.string,
};

ChoiceCategory.defaultProps = {
  parentFunction: undefined,
  exceptions: undefined,
  reduxFieldValue: undefined,
  reduxField: undefined,
  setValueField: undefined,
};
