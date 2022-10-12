import React, {useMemo} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox/Checkbox';
import {useTranslation} from 'react-i18next';

const Container = styled.div`
    display: flex;
    width: ${({width}) => width};
    flex-direction: ${({column}) => column ? 'column' : 'row'};
    flex-wrap: wrap;
`;


const Wrapper = styled.div`
    width: ${({width}) => width};
    box-sizing: border-box;
    padding: 0px 4px 8px 0px;
`;

const ContentCheckbox = styled.div`
    min-height: ${({height}) => height};
    padding: ${({padding}) => padding};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
`;
const Paragraph = styled.p`
    margin: 0px;
    padding: 0px;
    user-select: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: #9595B1;
    font-size: ${({fontSize}) => fontSize};
`;

const Checkboxes = ({
  /* -----*/
  arrayValues,
  reduxField,
  reducer,
  width,
  cellHeight,
  paddingCell,
  fontSize,
  column,
}) => {
  const {t} = useTranslation();
  const content = useMemo(() => (
    arrayValues.map((item, index) => (
      <Wrapper key={index} width={column ? '70%' : '33%'}>
        <ContentCheckbox
          height={cellHeight}
          padding={paddingCell}
        >
          <Paragraph fontSize={fontSize}>
            {t(item)}
          </Paragraph>
          <Checkbox
            index={index}
            item={item}
            hook="redux"
            reduxField={reduxField}
            reducer={reducer}
          />
        </ContentCheckbox>
      </Wrapper>
    ))
  ), [arrayValues]);
  return (
    <Container
      width={width}
      column={column}
    >
      {content}
    </Container>
  );
};


export default Checkboxes;


Checkboxes.propTypes = {
  arrayValues: PropTypes.arrayOf(PropTypes.any).isRequired,
  reducer: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  reduxField: PropTypes.string.isRequired,
  cellHeight: PropTypes.string.isRequired,
  paddingCell: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
};
