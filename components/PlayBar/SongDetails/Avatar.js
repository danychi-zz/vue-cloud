import styled from "vue-styled-components";

const props = { srcUrl: String };

const Avatar = styled("span", props)`
  height: 30px;
  width: 30px;
  background: url(${props => props.srcUrl}) center no-repeat;
  background-size: cover;
`;

export default Avatar;
