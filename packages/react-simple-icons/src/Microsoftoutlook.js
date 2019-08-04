import React from 'react';
import PropTypes from 'prop-types';

const Microsoftoutlook = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M24 7.387v10.478c0 .23-.08.424-.238.576-.158.154-.352.23-.58.23h-8.547v-6.959l1.6 1.229c.102.085.229.126.379.126.148 0 .277-.041.389-.127L24 7.387zm-9.365-2.021h8.547c.211 0 .393.063.543.192.15.128.234.3.248.51l-7.369 5.876-1.969-1.549V5.366zM13.404.864v22.271L0 20.819V3.244L13.406.864h-.002zm-4.049 11.18c-.02-1.133-.313-2.072-.879-2.814-.555-.74-1.275-1.131-2.131-1.164-.824.033-1.529.423-2.1 1.164-.57.742-.855 1.682-.87 2.814.015 1.117.315 2.047.885 2.791.571.74 1.274 1.133 2.101 1.176.855-.035 1.574-.424 2.145-1.17.57-.748.87-1.68.885-2.797h-.036zm-3.12-2.482c.431.02.794.256 1.083.717.285.461.435 1.045.435 1.752 0 .721-.149 1.307-.435 1.771-.301.464-.66.704-1.096.704s-.795-.226-1.095-.69-.435-1.05-.435-1.754c0-.705.135-1.291.435-1.74.284-.45.646-.69 1.081-.721l.027-.039z" />
    </svg>
  );
};

Microsoftoutlook.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Microsoftoutlook.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Microsoftoutlook;
