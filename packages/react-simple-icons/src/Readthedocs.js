import React from 'react';
import PropTypes from 'prop-types';

const Readthedocs = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M2.759 24l.664-.144c.207-.044.412-.085.619-.126.318-.062.637-.123.955-.182.24-.046.48-.085.721-.129l.055-.015c.25-.044.498-.09.747-.12l1.214-.179V-.001h-.042c-.63.004-1.256.016-1.884.036-.689.018-1.394.06-2.084.105-.299.021-.6.046-.899.07H2.78v23.784L2.759 24zM8.911.015v22.942c.861-.1 1.72-.182 2.582-.246 2.121-.161 4.248-.211 6.373-.151 1.128.034 2.253.099 3.374.192V1.503c-1.004-.229-2.012-.432-3.028-.607-1.968-.342-3.955-.581-5.947-.731C11.151.084 10.032.033 8.913.016h-.002zm10.763 14.797l-.046-.004-.561-.061c-1.399-.146-2.805-.242-4.207-.291-1.407-.045-2.815-.03-4.223.016h-.044c-.045 0-.091 0-.135-.016-.101-.03-.195-.074-.267-.149-.127-.136-.186-.315-.156-.495.008-.061.029-.105.054-.166.027-.044.063-.104.104-.134.043-.045.09-.075.143-.104.061-.03.121-.046.18-.061h.09c.195 0 .391-.016.57-.016 1.395-.029 2.773-.029 4.169.03 1.439.06 2.864.165 4.288.33l.151.015c.044.016.089.016.135.03.105.046.194.105.255.181.044.044.074.104.105.164.029.061.044.12.044.18.015.165-.044.33-.164.45-.046.046-.091.075-.135.105-.047.03-.105.044-.166.06-.03.016-.045.016-.089.016h-.047l-.048-.08zm.035-2.711c-.044 0-.044 0-.09-.006l-.555-.071c-1.395-.179-2.804-.3-4.198-.359-1.395-.075-2.805-.09-4.214-.06l-.046-.016c-.045-.015-.09-.015-.135-.029-.09-.03-.194-.09-.254-.166-.03-.045-.076-.104-.09-.148-.075-.166-.075-.361.014-.525.031-.061.061-.105.105-.15s.09-.09.15-.104c.061-.03.119-.06.18-.06l.09-.016.585-.015c1.396-.016 2.774.015 4.153.09 1.439.075 2.865.21 4.289.39l.149.016.091.014c.105.031.194.075.27.166.12.119.18.284.165.449 0 .061-.016.121-.045.165-.029.06-.061.104-.09.15-.03.044-.074.075-.136.12-.044.029-.104.045-.164.061l-.091.014H19.8l-.091.09zm0-2.711c-.044 0-.044 0-.09-.006l-.555-.08c-1.395-.19-2.789-.334-4.198-.428-1.395-.092-2.805-.135-4.214-.129h-.046l-.09-.016c-.059-.016-.104-.036-.164-.068-.15-.092-.256-.254-.285-.438 0-.061 0-.12.016-.18.014-.061.029-.117.059-.17.031-.054.076-.102.121-.144.074-.075.18-.126.285-.15.045-.011.089-.015.135-.015h.569c1.439.009 2.879.064 4.304.172 1.395.105 2.774.26 4.153.457l.15.021c.046.007.061.007.09.019.06.02.12.046.165.08.061.033.104.075.135.123.031.048.061.101.09.158.062.156.045.334-.029.479-.029.055-.061.105-.105.146-.075.074-.164.127-.27.15-.029.012-.046.012-.091.014l-.044.005h-.091zm0-2.712c-.044 0-.044 0-.09-.007l-.555-.09c-1.395-.225-2.789-.391-4.198-.496-1.395-.119-2.805-.179-4.214-.209h-.046l-.105-.014c-.061-.015-.115-.045-.165-.074-.053-.031-.099-.076-.14-.121-.036-.045-.068-.104-.094-.149-.02-.06-.037-.12-.044-.181-.016-.18.053-.371.181-.494.074-.075.176-.125.279-.15.045-.015.09-.015.135-.015.189 0 .38.005.57.008 1.437.034 2.871.113 4.304.246 1.387.119 2.77.3 4.145.524l.135.016c.04 0 .052 0 .09.014.062.016.112.046.165.076.046.029.09.074.125.119.091.135.135.301.105.465-.015.061-.031.105-.061.166-.03.045-.074.104-.12.135-.074.074-.165.119-.271.149h-.135l.004.082zm-15.67-.509c-.09 0-.181-.021-.271-.063-.194-.095-.314-.293-.329-.505 0-.057.015-.111.03-.165.014-.068.045-.133.09-.19.045-.065.104-.12.164-.162.077-.05.167-.076.241-.092l.48-.044c.659-.058 1.305-.105 1.949-.144h.06c.105.004.195.024.271.071.194.103.314.305.314.519 0 .055-.015.109-.029.161-.016.067-.045.132-.091.189-.044.075-.104.12-.165.165-.074.045-.15.074-.24.09-.104.015-.209.015-.314.03-.136.015-.286.015-.436.031l-1.168.088-.285.031c-.061.015-.122.015-.196.015l-.075-.025zm15.655-2.201l-.091-.01-.554-.1c-1.395-.234-2.805-.425-4.214-.564-1.395-.138-2.804-.225-4.214-.271h-.045l-.09-.018c-.061-.015-.105-.038-.165-.071-.045-.03-.091-.072-.135-.121-.12-.138-.165-.33-.12-.506.016-.061.045-.12.074-.18.031-.061.076-.105.121-.15.074-.076.18-.121.285-.15.045-.015.089-.015.135-.015l.584.015c1.395.061 2.774.15 4.154.301 1.439.148 2.864.359 4.288.6l.15.014c.046 0 .061 0 .09.016.06.015.12.045.165.074.135.105.225.256.239.421.016.06 0 .12-.015.181 0 .059-.029.119-.059.164-.031.045-.062.09-.105.135-.076.076-.181.12-.286.135l-.086.014h-.046l-.06.086zM4.022 3.199c-.086 0-.171-.019-.25-.056-.07-.033-.134-.079-.187-.137-.045-.053-.086-.112-.111-.181-.02-.049-.034-.101-.039-.156-.022-.214.078-.427.255-.546.078-.054.167-.086.26-.099.158-.014.314-.014.473-.029.65-.045 1.301-.075 1.949-.105h.048c.091.016.181.03.256.075.179.105.3.315.3.524 0 .061-.016.121-.03.166-.03.074-.06.135-.104.195-.047.06-.107.12-.182.15-.075.045-.165.075-.255.075-.104.014-.21.014-.33.014l-.449.031c-.405.029-.795.045-1.186.074l-.3.016c-.075.015-.134.015-.194.015l.076-.026z" />
    </svg>
  );
};

Readthedocs.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Readthedocs.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Readthedocs;
