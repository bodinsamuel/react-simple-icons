import React from 'react';
import PropTypes from 'prop-types';

const MicroDotBlog = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M21.4 17.7c-2 2.6-1 4.8-.3 5.9.3.4-.1.4-.3.4a6 6 0 0 1-4-2.7c-.2-.1-.3-.2-.5-.1-1.4.4-2.8.7-4.3.6C5.4 21.8 0 17 0 11 0 5 5.4 0 12 0s12 4.9 12 11c0 2.5-1 4.8-2.6 6.7zM12 14l3.2 2.2a.4.4 0 0 0 .6-.4L14.6 12l3.1-2.4a.4.4 0 0 0-.2-.6h-3.9l-1.3-3.8a.4.4 0 0 0-.6 0L10.4 9h-4a.4.4 0 0 0-.1.7l3 2.4-1 3.7a.4.4 0 0 0 .5.4L12 14z" />
    </svg>
  );
};

MicroDotBlog.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MicroDotBlog.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default MicroDotBlog;
