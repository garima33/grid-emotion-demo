import styled, { css } from "react-emotion";

export const Flex = styled("div")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  font-family: roboto;
  font-size: large;
  background-color: ${props => props.color};
`;
