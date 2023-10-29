import { ChangeEvent, useState } from "react";
import colorNames from "colornames";
import Canvas from "./components/Canvas";
import InputColor from "./components/InputColor";

function App() {
  const [color, setColor] = useState<string>("Empty value");
  const [hexColor, setHexColor] = useState<string>("");

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    setHexColor(colorNames(e.target.value) as string);
  };

  return (
    <>
      <Canvas color={color} hexColor={hexColor} />
      <InputColor color={color} handleColorChange={handleColorChange} />
    </>
  );
}

export default App;
