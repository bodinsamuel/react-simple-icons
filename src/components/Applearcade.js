import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Applearcade = forwardRef(function Applearcade(
  { color = 'currentColor', size = 24, title = 'Apple Arcade', ...others },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M.198 18.24a.966.966 0 0 1-.194-.571v-.955s0-.571.563-.313c0 0 6.919 3.135 8.033 3.626a7.832 7.832 0 0 0 3.408.729 8.216 8.216 0 0 0 3.396-.729l8.037-3.626c.559-.258.559.313.559.313v.955a1.038 1.038 0 0 1-.198.575c-.19.258-.515.539-1.411.959-.713.337-6.23 2.818-6.995 3.17a8.008 8.008 0 0 1-3.4.729 8.336 8.336 0 0 1-3.82-.927c-1.435-.65-5.849-2.631-6.567-2.972-.9-.428-1.153-.654-1.411-.963zm1.411-5.973l6.987-3.17a7.975 7.975 0 0 1 2.164-.634v5.707c0 .396.571.697 1.236.697s1.141-.313 1.141-.697V8.479c.778.105 1.54.313 2.263.618l6.987 3.17c.579.273 1.609.761 1.609 1.538s-1.011 1.236-1.609 1.53l-6.987 3.17a8.2 8.2 0 0 1-3.396.729 7.832 7.832 0 0 1-3.408-.729l-6.987-3.17C1.011 15.042 0 14.574 0 13.801s1.03-1.264 1.609-1.534zm1.807 2.247c.77.396 1.683.396 2.453 0 .682-.396.686-1.026 0-1.419a2.705 2.705 0 0 0-2.453 0c-.68.392-.666 1.02 0 1.419zM12 7.595a3.35 3.35 0 1 1 3.349-3.351v.003c0 1.849-1.5 3.348-3.349 3.348z" />
    </svg>
  );
});

Applearcade.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Applearcade;
