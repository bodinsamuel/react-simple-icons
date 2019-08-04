import React from 'react';
import PropTypes from 'prop-types';

const Adobepremiere = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M0 .3v23.4h24V.3zm1 1h22v21.4H1zM6.297 5.778c0-.066.017-.116.1-.116.643-.033 1.583-.05 2.573-.05 2.772 0 3.977 1.519 3.977 3.466 0 2.54-1.839 3.63-4.099 3.63-.38 0-.512-.017-.776-.017v3.843c0 .083-.033.116-.115.116H6.413c-.083 0-.116-.033-.116-.116zm1.775 5.313c.231.016.413.016.809.016 1.171 0 2.267-.412 2.267-1.996 0-1.27-.782-1.914-2.119-1.914-.396 0-.775.016-.957.033zm6.4-.908c0-.115 0-.412-.049-.973 0-.083.011-.1.077-.132a10.42 10.42 0 0 1 3.657-.693c.082 0 .115.016.115.099v1.452c0 .082-.026.099-.109.099a5.725 5.725 0 0 0-1.89.198v6.301c0 .083-.034.116-.116.116h-1.57c-.082 0-.115-.033-.115-.116z" />
    </svg>
  );
};

Adobepremiere.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Adobepremiere.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Adobepremiere;
