import React from 'react';
import PropTypes from 'prop-types';

const Deezer = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M14.717 18.695h4.375V17.37h-4.377v1.325h.002zm-9.81 0H9.28V17.37H4.906v1.325h.004zm-4.907 0h4.375V17.37H0v1.325zm9.81 0h4.38V17.37H9.81v1.325zm9.815 0H24V17.37h-4.375v1.325zm0-1.724H24v-1.32h-4.375v1.34-.01zm-9.814 0h4.39v-1.32H9.81v1.34-.01zm-9.81 0h4.38v-1.32H0v1.34-.01zm4.91 0h4.38v-1.32H4.91v1.34l.002-.01zm9.83 0h4.38v-1.32h-4.4v1.34l.017-.01zm0-1.72h4.38v-1.32h-4.4v1.33h.017zm-9.805 0h4.36v-1.32H4.91v1.33h.016zm-4.906 0h4.36v-1.32H0v1.33h.016zm9.81 0h4.38v-1.32h-4.4v1.33h.016zm9.825 0H24v-1.32h-4.375v1.33h.027zm0-1.72H24V12.2h-4.375v1.326h.027zm-9.81 0h4.363V12.2h-4.4v1.326h.033zm-9.81 0H4.4V12.2H0v1.326h.03zm14.73 0h4.38V12.2h-4.43v1.326h.044zm0-1.72h4.38v-1.33h-4.43v1.32h.044zm-14.73 0H4.4v-1.32H0v1.32h.03zm9.81 0h4.38v-1.32H9.81v1.32h.032zm9.81 0H24v-1.33h-4.375v1.328l.027-.002zM9.81 10.08h4.38V8.754H9.81v1.326zm9.815-.002H24V8.753h-4.375v1.325zM9.81 8.355h4.38V7.028H9.81v1.327zm9.815 0H24V7.028h-4.375v1.327zm0-1.725H24V5.304h-4.375V6.63z" />
    </svg>
  );
};

Deezer.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Deezer.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Deezer;
