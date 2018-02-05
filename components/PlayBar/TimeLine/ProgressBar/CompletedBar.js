import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";

const props = { completedPercentage: Number };

const CompletedBar = styled("div", props)`
  width: ${({ completedPercentage }) =>
    completedPercentage ? completedPercentage : 0}%;
  height: 1px;
  background-color: ${COLORS.primary};
  transition: width 50ms;
  position: absolute;
`;

export default CompletedBar;
