import styled from "vue-styled-components";
import { COLORS } from "~/style/constants";

const SongWrap = styled.div`
  padding: 1em 0;
  article {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
      max-height: 60vh;
      max-width: 100%;
    }
  }
`;

export default SongWrap;
