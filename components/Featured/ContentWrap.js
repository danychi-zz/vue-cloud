import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";

const ContentWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 1em 0;

  img {
    max-width: 300px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export default ContentWrap;
