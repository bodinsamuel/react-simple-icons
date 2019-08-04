import React from 'react';
import PropTypes from 'prop-types';

const Chase = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="m8.5903 23.974q-0.18502 0-0.3304-0.0661-0.14538-0.0661-0.27753-0.17181-0.13216-0.10572-0.18502-0.26431-0.05286-0.15859-0.0793-0.34361l0.02643-5.9207h15.648l-7.1101 6.7665h-7.7181zm15.41-8.5639q-0.02643 0.18503-0.0793 0.3304-0.05286 0.14537-0.18502 0.26432-0.13216 0.11894-0.27753 0.18502-0.14538 0.0661-0.3304 0.0661h-5.9207l-0.02643-15.674 6.793 7.1366v7.6916zm-8.5903-15.383q0.15859 0 0.3304 0.0661t0.26432 0.17181q0.09251 0.10573 0.17181 0.26432 0.0793 0.15859 0.05286 0.34361l0.02643 5.9207h-15.7l7.163-6.7665h7.6652zm-15.383 8.5639q-0.02643-0.18502 0.05286-0.3304 0.0793-0.14537 0.18502-0.26431 0.10573-0.11895 0.26432-0.18503 0.15859-0.0661 0.31718-0.0661h5.9471l-0.02643 15.674-6.7401-7.1366-0.026431-7.6916z" />
    </svg>
  );
};

Chase.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Chase.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Chase;
