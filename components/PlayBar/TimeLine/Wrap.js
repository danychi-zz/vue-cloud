import styled from "vue-styled-components";
import { media } from "~/style/media";

const Wrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-grow: 1;
  ${media.phone`
    padding: 0 1em;
  `};
  ${media.tablet`
    padding: 0 2em;
  `};
`;

export default Wrap;
