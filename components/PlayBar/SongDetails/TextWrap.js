import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";

const TextWrap = styled.div`
  margin-left: 10px;
  max-width: 220px;
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  a {
    font-size: 1rem;
    color: ${COLORS.primary};
    transition: color 0.3s ease;
    text-decoration: none;

    &:hover {
      color: ${COLORS.secondary};
    }
  }
  p {
    font-size: 0.8rem;
    color: ${COLORS.almostBlack};
  }
`;

export default TextWrap;
