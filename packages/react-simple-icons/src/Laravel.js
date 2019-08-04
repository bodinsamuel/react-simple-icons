import React from 'react';
import PropTypes from 'prop-types';

const Laravel = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M6.46 13.27L.07 2.6A3.18 3.18 0 0 1 3.2.01h17.62c1.32 0 2.45.8 2.93 1.94-.52-.48-.83-.36-1.2-.3-.46.06-5.7.94-6.3 1.05-.62.1-1 .34-.62.87l4.53 6.42-13.7 3.28zm-.91 2.16L0 16.88v3.93A3.2 3.2 0 0 0 3.2 24h7.19c-.94-1.53-3.5-6.15-4.83-8.56h-.01zm10.25 8.56h5.02c1.68 0 3.05-1.3 3.17-2.93l-8.19 2.93zM4.44 13.36L.02 5.73v9.1l4.33-1.04c.35-.08.26-.12.09-.43zM23.37 3.12c-.25-.34-.43-.29-.63-.24-.2.05-4.77.87-5.05.9-.28.05-.19.2-.07.36l4 5.5L24 9.07V3.93a35.8 35.8 0 0 1-.63-.8zm-2.57 8.34L7.44 14.94s4.1 7.1 4.41 7.55c.32.46.51.42.76.32.18-.08 7.8-2.66 11.39-3.87V15.13l-2.56-3.5c-.16-.25-.25-.3-.64-.17zm1.95-.36L24 12.78V10.59l-1.35.37.1.14z" />
    </svg>
  );
};

Laravel.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Laravel.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Laravel;
