import React from 'react';
import PropTypes from 'prop-types';

const Gulp = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M15.156 19.432l.636-1.084s-1.444.591-3.86.591c-2.418 0-3.84-.568-3.84-.568l.711 1.183.252 3.729c0 .403 1.314.718 2.936.718 1.623 0 2.938-.314 2.938-.718l.229-3.835v-.016zm.615-7.046c-.769.046-1.153.903-1.539 1.805-.143.33-.63 1.737-.948 1.563-.318-.173.413-1.329.619-2.017-.237.174-1.105.849-1.329.215-.358.314-1.129.48-1.042-.329-.191.345-.621.823-1.139.614-.673-.255.395-2.411.66-2.307.266.121-.053.6-.136.794-.186.419-.398.958-.255 1.063.24.194.904-.703.919-.719.124-.165.479-1.229.763-1.107.285.134-.711 1.541-.34 1.826.076.06.383-.03.569-.239.12-.12.078-.42.479-1.378.404-.959.764-2.156 1.039-2.066s.049.703-.051.943c-.464 1.078-1.268 2.844-.89 2.71.374-.135.569-.135.943-.569.374-.434.345-1.152.599-1.137.24.014.21.254.15.418.24-.27 1.152-.868 1.363-.284.254.688-1.304 1.692-.914 1.632.375-.045.988-.434 1.258-.793l.719-6.5s-.734.6-5.361.6-5.284-.584-5.284-.584l.613 5.93c.33-.928 1.108-2.814 2.322-2.74.554.03 1.303 1.109.658 1.139-.27.015-.3-.539-.614-.614-.239-.046-.554.135-.763.345-.404.404-1.304 2.006-1.184 2.801.15 1.018 1.407-.346 1.617-.75.149-.283.254-1.138.568-1.048.33.09-.029.974-.27 1.737-.27.869-.404 1.781-.732 1.676-.33-.104.209-1.227.178-1.422-.313.299-.883 1.02-1.631.659l.374 3.699s1.019.793 4.073.793 4.118-.793 4.118-.793l.479-4.283c-.389.39-1.617 1.063-1.692.3-.059-.614 1.333-1.498.974-1.514l.06-.069zM17.346.669l-2.659 2.8-.486 1.901c1.881.12 3.189.386 3.189.694 0 .419-2.414.757-5.391.757s-5.39-.343-5.39-.763c0-.419 2.414-.764 5.391-.764.423 0 .844 0 1.264.016l.561-2.276L16.65.039c.068-.09.28-.015.474.15.194.149.299.344.239.434v.03l-.017.016zm-3.834 5.795s-.523 0-.61-.08c-.022-.025-.036-.058-.036-.09 0-.058.039-.091.09-.11l.044.075c-.021.006-.029.015-.033.023 0 .041.314.069.555.066.239-.003.531-.023.533-.064 0-.012-.023-.023-.061-.033l.045-.072c.063.02.117.058.117.121 0 .11-.141.128-.23.141-.107.015-.412.023-.412.023h-.002z" />
    </svg>
  );
};

Gulp.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gulp.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Gulp;
