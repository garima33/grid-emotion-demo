import styled, { css } from "react-emotion";

export const Flex = styled("div")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "space-between"};
  font-family: ${props => props.font || "roboto"};
  font-size: ${props => props.fontSize || "medium"};
  background-color: ${props => props.color};
`;
