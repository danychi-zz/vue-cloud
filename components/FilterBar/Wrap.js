import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";

const Wrap = styled.div`
  position: relative;
  height: 48px;
  background-color: ${COLORS.primary};
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    height: 100%;
  }
  li {
    display: flex;
    justify-content: center;
    flex: 1;
    padding: 0 5px;
  }
`;

export default Wrap;
