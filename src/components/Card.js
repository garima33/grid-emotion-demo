import React from "react";
import { Data, Label, Row, CardContainer } from "../styled-components";

export class Card extends React.Component {
  render() {
    const { cardData } = this.props;
    return (
      <CardContainer>
        <Row>
          <Label color="purple"> Name: </Label>
          <Data> {cardData.name}</Data>
        </Row>
        <Row>
          <Label> Email: </Label>
          <Data> {cardData.email}</Data>
        </Row>
        <Row>
          <Label> Contact No: </Label>
          <Data> {cardData.number}</Data>
        </Row>
        <Row>
          <Label> Address: </Label>
          <Data> {cardData.address}</Data>
        </Row>
      </CardContainer>
    );
  }
}
