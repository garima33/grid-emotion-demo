import React, { Component } from "react";
import {
  DataContainer,
  DataItem,
  CardContainer
} from "./styled-components/index";
import { data } from "./utils/data";
import { Card } from "./components/Card";
import "./App.css";

class App extends Component {
  render() {
    let items = data.map((item, index) => {
      return (
        <DataItem key={index}>
          <Card cardData={item} />
        </DataItem>
      );
    });
    return <DataContainer color="black">{items}</DataContainer>;
  }
}

export default App;
