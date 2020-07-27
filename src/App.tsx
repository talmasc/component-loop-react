import React, { useState } from "react";
import "./App.css";

let items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

let itemList = items.map((item, index) => {
  return <li key={index}>{item}</li>;
});

function App() {
  return (
    <>
      <h2>This is a simple list of items</h2>
      <ul>{itemList}</ul>
    </>
  );
}

export default App;
