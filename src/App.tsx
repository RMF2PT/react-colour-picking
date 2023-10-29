import { ChangeEvent, useState } from "react";
import Canvas from "./components/Canvas";
import InputColor from "./components/InputColor";

function App() {
  const [color, setColor] = useState<string>("Empty value");

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <>
      <Canvas color={color} />
      <InputColor color={color} handleColorChange={handleColorChange} />
    </>
  );
}

export default App;
