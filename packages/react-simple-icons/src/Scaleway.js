import React from 'react';
import PropTypes from 'prop-types';

const Scaleway = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M16.61 11.11v5.72a1.77 1.77 0 0 1-1.54 1.69h-4a1.43 1.43 0 0 1-1.31-1.22 1.09 1.09 0 0 1 0-.18 1.37 1.37 0 0 1 1.37-1.36h1.74a1 1 0 0 0 1-1v-3.62a1.4 1.4 0 0 1 1.18-1.39h.17a1.37 1.37 0 0 1 1.39 1.36zm-6.46 1.74V9.26a1 1 0 0 1 1-1H13a1.37 1.37 0 0 0 1.37-1.37 1 1 0 0 0 0-.17 1.45 1.45 0 0 0-1.41-1.2H9a1.81 1.81 0 0 0-1.58 1.66v5.7a1.37 1.37 0 0 0 1.37 1.37H9a1.4 1.4 0 0 0 1.15-1.4zm12-4.29V20A4.53 4.53 0 0 1 18 24h-7.58a8.57 8.57 0 0 1-8.56-8.57V4.54A4.54 4.54 0 0 1 6.4 0h7.18a8.56 8.56 0 0 1 8.56 8.56zm-2.74 0a5.83 5.83 0 0 0-5.82-5.82H6.4a1.79 1.79 0 0 0-1.8 1.8v10.89a5.83 5.83 0 0 0 5.82 5.8h7.44a1.79 1.79 0 0 0 1.54-1.48z" />
    </svg>
  );
};

Scaleway.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Scaleway.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Scaleway;
