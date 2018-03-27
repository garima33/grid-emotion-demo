import styled, { css } from "react-emotion";

export const DataContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  background-color: ${props => props.color};
`;
