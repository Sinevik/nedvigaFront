import React, {useMemo} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {InputItem} from './inputItem/InputItem';
import {Warning} from './warning/Warning';
import Approved from './approved/Approved';
import {Actions} from '../../redux/Actions';
import {chooseHook} from './hooks';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: ${({height}) => height};
`;

const WrapperWarning = styled.div`
    width: 100%;
    min-height: 16px;
    padding: 5px 0px 0px 0px;
    box-sizing: content-box;
`;

const WrapperApproved = styled.div`
      height: 100%;
`;

const CombineInput = ({
  setValueField,
  setSelectedCombineInput,
  /* -----*/
  arrayValues,
  width,
  height,
  fontSize,
  externalValid,
  receivedValueFromReducer,
  hook,
}) => {
  const callHook = chooseHook(hook);
  const {handlerText, handlerClick} = callHook(
      {setValueField, setSelectedCombineInput},
  );
  const fieldTracked = arrayValues.map((item) => item.reduxField);
  const memorized = [];
  Object.keys(receivedValueFromReducer).forEach((key) => {
    if (fieldTracked.includes(key)) {
      memorized.push(receivedValueFromReducer[key]);
    }
  });
  const content = useMemo(() => (
    arrayValues.map((item, index) => (
      <InputItem
        receivedValueFromReducer={receivedValueFromReducer}
        handlerText={handlerText}
        handlerClick={handlerClick}
        key={item.reduxField}
        reduxField={item.reduxField}
        rule={item.rule}
        maxLength={item.maxLength}
        placeholder={item.placeholder}
        width={width}
        height={height}
        fontSize={fontSize}
        number={index}
      />
    ))
  ), [memorized]);
  const background = arrayValues.some(
      (item) => !receivedValueFromReducer[item.reduxField].valid);

  return (
    <Container>
      <Wrapper
        height={height}
      >
        {content}
        <WrapperApproved>
          {!background && !externalValid ? (
            <Approved/>
          ) : null}
        </WrapperApproved>
      </Wrapper>
      <WrapperWarning>
        <Warning
          text={receivedValueFromReducer.selectedInput ?
            receivedValueFromReducer[
                receivedValueFromReducer.selectedInput].warning :
            null
          }
          externalValid={externalValid}
        />
      </WrapperWarning>
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  receivedValueFromReducer: state[ownProps.reducer],
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const result = Actions(ownProps.reducer);
  return result;
};

export default connect(mapStateToProps, mapDispatchToProps)(CombineInput);


CombineInput.propTypes = {
  setValueField: PropTypes.func.isRequired,
  setSelectedCombineInput: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  arrayValues: PropTypes.arrayOf(PropTypes.any),
  externalValid: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  receivedValueFromReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  hook: PropTypes.string.isRequired,
};

CombineInput.defaultProps = {
  arrayValues: undefined,
  externalValid: undefined,
};
