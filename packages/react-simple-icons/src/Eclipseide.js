import React from 'react';
import PropTypes from 'prop-types';

const Eclipseide = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M11.108.024c-.274.004-.604.012-.737.023C6.727.361 3.468 2.518 1.578 5.86A12.53 12.53 0 0 0 .02 11.112c-.04.517-.02 1.745.035 2.208.306 2.682 1.353 5.06 3.07 6.965 1.962 2.173 4.586 3.467 7.437 3.663.42.032 1.043.04 1.02.012a2.404 2.404 0 0 0-.338-.074c-1.674-.33-3.388-1.13-4.777-2.232a12.345 12.345 0 0 1-2.45-2.636A12.388 12.388 0 0 1 1.883 12.5a12.414 12.414 0 0 1 .56-4.275c.785-2.522 2.37-4.726 4.475-6.228A11.074 11.074 0 0 1 11.155.122l.443-.098zm1.475.51C10.645.65 8.806 1.299 7.3 2.4 5.425 3.77 3.994 5.644 3.22 7.746c-.145.397-.282.82-.282.879 0 .012 3.828.024 10.31.024 8.464 0 10.316-.008 10.316-.036 0-.047-.153-.525-.283-.878-.153-.42-.576-1.31-.82-1.722-.4-.683-.91-1.373-1.474-1.992-1.651-1.82-3.593-2.934-5.82-3.334-.785-.141-1.8-.2-2.585-.153zM23.83 9.97c-.02 0-4.792 0-10.609.004l-10.574.008-.011.059c-.036.16-.134 1.082-.134 1.243 0 .028 1.785.032 10.747.032H24v-.075c0-.102-.07-.792-.106-1.055-.02-.16-.04-.216-.063-.216zm-10.573 2.636c-9.37-.004-10.731 0-10.743.035-.02.04.024.557.075.973.02.157.035.298.035.314 0 .027 2.137.035 10.625.035h10.624l.024-.188c.043-.326.102-.97.094-1.067l-.008-.094zm.003 2.718c-8.883 0-10.322.004-10.322.035 0 .02.054.208.121.42a11.123 11.123 0 0 0 2.071 3.741c.282.342.945 1.036 1.228 1.287 1.568 1.4 3.247 2.216 5.18 2.53.605.094.887.113 1.75.11.91 0 1.298-.032 2.024-.177 2.11-.416 3.914-1.451 5.53-3.17 1.267-1.348 2.106-2.76 2.628-4.411l.117-.365z" />
    </svg>
  );
};

Eclipseide.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Eclipseide.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Eclipseide;
