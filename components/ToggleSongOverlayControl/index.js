import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";
import { media } from "~/style/media";

const props = { isPlaying: Boolean };

const ToggleSongOverlayControl = styled("a", props)`
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;

  &:hover {
    opacity: 1;
  }

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-image: url(svgs/song/${({ isPlaying }) => (isPlaying ? `pause` : `play`)}.svg);
    background-size: 20%;
    background-position: center;
    background-repeat: no-repeat;
    transition: opacity 0.3s;
    opacity: 1;
  }
`;

export default ToggleSongOverlayControl;
