type CanvasProps = {
  color: string;
};

const Canvas = ({ color }: CanvasProps) => {
  return (
    <div className="canvas" style={{ backgroundColor: color }}>
      <p>{!color ? "Empty value" : color}</p>
    </div>
  );
};
export default Canvas;
