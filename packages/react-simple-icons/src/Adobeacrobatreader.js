import React from 'react';
import PropTypes from 'prop-types';

const Adobeacrobatreader = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M23.598 15.368c-.71-.76-2.164-1.197-4.224-1.197-1.1 0-2.375.11-3.76.37-.782-.77-1.562-1.67-2.307-2.72-.53-.74-.993-1.52-1.42-2.29.813-2.54 1.206-4.61 1.206-6.1 0-1.672-.603-3.416-2.34-3.416-.533 0-1.066.325-1.35.8-.783 1.408-.43 4.493.917 7.54-.503 1.52-1.035 2.973-1.7 4.605-.578 1.376-1.244 2.794-1.923 4.096C2.793 18.64.267 20.49.03 21.94c-.104.547.074 1.05.457 1.45.133.11.636.545 1.48.545 2.59 0 5.32-4.28 6.707-6.86 1.065-.36 2.13-.687 3.193-1.015 1.168-.323 2.34-.583 3.405-.765 2.735 2.504 5.146 2.9 6.358 2.9 1.492 0 2.024-.617 2.203-1.122.28-.65.07-1.37-.252-1.74l.02.04zm-1.385 1.054c-.104.544-.638.906-1.386.906-.21 0-.39-.037-.603-.072-1.36-.325-2.633-1.016-3.903-2.106 1.25-.214 2.31-.25 2.98-.25.74 0 1.38.032 1.81.144.49.106 1.27.435 1.095 1.38h.02zm-7.523-1.707c-.92.19-1.914.414-2.944.693-.816.223-1.666.474-2.52.77.463-.902.854-1.774 1.208-2.603.428-1.02.78-2.07 1.135-3.046.35.61.74 1.23 1.13 1.78.64.87 1.31 1.7 1.98 2.42v-.02zM10.04 1.23c.145-.29.43-.436.678-.436.745 0 .887.868.887 1.56 0 1.168-.354 2.942-.96 4.967-1.062-2.82-1.135-5.18-.603-6.09zM6.138 18.127C4.328 21.17 2.59 23.06 1.525 23.06c-.21 0-.387-.075-.53-.183-.214-.216-.32-.472-.248-.76.213-1.09 2.236-2.613 5.392-3.99z" />
    </svg>
  );
};

Adobeacrobatreader.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Adobeacrobatreader.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Adobeacrobatreader;
