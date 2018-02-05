import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";
import { media } from "~/style/media";

const props = { isActive: Boolean };

const FilterLink = styled("a", props)`
  align-self: center;
  color: ${COLORS.white};
  cursor: pointer;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.3s ease-in;
  ${media.phone`
    font-size: 1rem;
    `};
  ${media.tablet`
    font-size: 1.2rem;
    `};

  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    height: 3px;
    bottom: -2px;
    background-color: ${COLORS.white};
    width: ${({ isActive }) => (isActive ? `100%` : `0`)};
    transition: width 0.4s ease;
  }

  &:hover,
  &:focus {
    &:after {
      width: 100%;
    }
  }
`;

export default FilterLink;
