import styled from "vue-styled-components";

const Next = styled.button`
  background: url(svgs/playBar/next.svg) no-repeat center;
  padding: 0;
  border: 0;
  text-shadow: none;
  color: transparent;
  background-color: transparent;
  -webkit-appearance: button;
  cursor: pointer;
  height: 100%;
  width: 24px;

  &:focus {
    outline: 0;
  }
`;

export default Next;
