import React from 'react';
import PropTypes from 'prop-types';

const Netflix = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M5.39.004l4.75 13.46v-.007l.376 1.06c2.088 5.908 3.21 9.075 3.216 9.082.004 0 .32.02.702.04 1.156.05 2.59.18 3.676.31.25.03.466.04.48.03l-4.71-13.36-.436-1.23-2.423-6.85c-.46-1.3-.85-2.408-.87-2.45L10.12 0H5.395zM13.898.012l-.01 5.306-.008 5.306-.437-1.232V9.39l-.565 11.81c.555 1.567.852 2.403.855 2.407.004.004.32.024.702.042 1.157.05 2.59.18 3.68.31.25.03.467.04.48.03s.02-5.42.017-12.01L18.604.01h-4.706zM5.39.002v11.99c0 6.594.007 11.995.015 12.003s.416-.03.907-.086c.49-.06 1.17-.13 1.51-.16.518-.05 2.068-.15 2.248-.15.052 0 .056-.27.063-5.08l.008-5.08.38 1.06.13.376.57-11.8-.19-.546-.88-2.44-.03-.087H5.39z" />
    </svg>
  );
};

Netflix.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Netflix.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Netflix;
