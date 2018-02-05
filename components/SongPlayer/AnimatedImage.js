import styled from "vue-styled-components";
import { pulse } from "~/style/animations";

const props = { isActive: Boolean };

const scaleValues = [0.98, 1, 0.985, 1, 0.98, 0.99];

const AnimatedImage = styled("img", props)`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  ${pulse(scaleValues)};
  ${({ isActive }) =>
    isActive ? `animation: 1.5s pulse linear infinite;` : null};
`;

export default AnimatedImage;
