import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("hero/hero.jpeg") center no-repeat;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${COLORS.primary}; /* fallback for old browsers */
    background-image: linear-gradient(
      45deg,
      ${COLORS.primary} 0%,
      ${COLORS.tertiary} 100%
    );

    opacity: 0.6;
  }
`;

export default Background;
