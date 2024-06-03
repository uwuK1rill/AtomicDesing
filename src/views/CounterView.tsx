import React, { useContext } from "react";
import { CounterContext } from "../organisms/CounterProvider";
import Text from "../atoms/Text";
import IncrementButton from "../organisms/IncrementButton";
import DecrementButton from "../organisms/DecrementButton";
import styles from "./CounterView.module.css";

const CounterView: React.FC = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("CounterView must be used within a CounterProvider");
  }
  return (
    <div className={styles.container}>
      <Text>{context.index}</Text>
      <IncrementButton />
      <DecrementButton />
    </div>
  );
};

export default CounterView;
