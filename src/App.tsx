import { ChangeEvent, useState } from "react";

function App() {
  const [color, setColor] = useState<string>("Empty value");

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <>
      <div className="canvas" style={{ backgroundColor: color }}>
        <p>{!color ? "Empty value" : color}</p>
      </div>
      <input
        type="text"
        placeholder="Add color name"
        autoFocus
        value={color === "Empty value" ? "" : color}
        onChange={handleColorChange}
      />
    </>
  );
}

export default App;
