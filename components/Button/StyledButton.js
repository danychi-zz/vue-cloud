import Button from "./index";
import styled from "vue-styled-components";

const props = {
  primaryColor: String,
  secondaryColor: String
};

export default styled(Button, props)`
  display: inline-block;
  border-radius: 4px;
  border: 1px solid ${({ primaryColor }) => primaryColor};
  color: ${({ primaryColor }) => primaryColor};
  text-decoration: none;
  padding: 10px 30px;
  transition: color 0.3s ease-in, background-color 0.3s ease-in;

  &:hover,
  &:focus {
    color: ${({ secondaryColor }) => secondaryColor};
    background-color: ${({ primaryColor }) => primaryColor};
  }
`;
