import React from 'react';
import PropTypes from 'prop-types';

const Microsoftpowerpoint = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M23.484 4h-8.542v3.186c.515-.39 1.132-.588 1.855-.588v3.098h3.074c-.015.869-.315 1.602-.901 2.193-.584.592-1.318.896-2.188.916-.675-.02-1.29-.223-1.829-.615v2.129h6.719v1.045h-6.721v1.293h6.715v1.032h-6.719v2.34h8.543c.346 0 .51-.182.51-.537V4.51c0-.342-.164-.51-.51-.51h-.006zM17.28 9.186V6.062c.87.02 1.6.322 2.188.91.586.588.891 1.326.906 2.214H17.28zm-9.024.052c-.053-.201-.14-.357-.263-.472-.12-.112-.282-.194-.483-.246-.225-.061-.457-.09-.69-.09l-.72.014v2.999h.026c.261.016.535.016.825 0 .285-.015.555-.09.809-.225.313-.225.5-.525.561-.914.06-.391.039-.766-.064-1.111v.045zM0 3.059v17.946l13.688 2.365V.63L0 3.059zm10.213 8.087c-.375.869-.935 1.425-1.684 1.665-.749.239-1.558.332-2.429.279v3.422l-1.801-.209V6.901l2.859-.149c.53-.033 1.054.025 1.566.18.515.152.922.459 1.223.922.3.461.469.996.51 1.605.037.609-.043 1.172-.244 1.687z" />
    </svg>
  );
};

Microsoftpowerpoint.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Microsoftpowerpoint.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Microsoftpowerpoint;
