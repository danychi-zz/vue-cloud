import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";
import { media } from "~/style/media";

const Wrap = styled.span`
  position: relative;
  flex-grow: 1;
  padding: 10px 0;
  ${media.phone`
    visibility: hidden;
    margin: 0 5px;
  `};
  ${media.tablet`
    visibility: visible;
    margin: 4px 10px 0 10px;
  `};
`;

export default Wrap;
