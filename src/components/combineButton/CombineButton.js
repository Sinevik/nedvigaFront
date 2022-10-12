import React, {useMemo} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import {Actions} from '../../redux/Actions';


const Container = styled.div`
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
`;


const Item = styled.div`
    padding: 0px 8px 8px 0px;
`;


const getBackgroundButton = (reduxFieldValue, value) => {
  const background = value === reduxFieldValue ? '#1C7F62' : '#FFFFFF';
  return background;
};

const getColorButton = (reduxFieldValue, value) => {
  const color = value === reduxFieldValue ? '#FFFFFF' : '#9595B1';
  return color;
};

const getBorder = (reduxFieldValue, value) => {
  const border = value === reduxFieldValue ? 'none' : '1px solid #EFEFF5';
  return border;
};

const CombineButton = ({
  reduxField,
  arrayValues,
  width,
  height,
  fontSize,
  reducer,
  reduxFieldValue,
}) => {
  const content = useMemo(() => (
    arrayValues.map((item, index) => (
      <Item key={index}>
        <Button
          value={item}
          width={width}
          height={height}
          fontSize={fontSize}
          reducer={reducer}
          hook="redux"
          reduxField={reduxField}
          index={index}
          backgroundColor={getBackgroundButton(reduxFieldValue, item)}
          borderRadius="4px"
          fontColor={getColorButton(reduxFieldValue, item)}
          border={getBorder(reduxFieldValue, item)}
          onFocusColor="#43B949"
          onFocusFontColor="#F9F9FB"
          onFocusBorder="none"

        />
      </Item>
    ))
  ), [arrayValues, reduxFieldValue]);
  return (
    <Container>
      {content}
    </Container>
  );
};


/**/

const mapStateToProps = (state, ownProps) => ({
  reduxFieldValue: state[ownProps.reducer][ownProps.reduxField],
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const result = Actions(ownProps.reducer);
  return result;
};


export default connect(mapStateToProps, mapDispatchToProps)(CombineButton);

CombineButton.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  reduxField: PropTypes.string.isRequired,
  arrayValues: PropTypes.arrayOf(PropTypes.any),
  reduxFieldValue: PropTypes.string,
  reducer: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
};

CombineButton.defaultProps = {
  arrayValues: undefined,
  reduxFieldValue: null,
};
