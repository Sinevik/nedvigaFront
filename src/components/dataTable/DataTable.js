import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from './row/Row';

const Container = styled.div`
    width: ${({width}) => width};
    display: flex;
    flex-direction: column;
`;


const DataTable = (
    {
      width,
      cellHeight,
      arrayValue,
    },
) => {
  let content;
  useMemo(() => {
    content = arrayValue.map((item, index) => (
      <Row
        height={cellHeight}
        title={item.title}
        value={item.value}
        units={item.units}
        sup={item.sup}
        key={index}
      />
    ));
  }, [arrayValue]);

  return (
    <Container width={width}>
      {content}
    </Container>
  );
};


export default DataTable;


DataTable.propTypes = {
  width: PropTypes.string.isRequired,
  cellHeight: PropTypes.string.isRequired,
  arrayValue: PropTypes.arrayOf(PropTypes.any).isRequired,
};
