import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sefaria = forwardRef(function Sefaria({ color = 'currentColor', size = 24, title = 'Sefaria', ...others }, ref) {
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
      <path d="M19.615 15.412c-.62 2.915-2.733 4.152-7.425 4.152-11.54 0-7.45-9.28-5.84-11.186.678-.85 1.152-1.553 2.874-1.553h3.273c4.567 0 5.437.217 6.582 2.55.617 1.258.975 3.971.536 6.036m1.238-5.79c-.385-2.492-.889-5.202-3.052-6.706-1.31-.911-2.663-.981-4.177-.981-1.026 0-4.666-.041-6.257-.041C5.833 1.893 4.779.618 4.779 0 3.777 1.234 3.001 2.597 3.272 4.245c.244 1.484 1.261 2.433 2.75 2.622C4.338 9.25 2.81 11.994 2.881 14.9c.046 1.83.467 9.1 8.686 9.1h1.497c3.507 0 5.632-2.606 6.25-3.614 1.822-2.963 2.122-7.548 1.537-10.764Z" />
    </svg>
  );
});

Sefaria.propTypes = {
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

export default Sefaria;
