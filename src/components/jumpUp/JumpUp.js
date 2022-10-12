import React from 'react';
import PropTypes from 'prop-types';
import {onJumpUp} from '../../common/functions';


export const JumpUp = ({
  jumpUp,
}) => (
  <div>
    {jumpUp ? (
      <div
        style={{
          ...styles.content,
        }}
        onClick={() => onJumpUp(0, 500, 'easeInOutQuint')()}
        role="button"
        tabIndex={0}
        onKeyPress={() => onJumpUp(0, 500, 'easeInOutQuint')()}
      >
        <p style={{color: 'red'}}>Вверх</p>
      </div>
    ) : null}
  </div>
);


const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
  },
};

JumpUp.propTypes = {
  jumpUp: PropTypes.bool.isRequired,
};
