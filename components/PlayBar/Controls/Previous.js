import styled from "vue-styled-components";

const Previous = styled.button`
  background: url(svgs/playBar/previous.svg) no-repeat center;
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

export default Previous;
