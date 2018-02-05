import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";

const Wrap = styled.div`
  iframe {
    position: absolute;
    opacity: 0;
    left: -1000em;
  }
`;

export default Wrap;
