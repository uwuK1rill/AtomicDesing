import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";

type ButtonTextProps = {
  onClick: () => void;
  text: string;
};

const ButtonText: React.FC<ButtonTextProps> = ({ onClick, text }) => (
  <Button onClick={onClick}>
    <Text>{text}</Text>
  </Button>
);

export default ButtonText;
