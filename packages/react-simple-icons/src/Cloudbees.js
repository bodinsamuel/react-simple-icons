import React from 'react';
import PropTypes from 'prop-types';

const Cloudbees = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M3.55 6.41c-.003-1.191.731-2.277 1.88-2.793a3.513 3.513 0 013.511.375l2.516-2.351C9.18-.27 5.82-.54 3.223.977.629 2.497-.578 5.434.27 8.184c.843 2.746 3.539 4.64 6.601 4.64H9.45V9.512H6.871c-1.832-.004-3.32-1.39-3.32-3.102zm13.513 4.727H14.48v3.312h2.582c1.833 0 3.317 1.387 3.317 3.098 0 1.715-1.484 3.101-3.317 3.101-1.832 0-3.32-1.382-3.324-3.093V6.41c0-1.582-.625-3.11-1.761-4.285l-2.52 2.352a2.94 2.94 0 01.734 1.933v11.145c0 3.539 3.079 6.41 6.871 6.406 3.793 0 6.868-2.871 6.868-6.414 0-3.54-3.075-6.41-6.867-6.41zm0 0" />
    </svg>
  );
};

Cloudbees.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cloudbees.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Cloudbees;
