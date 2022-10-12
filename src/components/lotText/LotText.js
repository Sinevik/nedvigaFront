import React from 'react';
import PropTypes from 'prop-types';


const LotText = (
    {
      width,
      text,
      title,
    },
) => (
  <div style={{
    ...styles.container,
    width,
  }}
  >
    <div>
      {title}
    </div>
    <p>
      {text}
    </p>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid red',
  },
  text: {
    whiteSpace: 'pre',
  },
};

export default LotText;


LotText.propTypes = {
  width: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
