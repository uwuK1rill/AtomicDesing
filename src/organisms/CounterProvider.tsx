import React, { createContext, useState, ReactNode } from "react";

type CounterContextType = {
  index: number;
  increment: () => void;
  decrement: () => void;
};

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);

type CounterProviderProps = {
  children: ReactNode;
};

export const CounterProvider: React.FC<CounterProviderProps> = ({
  children,
}) => {
  const [index, setIndex] = useState(0);

  const increment = () => setIndex(index + 1);
  const decrement = () => setIndex(index - 1);

  return (
    <CounterContext.Provider value={{ index, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};
