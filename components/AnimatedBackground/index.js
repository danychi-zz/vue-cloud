import styled, { css } from "vue-styled-components";
import { COLORS } from "~/style/constants";
import { changeColor } from "~/style/animations";

const props = { isActive: Boolean };

const arrayColors = [
  COLORS.aquaMarine,
  COLORS.orange,
  COLORS.pana,
  COLORS.fucsia,
  COLORS.turqouise,
  COLORS.primary,
  COLORS.tertiary
];

const AnimatedBackground = styled("div", props)`
  background-color: ${COLORS.white};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  ${changeColor(arrayColors)};
  ${({ isActive }) =>
    isActive
      ? ` animation: ${arrayColors.length * 3}s changeColor linear infinite;`
      : null};
`;

export default AnimatedBackground;
