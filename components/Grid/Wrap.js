import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";
import { media } from "~/style/media";

const Wrap = styled.div`
  background-color: ${COLORS.white};
  display: flex;
  justify-content: center;
  padding: 1em 0;

  ul {
    display: flex;
    list-style: none;
    ${media.phone`
    flex-direction: column;
    padding: 0 1em;
    `};
    ${media.tablet`
    flex-flow: row wrap;
    padding: 0 2em;
    `};
  }
`;

export default Wrap;
