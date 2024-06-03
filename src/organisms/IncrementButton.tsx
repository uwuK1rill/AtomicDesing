import React, { useContext } from "react";
import ButtonText from "../molecules/ButtonText";
import { CounterContext } from "./CounterProvider";

const IncrementButton: React.FC = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("IncrementButton must be used within a CounterProvider");
  }
  return <ButtonText onClick={context.increment} text="increment" />;
};

export default IncrementButton;
