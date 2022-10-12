import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Actions} from '../../redux/Actions';
import {chooseHook} from './hooks';
import {Icon} from '../../svg/checkbox';


const Container = styled.div`
    width: 20%;
    outline: none;
    userSelect: none;
`;

const WrapperImage = styled.div`
  width: 24px;
  height: 24px;
`;


const Checkbox = ({
  parentFunction,
  setValueField,
  /* --------*/
  hook,
  item,
  reduxFieldValue,
  parentValue,
  setValueNullReset,
  reduxField,
  index,
}) => {
  const callHook = chooseHook(hook);
  const {handlerClick} = callHook({
    parentFunction,
    parentValue,
    setValueNullReset,
    setValueField,
    item,
    reduxField,
    reduxFieldValue,
  });

  return (
    <Container
      tabIndex={index}
      onClick={(event) => handlerClick(event)}
      role="button"
      onKeyPress={(event) => handlerClick(event)}
    >
      <WrapperImage>
        <Icon
          name={reduxFieldValue && reduxFieldValue.includes(item) ?
            'checked' :
            'not-checked'
          }
        />
      </WrapperImage>
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

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);


Checkbox.propTypes = {
  parentFunction: PropTypes.func,
  setValueField: PropTypes.func,
  hook: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  reduxFieldValue: PropTypes.arrayOf(PropTypes.any),
  parentValue: PropTypes.arrayOf(PropTypes.any),
  setValueNullReset: PropTypes.bool,
  reduxField: PropTypes.string,
  index: PropTypes.number,
};

Checkbox.defaultProps = {
  setValueField: undefined,
  index: undefined,
  reduxFieldValue: null,
  reduxField: undefined,
  parentFunction: undefined,
  parentValue: undefined,
  setValueNullReset: undefined,
};

/**/
