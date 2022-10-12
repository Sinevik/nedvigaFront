import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Actions} from '../../redux/Actions';
import {chooseHook} from './hooks';
import ItemTopBar from './itemTopBar/ItemTopBar';


const Container = styled.div`
    width: 100%;
    background: #F5FAFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 1024px) {
      overflow-x: scroll;
      padding: 0px;
    }
`;


const TopBar = (
    {
      hook,
      edit,
      height,
      sections,
      getArrayField,
      setValueField,
      reduxField,
      reduxFieldValue,
    },
) => {
  const callHook = chooseHook(hook);
  const {handlerClick} = callHook({
    setValueField,
    reduxField,
  });

  const generalStep = 100 / sections.length;

  const lastStep = generalStep / 1.3;

  const step = (100 - lastStep) / (sections.length - 1);

  const content = useMemo(() => (
    sections.map((item, index) => (
      <ItemTopBar
        edit={edit}
        name={item.name}
        key={index}
        number={index}
        tabIndex={index}
        disabledLine={index === sections.length - 1}
        width={`${index === sections.length - 1 ? lastStep : step}%`}
        height={height}
        page={reduxFieldValue}
        handlerClick={handlerClick}
        reduxFields={getArrayField(index)}
      />
    ))
  ), [sections, reduxFieldValue]);
  return (
    <Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);


TopBar.propTypes = {
  hook: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.any).isRequired,
  getArrayField: PropTypes.func.isRequired,
  setValueField: PropTypes.func.isRequired,
  reduxFieldValue: PropTypes.number.isRequired,
  reduxField: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

TopBar.defaultProps = {};
