import React from 'react';
import PropTypes from 'prop-types';

const Khanacademy = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M2.469 22.395S-1.229 13.553 5.401 6.96C11.415.969 20.5.041 22.076 0c0 0 2.438 8.006-3.651 17.081-6.083 9.075-14.521 6.614-14.521 6.614s8.336-10.626 7.332-10.561c-.701.041-5.076 4.856-8.768 9.263" />
    </svg>
  );
};

Khanacademy.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Khanacademy.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Khanacademy;
