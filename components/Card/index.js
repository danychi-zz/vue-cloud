import styled from "vue-styled-components";

const Card = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 1px;
  border: 1px solid transparent;
  transition: box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  &:hover,
  &:focus {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export default Card;
