import React from 'react';
import PropTypes from 'prop-types';

const Icq = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M15.406.133C14.65.07 13.93.223 13.226.6c-.94.503-1.61 1.275-1.912 2.28v.067l-.035.235-.134-.235-.335-.603c-.536-.837-1.206-1.34-2.044-1.574C8.03.604 7.426.673 6.79 1.01c-.705.436-1.106 1.106-1.274 2.045-.168.972 0 1.91.502 2.847l.236.336-.807-.267c-1.005-.236-1.944-.104-2.883.4C1.592 6.87.99 7.576.588 8.55c-.37.938-.336 1.843.133 2.68.202.37.504.67.772.872.402.402.905.636 1.508.736l.234.066-.502.438c-.47.402-.738.903-.906 1.406-.168.603-.1 1.207.236 1.777.17.268.334.503.602.67.268.235.604.403 1.006.436.738.17 1.508.168 2.346-.1l-.604 1.005-.168.436c-.335 1.074-.233 2.01.27 2.983.235.37.5.705.77 1.006.4.368.906.602 1.51.77 1.004.268 2.01.236 2.98-.267.94-.503 1.543-1.31 1.845-2.315l.032-.2c.637.703 1.24 1.173 1.912 1.34.67.202 1.34.17 1.944-.233.57-.335.973-.906 1.174-1.61.168-.738.168-1.474 0-2.312.335.235.67.4 1.072.502 1.073.335 2.01.3 2.95-.2.904-.504 1.508-1.308 1.81-2.347.268-1.005.202-1.977-.3-2.916l-.17-.27c-.267-.402-.537-.804-.94-1.072-.334-.235-.735-.402-1.104-.57 1.04-.503 1.776-1.207 2.11-2.112.236-.738.17-1.342-.167-1.945v-.066c-.402-.67-.937-1.105-1.775-1.34-.503-.1-1.072-.102-1.574-.068l-1.108.235.37-.838c.334-1.073.235-2.112-.335-3.084l-.1-.17c-.503-.838-1.24-1.34-2.246-1.607-.26-.067-.516-.113-.768-.133zm-.57 1.414c.323-.03.65.012.967.13.704.166 1.207.534 1.51 1.104v.003c.168.335.267.736.267 1.172l-.1.738c-.134.37-.302.703-.503 1.004l-3.016 3.69c-.3-.235-.637-.403-.972-.57l-.336-3.79-.033-1.34.032-.335c.168-.67.638-1.173 1.24-1.508.302-.168.62-.268.944-.297zm-6.883.537c.134-.004.276.03.41.096.603.168 1.106.603 1.508 1.44.17.336.336.67.403 1.073l.67 3.957-.504.168-2.983-3.252-.168-.334c-.27-.604-.435-1.173-.368-1.777v-.002c.034-.603.268-1.003.67-1.238.1-.084.227-.127.36-.13zm12.13 5.033c.15 0 .297.007.448.024.57.068.972.337 1.173.74l.135.433-.067.335c-.234.603-.738 1.074-1.575 1.442-.335.168-.703.235-1.105.3l-4.123.503-.067-.235-.068-.1.135-.167 3.387-2.816.4-.166.002-.002c.45-.2.885-.286 1.328-.29zM4.622 7.3c.16.008.324.033.49.075v.002l.908.367 2.95 2.147c-.27.336-.435.67-.536 1.005l-4.828.603-.334-.066c-.603-.1-1.007-.37-1.276-.87-.27-.503-.267-1.006-.066-1.51.235-.636.67-1.14 1.306-1.407.453-.252.906-.373 1.387-.346zm7.16 2.69c.604 0 1.175.236 1.544.604.47.47.67.973.67 1.576 0 .603-.2 1.172-.67 1.574-.436.436-.94.67-1.543.67-.636 0-1.17-.235-1.573-.67-.436-.402-.67-.97-.67-1.574 0-.603.234-1.107.67-1.576.402-.37.937-.604 1.574-.604zm8.415 2.58l.336.035c.504.168.973.468 1.24.97.336.37.503.873.503 1.443l-.1.67c-.167.67-.57 1.173-1.14 1.44-.603.336-1.207.403-1.877.17-.402-.1-.67-.268-.904-.536l-3.52-2.918.235-.502.1-.403 3.788-.335 1.34-.035zm-6.636 2.448l1.407 1.44.87 1.073.17.337c.3.57.468 1.105.4 1.742-.066.602-.267 1.038-.67 1.206-.234.168-.502.17-.77.135-.637-.166-1.14-.668-1.508-1.473l-.403-1.108-.502-2.917.568-.2.436-.235zm-3.62.068c.334.167.67.334 1.04.367.066 1.14.165 2.347.332 3.654v1.342l-.033.333c-.236.603-.638 1.107-1.24 1.375-.604.335-1.24.402-1.845.235-.67-.167-1.173-.57-1.44-1.106-.17-.335-.304-.74-.304-1.14l.17-.77c.066-.335.235-.67.503-.94l2.816-3.35z" />
    </svg>
  );
};

Icq.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Icq.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Icq;
