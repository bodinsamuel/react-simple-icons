import React from 'react';
import PropTypes from 'prop-types';

const Iconjar = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M5.506 5.875c-.492 0-.936-.453-.936-.954 0-1.155 2.858-2.01 6.11-2.01.295 0 .492 0 .492-.25 0-.452-.985-.602-.985-1.355 0-.804.936-1.306 2.118-1.306 1.183 0 2.119.502 2.119 1.306 0 .753-.985.853-.985 1.355 0 .151.148.251.492.251 3.252 0 6.16.803 6.16 2.009a.944.944 0 0 1-.937.953H5.507zM20.238 10.443c1.183.753 1.626 2.109 1.43 3.365l-1.38 7.58C19.992 22.897 18.71 24 17.182 24H7.526C6 24 4.718 22.896 4.422 21.389l-1.38-7.581a3.307 3.307 0 0 1 1.479-3.315c.69-.501.837-1.355 0-1.656-1.183-.452-.937-1.908.246-1.908h7.193c1.133 0 2.514.853 2.514 3.615 0 2.762-1.282 2.51-1.282 4.468 0 .854.69 1.758 1.527 1.859 1.43.15 2.267-.402 2.267-2.41 0-2.06-1.182-3.013-1.182-4.72 0-2.059 1.28-2.863 2.118-2.863h2.07c1.182 0 1.429 1.457.246 1.909-.837.35-.69 1.205 0 1.656z" />
    </svg>
  );
};

Iconjar.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Iconjar.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Iconjar;
