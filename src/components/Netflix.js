import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Netflix = forwardRef(function Netflix({ color = 'currentColor', size = 24, title = 'Netflix', ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M5.388.004l4.75 13.462v-.007l.377 1.06c2.088 5.91 3.21 9.077 3.216 9.084.004 0 .32.02.702.04 1.156.05 2.59.18 3.676.31.25.03.466.04.48.03L13.88 10.62l-.436-1.23-2.423-6.852c-.46-1.3-.85-2.408-.87-2.45L10.117 0H5.393zm8.509.008l-.01 5.307-.008 5.307-.437-1.232v-.002l-.565 11.811c.555 1.568.852 2.404.855 2.408.004.004.32.024.702.042 1.157.05 2.59.18 3.68.31.25.03.467.04.48.03.013-.01.02-5.42.017-12.012L18.603.01h-4.706zM5.388.002v11.992c0 6.595.007 11.997.015 12.005.008.008.416-.03.907-.086.49-.06 1.17-.13 1.51-.16.518-.05 2.068-.15 2.248-.15.052 0 .056-.27.063-5.081l.008-5.08.38 1.06.13.375.57-11.801-.19-.547-.88-2.44-.03-.087z" />
    </svg>
  );
});

Netflix.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Netflix;
