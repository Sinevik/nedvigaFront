import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Item from './item/Item';
import {chooseHook} from './hooks';
import {Actions} from '../../redux/Actions';


const Container = styled.div`
  width: ${({width}) => width};
  display: flex;
  flex-wrap: wrap;
`;

const getColor = ({type, value, reduxFieldValue}) => {
  let result = '#FFFFFF';
  if (type === 'single' && value === reduxFieldValue) {
    result = '#1C7F62';
  } else if (type === 'many' && reduxFieldValue && reduxFieldValue.includes(value)) {
    result = '#1C7F62';
  }
  return result;
};

const Accumulator = (
    {
      setValueField,
      /* --------*/
      type,
      reduxFieldValue,
      reduxField,
      hook,
      width,
      values,
    },
) => {
  const callHook = chooseHook(hook);
  const {handlerClick} = callHook({
    type,
    setValueField,
    reduxField,
    reduxFieldValue,
  });
  const content = values.map((item, index) => (
    <Item
      key={index}
      color={getColor({type, value: item, reduxFieldValue})}
      handlerClick={handlerClick}
      value={item}
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


export default connect(mapStateToProps, mapDispatchToProps)(Accumulator);

Accumulator.propTypes = {
  width: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.any).isRequired,
  type: PropTypes.string.isRequired,
  setValueField: PropTypes.func,
  hook: PropTypes.string.isRequired,
  reduxFieldValue: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any),
    PropTypes.string]),
  reduxField: PropTypes.string,
};

Accumulator.defaultProps = {
  setValueField: undefined,
  reduxFieldValue: null,
  reduxField: undefined,
};
