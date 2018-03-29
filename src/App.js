import React, { Component } from "react";
import { Flex, DataWrapper } from "./styled-components/index";
import { data } from "./utils/data";
import { Card } from "./components/Card";
import "./App.css";

class App extends Component {
  render() {
    let items = data.map((item, index) => {
      return (
        <DataWrapper key={index}>
          <Card cardData={item} />
        </DataWrapper>
      );
    });
    return <Flex color="black">{items}</Flex>;
  }
}

export default App;
