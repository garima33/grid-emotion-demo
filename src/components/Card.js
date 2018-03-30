import React from "react";
import { Data, Label, Flex, CardContainer } from "../styled-components";

export class Card extends React.Component {
  render() {
    const { cardData } = this.props;
    return (
      <CardContainer>
        <Flex justify="space-between">
          <Label color="purple"> Name: </Label>
          <Data> {cardData.name}</Data>
        </Flex>
        <Flex justify="space-between">
          <Label> Email: </Label>
          <Data> {cardData.email}</Data>
        </Flex>
        <Flex justify="space-between">
          <Label> Contact No: </Label>
          <Data> {cardData.number}</Data>
        </Flex>
        <Flex justify="space-between">
          <Label> Address: </Label>
          <Data> {cardData.address}</Data>
        </Flex>
      </CardContainer>
    );
  }
}
