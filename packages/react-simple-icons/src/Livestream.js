import React from 'react';
import PropTypes from 'prop-types';

const Livestream = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M20.987 6.248l.041.002.039.006.04.011.039.015.038.02.039.022.035.03.035.029.037.045.046.045.03.045.044.045.075.119.029.06.029.075.03.074.031.074.028.074.029.09.029.09.03.09.031.089.029.104.028.104.031.105.03.104.029.104.029.104.03.12.03.118.029.135.015.12.029.134.03.134.017.135.028.149.015.148.015.149.031.149.015.149.016.148.015.165.015.164.015.163.015.165.015.164.016.179.015.343.016.179.015.179.015.18.015.18.015.193.015.193.015.193.016.195.015.193v.388l.016.209.015.209v.403l.015.208v.611l.015.419.015.625v1.269l.015.373.03.269.046.179.043.119.047.104.059.09.045.044.045.045.044.045.062.029.089.046.089.029.096.03.142.029.193.011.269-.016h.1v2.253l-.239.029-.566.026-.61-.029-.448-.067-.344-.089-.254-.089-.237-.119-.236-.15-.208-.184-.134-.134-.136-.149-.17-.269-.15-.313-.119-.342-.082-.403-.054-.456-.015-.508v-1.938l-.015-.418v-.865l-.015-.402v-.287l-.016-.199v-.397l-.015-.194v-.193l-.008-.193-.015-.194-.014-.179-.003-.18-.015-.179-.015-.183v-.178l-.015-.18-.017-.179-.012-.179-.014-.17-.017-.17-.015-.164-.015-.169-.015-.16-.014-.163-.015-.164-.017-.15-.015-.148-.016-.158-.015-.141-.015-.135-.044-.278-.016-.134-.015-.135-.03-.125-.026-.135-.029-.118-.03-.12-.031-.119-.034-.103-.029-.104-.025-.103-.045-.09-.029-.104-.029-.089-.022-.09-.029-.089-.031-.09-.03-.074-.029-.076-.029-.074-.03-.059-.03-.061-.029-.06-.044-.06-.03-.045-.036-.045-.031-.044-.041-.03-.028-.029-.046-.03-.028-.015-.046-.016-.049-.012-.044-.016-.03-.015h-.03 2.552l-.051.031zM.008 3.082l1.169.021 1.089.026.97.015.851.03.73.029.642.029.567.03.506.029.463.046.418.044.387.046.357.044.329.046.313.044.283.061.27.059.252.059.24.06.223.06.209.06.194.075.194.059.179.074.163.076.166.074.148.074.164.074.148.09.135.09.135.09.119.088.119.09.119.09.119.09.104.09.104.104.104.09.105.104.09.104.09.104.104.105.09.104.09.104.074.104.09.105.074.119.074.104.074.119.075.12.074.119.074.12.06.119.061.119.074.119.06.119.06.119.06.119.06.12.045.118.048.12.06.135.05.118.06.135.06.119.044.119.061.135.054.135.044.119.051.134.045.12.045.133.045.135.045.135.045.134.044.135.03.134.045.135.039.135.029.133.039.135.029.135.041.134.029.134.045.135.029.119.045.135v.014l.029.12.031.127.029.134.029.135.03.119.03.135.029.133.045.12.029.134.03.119.03.135.029.119.029.119.03.12.03.119.029.12.03.119.03.119.029.119.029.119.03.119.03.119.014.12.03.104.046.223.029.105.029.104.03.104.022.104.029.104.016.104.029.104.03.104.015.104.029.105.03.09.03.097.015.089.03.09.015.09.015.089.015.09.015.075.016.09.015.085.016.075.014.074.016.078.024.074.015.074.015.075.015.068.016.06.023.074.023.061.016.065.015.06.016.06.015.06.015.06.015.06.015.045.03.051.015.045.015.045.016.044.029.046.015.044.038.075.015.038.03.061.015.029.015.03.015.029.016.03.015.015.015.015.015.015.016.015.015.016.029.016.016.004.015.015h.03-7.027l-.051-.015-.057-.016-.057-.014-.06-.016-.06-.015h-.016l-.052-.024-.056-.015-.057-.031-.061-.03-.044-.029-.06-.03-.045-.029-.061-.03-.044-.045-.044-.045-.061-.045-.045-.045-.06-.044-.06-.06-.06-.056-.044-.06-.061-.054-.06-.045-.06-.06-.061-.06-.044-.06-.062-.005-.059-.06-.045-.068-.054-.065-.119-.148-.059-.075-.045-.074-.061-.09-.059-.074-.061-.09-.06-.075-.06-.088-.06-.09-.06-.09-.061-.09-.059-.09-.061-.09-.06-.089-.06-.104-.059-.09-.046-.104-.06-.105-.06-.104-.06-.105-.061-.104-.059-.104-.06-.104-.06-.104-.061-.104-.059-.104-.061-.104-.059-.104-.061-.119-.06-.12-.06-.119-.061-.12-.059-.119-.061-.119-.059-.119-.06-.119-.135-.028-.049-.126-.059-.123-.061-.123-.059-.125-.064-.125-.06-.127-.06-.119-.064-.119-.06-.119-.063-.119-.06-.119-.06-.15-.06-.134-.063-.119-.063-.12-.06-.134-.063-.119-.061-.135-.06-.119-.06-.135-.06-.134-.06-.134-.058-.134-.059-.135-.061-.119-.059-.134-.059-.133-.059-.135-.06-.135-.06-.134-.119-.268-.06-.149-.06-.12-.059-.134-.061-.12-.06-.119-.073-.118-.06-.135-.074-.12-.06-.118-.074-.12-.061-.119-.059-.12-.06-.119-.06-.119-.059-.137-.12-.239-.06-.119-.061-.119-.074-.119-.074-.119-.135-.229-.058-.119-.074-.11-.076-.12-.059-.112-.061-.104-.125-.208-.074-.106-.061-.103-.058-.105-.061-.089-.06-.105-.063-.104-.066-.09-.059-.09-.074-.09-.076-.088-.059-.089-.075-.09-.088-.117-.067-.076-.069-.078-.059-.074-.058-.1-.074-.074-.066-.06-.075-.069-.062-.065-.075-.081-.065-.06-.065-.06-.068-.058-.067-.053-.069-.045-.07-.045L.672 3.4l-.075-.046-.06-.044-.074-.044-.067-.03-.068-.03-.07-.03-.071-.03-.068-.031-.059-.023L0 3.086h.008v-.004z" />
    </svg>
  );
};

Livestream.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Livestream.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Livestream;
