import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Youtubemusic = forwardRef(function Youtubemusic(
  { color = 'currentColor', size = 24, title = 'YouTube Music', ...others },
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
      <path d="M9.818182 15.136364l5.318182-3.272728-5.318182-3zM12 6.278182c3.155455 0 5.721818 2.566363 5.721818 5.721818S15.155455 17.721818 12 17.721818 6.278182 15.155455 6.278182 12 8.844545 6.278182 12 6.278182m0-.550909C8.535 5.727273 5.727273 8.535 5.727273 12S8.535 18.272727 12 18.272727 18.272727 15.465 18.272727 12 15.465 5.727273 12 5.727273zM24 12a12 12 0 01-12 12A12 12 0 010 12 12 12 0 0112 0a12 12 0 0112 12" />
    </svg>
  );
});

Youtubemusic.propTypes = {
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

export default Youtubemusic;
