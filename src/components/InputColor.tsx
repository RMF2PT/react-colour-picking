import { ChangeEvent } from "react";

type InputColorProps = {
  color: string;
  handleColorChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputColor = ({ color, handleColorChange }: InputColorProps) => {
  return (
    <input
      type="text"
      placeholder="Add color name"
      autoFocus
      value={color === "Empty value" ? "" : color}
      onChange={handleColorChange}
    />
  );
};
export default InputColor;
