import React from 'react';
import PropTypes from 'prop-types';

const Microsoftword = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M23.999 3.733V20.28c0 .141-.05.255-.149.346-.101.094-.221.138-.36.138h-8.559v-2.295h6.982v-1.045h-6.988v-1.279h6.982v-1.044H14.93v-1.29h6.98v-1.032h-6.98v-1.293h6.98v-1.044h-6.98V9.163h6.98V8.12h-6.98V6.815h6.98v-.994h-6.98V3.228h8.562c.149 0 .27.048.358.149.105.099.15.22.149.356zM13.65.641v22.722L0 21.001V3.067L13.65.637v.004zm-2.06 6.708l-1.709.105-1.096 6.785H8.76c-.054-.321-.255-1.445-.615-3.367l-.639-3.263-1.604.08-.642 3.183c-.375 1.854-.584 2.933-.639 3.236h-.015l-.975-6.25-1.47.078 1.575 7.883 1.634.105.615-3.068c.36-1.8.57-2.846.615-3.132h.045c.061.305.256 1.374.615 3.21l.615 3.158 1.77.105 1.98-8.85h-.035z" />
    </svg>
  );
};

Microsoftword.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Microsoftword.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Microsoftword;
