import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Item from './components/item';
import {Actions} from '../../redux/Actions';
import {chooseHook} from './hooks';

const Container = styled.div`
     width: ${({width}) => width};
     display: flex;
     flex-direction: column;
`;

export const ListCoord = ({
  setAddress,
  /* --------- */
  width,
  reduxField,
  reduxFieldValue,
  hook,
}) => {
  const callHook = chooseHook(hook);
  const {
    handlerDeleteCoordinates,
  } = callHook({
    setAddress,
    reduxFieldValue,
    reduxField,
  });

  const content = useMemo(() => reduxFieldValue.map((address, index) => (
    <Item
      key={index}
      address={address}
      handlerDelete={() => handlerDeleteCoordinates(index)}
    />
  )), [reduxFieldValue]);


  return (
    <Container width={width}>
      {content}
    </Container>
  );
};

const mapStateToProps = (state, ownProps) => ({
  reduxFieldValue: state[ownProps.reducer][ownProps.reduxField],
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const result = Actions(ownProps.reducer);
  return result;
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCoord);

ListCoord.propTypes = {
  setAddress: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
  reduxField: PropTypes.string.isRequired,
  hook: PropTypes.string.isRequired,
  reduxFieldValue: PropTypes.arrayOf(PropTypes.any).isRequired,
};
