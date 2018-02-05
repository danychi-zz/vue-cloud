import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";
import { media } from "~/style/media";

const Item = styled("li")`
  ${media.phone`
    flex: 1 1 100%;
    `};
  ${media.tablet`
    flex: 0 0 calc(50% - 30px);
    `};
  ${media.desktop`
    flex-basis: calc(25% - 30px);
    `};
  ${media.giant`
    flex-basis: calc(20% - 30px);
    `};
  background-color: ${COLORS.white};
  margin: 15px;
  transition: transform 0.3s ease, transform-origin 0.3s ease;

  &:hover,
  &:focus {
    ${media.desktop`
      transform: scale(1.2);
      transform-origin: center bottom;
    `};
  }

  img {
    transition: transform 0.3s ease-in;
    max-width: 100%;
  }

  a {
    color: ${COLORS.almostBlack};
    text-decoration: none;
  }
`;

export default Item;
