import React from "react";
import Heading from "./components/Heading";
import Icon from "./components/Icon";
import Image from "./components/Image";
import Price from "./components/Price";
import Button from "./components/Button";

function App() {
  return (
    <div
      style={{
        border: "2px solid grey",
        width: "30%",
        paddingLeft: "17px",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "25%",
        }}
      >
        <div>
          <Heading />
        </div>
        <Icon />
      </div>
      <Image />
      <div
        style={{
          display: "flex",
          gap: "66%",
        }}
      >
        <div>
          <Price />
        </div>
        <Button />
      </div>
    </div>
  );
}

export default App;
