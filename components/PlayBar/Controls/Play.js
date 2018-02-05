import styled from "vue-styled-components";

const props = {
  isPlaying: Boolean
};

// TODO partialize component to reuse the style and only update the background
const Play = styled("button", props)`
  background: url(svgs/playBar/${({ isPlaying }) => (isPlaying ? `pause` : `play`)}.svg)
    no-repeat center;
  padding: 0;
  border: 0;
  text-shadow: none;
  color: transparent;
  background-color: transparent;
  -webkit-appearance: button;
  cursor: pointer;
  height: 100%;
  width: 24px;

  &:focus {
    outline: 0;
  }
`;

export default Play;
