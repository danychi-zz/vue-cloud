import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";
import { media } from "~/style/media";

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  ${media.tablet`
    padding: 1em 0;
  `};
  h2 {
    color: ${COLORS.white};
    text-align: center;
    ${media.phone`
      font-size: 2rem;
    `};
    ${media.tablet`
      font-size: 2.5rem;
    `};
  }
`;

export default TitleWrap;
