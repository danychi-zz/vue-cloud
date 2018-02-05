import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";
import { media } from "~/style/media";

const Wrap = styled.div`
  display: flex;
  position: relative;

  justify-content: center;
  align-items: center;
  ${media.phone`
    padding: 1em;
  `};
  ${media.tablet`
    padding: 2em;
  `};

  h2 {
    color: ${COLORS.white};
  }
`;

export default Wrap;
