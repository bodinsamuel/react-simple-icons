import React from 'react';
import PropTypes from 'prop-types';

const Sourceforge = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M2.43 11.361c0-.372.303-.705.675-.705h6.968c.271-.003.486-.219.486-.488V8.713c0-.27-.219-.487-.488-.487H2.43C1.088 8.227 0 9.314 0 10.654v2.695c0 1.342 1.086 2.431 2.426 2.431h5.021c.372 0 .676.331.676.706v1.282c0 .371-.304.707-.676.707H.486c-.271 0-.485.217-.485.486v1.453c0 .268.216.486.485.486H8.13c1.34 0 2.426-1.087 2.426-2.427v-2.697c0-1.34-1.086-2.428-2.427-2.428H3.104c-.372 0-.675-.334-.675-.704v-1.283zm21.088-3.13h-5.024V5.525h5.02c.266 0 .483-.217.483-.486V3.585c0-.271-.215-.486-.484-.486h-5.019c-1.34 0-2.427 1.087-2.427 2.427v2.706H13.74c-.27 0-.484.218-.484.485v1.459c0 .268.216.484.483.484h2.325v7.953c0 .24.099.284.303.284.488 0 2.124-.91 2.124-1.688v-6.551h5.024c.266 0 .484-.218.484-.484v-1.46c0-.266-.219-.483-.484-.483h.003z" />
    </svg>
  );
};

Sourceforge.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sourceforge.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Sourceforge;
