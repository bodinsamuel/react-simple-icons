import React from 'react';
import PropTypes from 'prop-types';

const Sprint = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M2.13 23.995c5.493-1.808 13.457-6.02 18.996-9.782.465-.314.827-.607.827-1.118 0-.889-1.655-2.08-2.458-2.555-4.359 4.456-13.033 11.134-17.366 13.455M7.225 20.21c3.388-2.304 8.31-6.638 9.975-8.996.393-.554.683-.876.683-1.456 0-.952-1.128-1.65-1.94-2.135-1.946 4.51-6.316 10.125-8.718 12.587M9.816 16.682c2.344-2.967 4.188-6.454 4.188-8.958 0-1.308-.953-2.222-2.196-2.916.024 2.721-.934 9.101-1.992 11.874M10.312 13.82c.438-2.847.18-6.285-.379-8.442-.304-1.174-1.38-2.5-2.376-2.913 1.305 3.643 2.426 8.832 2.755 11.355M9.347 9.825C8.321 7.097 5.763 1.41 2 0c2.45 2.66 6.083 7.935 7.347 9.825" />
    </svg>
  );
};

Sprint.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sprint.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Sprint;
