import React from 'react';
import PropTypes from 'prop-types';

const Quantopian = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M1.5 0h21c.828 0 1.5.672 1.5 1.5v21c0 .828-.672 1.5-1.5 1.5h-21C.672 24 0 23.328 0 22.5v-21C0 .672.672 0 1.5 0zM3 3v18h18V3H3zm2.4 10.8h2.4v4.8H5.4v-4.8zM9 9h2.4v9.6H9V9zm3.6 2.4H15v7.2h-2.4v-7.2zm3.599-6h2.4v13.2h-2.4V5.4z" />
    </svg>
  );
};

Quantopian.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Quantopian.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Quantopian;
