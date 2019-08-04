import React from 'react';
import PropTypes from 'prop-types';

const Furaffinity = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M16.821 5.133l-.26 1.992 2.435.717.031 2.152 2.231.041-.056 2.255 2.171-.141c.003-.759.05-5.045.626-7.016h-7.178zM11.356 18.24c.056-.213 0-.906 0-1.146l-.049-1.463c-2.021-.085-4.2.322-4.2 2.187 0 .403.169.768.426 1.049h3.312c.248-.142.434-.335.511-.627zM20.389 13.066l.052-2.247-2.202-.04-.035-2.425-2.527-.861.338-2.36h-9.43C2.767 5.133 0 8.385 0 11.95v6.916h4.116a5.381 5.381 0 0 1-.023-.754c.148-3.665 4.199-4.294 7.241-4.204v-1.056c-.05-.852-.74-1.605-2.74-1.605-1.333 0-2.915.171-3.939.541l.272-2.384c.978-.277 2.08-.545 4.453-.545 4.572 0 5.077 2.029 5.04 4.383l-.021 5.624h2.479v-.002l.096.002c3.303 0 6.021-2.692 6.362-5.915l-2.947.115z" />
    </svg>
  );
};

Furaffinity.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Furaffinity.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Furaffinity;
