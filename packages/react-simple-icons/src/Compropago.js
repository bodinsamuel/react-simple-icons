import React from 'react';
import PropTypes from 'prop-types';

const Compropago = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M19.32 7.778h-.003c-.604-.604-1.508-.604-2.11 0l-.15.15-.905.904-6.926 6.934-1.512 1.507c-.45.452-1.2.755-1.962.755-.75 0-1.5-.303-2.102-.904-.6-.603-.903-1.355-.903-2.11 0-.754.3-1.507.9-2.11l8.89-8.893c-1.206-1.205-3.015-1.205-4.222 0l-6.63 6.783c-2.263 2.262-2.263 6.03 0 8.44 2.26 2.264 6.028 2.264 8.44 0L19.47 9.89c.453-.605.453-1.507-.15-2.112zM22.18 4.772v-.01c-2.26-2.26-6.028-2.26-8.438 0l-9.19 9.347c-.6.603-.6 1.507 0 2.11.61.603 1.512.603 2.112 0l.15-.15.91-.905 6.934-6.935 1.344-1.355.15-.15c.45-.453 1.205-.754 1.96-.754s1.507.302 2.108.905c.605.61.904 1.362.904 2.113 0 .75-.3 1.512-.904 2.11l-8.893 8.89c1.207 1.212 3.014 1.212 4.22 0l6.786-6.776c2.262-2.413 2.262-6.027-.152-8.44z" />
    </svg>
  );
};

Compropago.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Compropago.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Compropago;
