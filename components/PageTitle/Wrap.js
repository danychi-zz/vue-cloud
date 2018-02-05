import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";
import { media } from "~/style/media";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;
  position: relative;
  z-index: 2;
  a {
    color: transparent;
  }

  h1 {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    color: ${COLORS.almostBlack};
    letter-spacing: 1px;
    ${media.phone`
      font-size: 5rem;
    `};
    ${media.tablet`
      font-size: 7rem;
    `};
  }
`;

export default Wrap;
