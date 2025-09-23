import MapSpot from "./MapSpot";

export default function MapIndonesia() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg border p-4">
      <img src="/assets/map-indonesia-placeholder.png" alt="Map of Indonesia" className="w-full opacity-80" />
      <MapSpot x={60} y={45} label="Jakarta" />
    </div>
  );
}
