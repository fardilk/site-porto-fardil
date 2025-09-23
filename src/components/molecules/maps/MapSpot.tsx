export default function MapSpot({ x, y, label }: { x: number; y: number; label?: string }) {
  return (
    <div className="absolute" style={{ left: `${x}%`, top: `${y}%` }} title={label}>
      <span className="block h-2 w-2 rounded-full bg-emerald-600 ring-2 ring-white shadow" />
    </div>
  );
}
