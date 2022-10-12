import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Item} from './item/Item';
import {Actions} from '../../redux/Actions';
import {chooseHook} from './hooks';
import {useTranslation} from 'react-i18next';


const Container = styled.div`
    width: ${({width}) => width};
    min-height: ${({height}) => height};
    background: #F9F9FB;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Placeholder = styled.div`
    padding: 0px 0px 0px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.005em;
    color: #9595B1;
`;

const StorageLine = ({
  setValueField,
  /* ------ */
  hook,
  width,
  height,
  placeholder,
  reduxField,
  reduxFieldValue,
}) => {
  const {t} = useTranslation();
  const callHook = chooseHook(hook);
  const {deleteItem} = callHook(
      {
        setValueField,
        reduxFieldValue,
        reduxField,
      },
  );
  const content = useMemo(() => (
    reduxFieldValue.map((item, index) => (
      <Item
        key={index}
        height={height}
        value={item}
        deleteItem={deleteItem}
      />
    ))
  ), [reduxFieldValue]);
  return (
    <Container
      width={width}
      height={height}
    >
      {placeholder && reduxFieldValue.length === 0 ? (
        <Placeholder>
          {t(placeholder)}
        </Placeholder>
      ) : content}
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

export default connect(mapStateToProps, mapDispatchToProps)(StorageLine);


StorageLine.propTypes = {
  reduxFieldValue: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
  placeholder: PropTypes.string,
  setValueField: PropTypes.func.isRequired,
  reduxField: PropTypes.string.isRequired,
  hook: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

StorageLine.defaultTypes = {
  placeholder: undefined,
};
