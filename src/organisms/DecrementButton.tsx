import React, { useContext } from "react";
import ButtonText from "../molecules/ButtonText";
import { CounterContext } from "./CounterProvider";

const DecrementButton: React.FC = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("DecrementButton must be used within a CounterProvider");
  }
  return <ButtonText onClick={context.decrement} text="decrement" />;
};

export default DecrementButton;
