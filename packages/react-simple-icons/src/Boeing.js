import React from 'react';
import PropTypes from 'prop-types';

const Boeing = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M6.905 17.353a6.051 6.051 0 0 1-3.759-1.301C4.35 13.337 6.8 9.694 10.143 6.136a6.07 6.07 0 0 1 2.262 7.728c-1.06-.49-2.05-1.105-2.888-1.88l1.831 3.438a6.058 6.058 0 0 1-4.443 1.931M.83 11.278a6.075 6.075 0 0 1 6.076-6.077c.9 0 1.752.196 2.522.546-3.293 2.91-5.843 6.293-7.352 9.217A6.051 6.051 0 0 1 .83 11.278m12.34 2.912a6.862 6.862 0 0 0 .642-2.912c0-2.4-1.225-4.515-3.085-5.753a49.606 49.606 0 0 1 3.583-3.342 31.172 31.172 0 0 0-4.2 2.975 6.907 6.907 0 0 0-8.436 10.625C.35 18.646.12 20.944 1.286 21.72c1.248.832 3.962-.677 5.59-3.134 0 0-2.518 2.273-3.902 1.751-.851-.322-.854-1.624-.152-3.492a6.871 6.871 0 0 0 4.084 1.338c1.893 0 3.606-.76 4.853-1.992l.245.462C15.013 16.408 24 16.17 24 16.17c0-.431-5.95-.04-10.832-1.98" />
    </svg>
  );
};

Boeing.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Boeing.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Boeing;
