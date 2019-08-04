import React from 'react';
import PropTypes from 'prop-types';

const Wix = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M22.989 2.339h-1.554l-1.088-.003c-.861 0-1.654.655-2.261 1.176-.601.496-1.11 1.111-1.591 1.726a9.671 9.671 0 0 0-.646-1.365c-.314-.616-.914-1.201-1.605-1.336-.346-.075-.735-.045-1.08-.045h-2.31c-.352 0-.736-.045-1.081.03-.682.135-1.291.72-1.599 1.336-.24.42-.465.885-.642 1.365-.485-.615-.991-1.23-1.582-1.74-.607-.526-1.396-1.186-2.26-1.186H1.057c-.375 0-1.213-.106-1.014.51.045.15.214.285.31.405.11.135.218.285.313.435.15.24.297.48.438.736.339.6.626 1.23.963 1.831.74 1.336 1.534 2.627 2.492 3.813.709.87 1.564 1.756 2.622 2.191l-2.383 4.503c-.69 1.276-1.381 2.567-2.106 3.828l-.105.18c-.095.181-.231.436-.23.631 0 .406.6.42.9.42.316 0 .631-.014.946-.014.54-.017 1.081-.017 1.636-.031.316 0 .646.015.976-.029a2.936 2.936 0 0 0 2.056-1.171c.15-.226 1.622-2.642 2.222-3.618.225-.375.93-1.471.93-1.471s.706 1.096.931 1.471c.586.977 2.057 3.378 2.222 3.604.48.66 1.23 1.08 2.057 1.154.314.03.645.016.959.016l1.638.015h.944c.287 0 .901-.015.901-.435 0-.211-.135-.463-.239-.643l-.105-.18c-.736-1.276-1.411-2.553-2.102-3.828-.795-1.486-1.59-2.987-2.401-4.458 1.065-.435 1.905-1.32 2.627-2.191.96-1.186 1.739-2.492 2.491-3.813.33-.615.615-1.246.959-1.846.137-.255.287-.495.437-.736.091-.15.195-.3.315-.435.09-.13.256-.264.316-.405.194-.617-.609-.386-.984-.397zM10.287 5.27c.063-.007.11.159.143.495l.005.017c0 .015-.151 0-.286-.015l-.165-.03c-.075-.015-.15-.045-.225-.075-.201-.068-.321-.163-.411-.233a.528.528 0 0 1-.135-.144c.48.008.837.005 1.074-.015zm.182 2.418v-.014h.005l-.005.014zm.016-.052c-.107.117-.267.162-.42.192-.15.031-.324.054-.465-.022-.164-.085-.23-.284-.275-.45-.06-.21-.112-.438-.09-.66h.014c0-.123.045-.253.09-.363a.644.644 0 0 1 .183-.24c.213-.16.536-.16.728.03a.933.933 0 0 1 .206.312c.111.258.195.555.177.841a.6.6 0 0 1-.148.36zm2.091.412c-.021.03-.049.045-.075.06a.831.831 0 0 1-.513.15.828.828 0 0 1-.513-.15.186.186 0 0 1-.072-.06c-.009 0-.016-.015-.016-.03 0-.009.004-.017.01-.024v.039c.014-.015.039-.015.054-.015.021.015.04.03.066.045a.797.797 0 0 0 .471.135.814.814 0 0 0 .474-.135c.024-.015.045-.045.069-.06.023-.015.045-.015.06 0s.007.03-.015.045zm2.07-.69c-.045.165-.112.375-.277.45-.141.075-.316.049-.467.019-.152-.03-.31-.076-.42-.19a.604.604 0 0 1-.146-.36c-.019-.288.067-.584.179-.844a.94.94 0 0 1 .205-.312c.191-.188.514-.188.728-.03a.663.663 0 0 1 .183.24v.007c.056.113.091.235.105.36.021.225-.033.45-.09.66zm-.025-1.921c-.088.075-.21.165-.408.225a1.57 1.57 0 0 1-.227.064c-.014.005-.084.015-.164.03l-.002.026c-.131.015-.283.03-.28 0 .032-.33.078-.495.144-.495.236.03.592.03 1.072.015a.446.446 0 0 1-.135.135z" />
    </svg>
  );
};

Wix.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wix.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Wix;
