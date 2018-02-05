import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";
import { media } from "~/style/media";

const Description = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 1em 0;

  h3 {
    color: ${COLORS.white};
    padding: 1em 0;
    ${media.phone`
      font-size: 1.2rem;
      line-height: 1.4rem;
    `};
    ${media.tablet`
      font-size: 1.4rem;
      line-height: 1.6rem;
    `};
  }
  p {
    color: ${COLORS.white};
    padding-bottom: 1em;
    ${media.phone`
      font-size: 0.8rem;
      line-height: 1rem;
    `};
    ${media.tablet`
      font-size: 1rem;
      line-height: 1.2rem;
    `};
  }
`;

export default Description;
