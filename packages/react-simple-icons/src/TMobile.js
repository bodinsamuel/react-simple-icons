import React from 'react';
import PropTypes from 'prop-types';

const TMobile = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M13.722 1.154h.58c3.74 0 5.483 1.957 6.211 7.174l1.159-.05L21.517 0H2.484l-.187 8.278 1.114.05c.193-1.956.425-3.01.927-4.064.888-1.956 2.742-3.11 5.02-3.11h.811v18.01c0 1.907-.116 2.509-.579 2.96-.386.351-1.158.502-2.047.502h-.888v1.204h10.581v-1.204h-.893c-.883 0-1.66-.151-2.041-.502-.464-.451-.58-1.054-.58-2.96V1.154M2 10.875h4.88v4.87H2zM16.932 10.875h4.88v4.87h-4.88z" />
    </svg>
  );
};

TMobile.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TMobile.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default TMobile;
