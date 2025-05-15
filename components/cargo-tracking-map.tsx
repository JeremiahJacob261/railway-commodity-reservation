"use client"

import { useEffect, useState, useRef } from "react"
import { Train, Package } from "lucide-react"

// Mock data for railway routes and stations
const railwayRoutes = [
  {
    id: "route-1",
    name: "Eastern Corridor",
    color: "#3b82f6", // blue
    path: "M100,200 L300,150 L500,180 L700,120",
  },
  {
    id: "route-2",
    name: "Western Line",
    color: "#ef4444", // red
    path: "M100,300 L300,320 L500,280 L700,350",
  },
  {
    id: "route-3",
    name: "Northern Express",
    color: "#10b981", // green
    path: "M200,100 L250,200 L400,250 L600,220",
  },
]

const stations = [
  { id: "station-1", name: "Chicago Terminal", x: 100, y: 200, routeIds: ["route-1"] },
  { id: "station-2", name: "Detroit Junction", x: 300, y: 150, routeIds: ["route-1"] },
  { id: "station-3", name: "Cleveland Station", x: 500, y: 180, routeIds: ["route-1"] },
  { id: "station-4", name: "Pittsburgh Yard", x: 700, y: 120, routeIds: ["route-1"] },
  { id: "station-5", name: "Kansas City Hub", x: 100, y: 300, routeIds: ["route-2"] },
  { id: "station-6", name: "Denver Exchange", x: 300, y: 320, routeIds: ["route-2"] },
  { id: "station-7", name: "Salt Lake Depot", x: 500, y: 280, routeIds: ["route-2"] },
  { id: "station-8", name: "Portland Terminal", x: 700, y: 350, routeIds: ["route-2"] },
  { id: "station-9", name: "Minneapolis North", x: 200, y: 100, routeIds: ["route-3"] },
  { id: "station-10", name: "Omaha Central", x: 250, y: 200, routeIds: ["route-3"] },
  { id: "station-11", name: "St. Louis Gateway", x: 400, y: 250, routeIds: ["route-3"] },
  { id: "station-12", name: "Nashville Freight", x: 600, y: 220, routeIds: ["route-3"] },
]

// Mock cargo data
const cargoShipments = [
  {
    id: "cargo-1",
    type: "Coal",
    origin: "Chicago Terminal",
    destination: "Pittsburgh Yard",
    currentPosition: { x: 400, y: 165 }, // Somewhere between Detroit and Cleveland
    progress: 65,
    routeId: "route-1",
  },
  {
    id: "cargo-2",
    type: "Grain",
    origin: "Kansas City Hub",
    destination: "Portland Terminal",
    currentPosition: { x: 400, y: 300 }, // Somewhere between Denver and Salt Lake
    progress: 45,
    routeId: "route-2",
  },
  {
    id: "cargo-3",
    type: "Lumber",
    origin: "Minneapolis North",
    destination: "Nashville Freight",
    currentPosition: { x: 325, y: 225 }, // Somewhere between Omaha and St. Louis
    progress: 30,
    routeId: "route-3",
  },
]

interface CargoTrackingMapProps {
  selectedCargoId?: string
  height?: string
}

export function CargoTrackingMap({ selectedCargoId, height = "500px" }: CargoTrackingMapProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCargo, setSelectedCargo] = useState<(typeof cargoShipments)[0] | null>(null)
  const [hoveredStation, setHoveredStation] = useState<(typeof stations)[0] | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (selectedCargoId) {
      const cargo = cargoShipments.find((c) => c.id === selectedCargoId)
      if (cargo) {
        setSelectedCargo(cargo)
      }
    }
  }, [selectedCargoId])

  // Animation for trains
  useEffect(() => {
    if (isLoaded) {
      const interval = setInterval(() => {
        // In a real app, this would update positions based on real-time data
        // For this demo, we'll just keep the static positions
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isLoaded])

  if (!isLoaded) {
    return (
      <div className="relative w-full" style={{ height }}>
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 rounded-lg">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-slate-100" style={{ height }}>
      <div className="absolute top-2 left-2 z-10 bg-white/80 p-2 rounded-md text-sm">
        <div className="font-semibold mb-1">Railway Routes</div>
        {railwayRoutes.map((route) => (
          <div key={route.id} className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: route.color }}></div>
            <span>{route.name}</span>
          </div>
        ))}
      </div>

      {hoveredStation && (
        <div className="absolute top-2 right-2 z-10 bg-white/80 p-2 rounded-md text-sm">
          <div className="font-semibold">{hoveredStation.name}</div>
        </div>
      )}

      <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 800 400" className="absolute inset-0">
        {/* Draw railway routes */}
        {railwayRoutes.map((route) => (
          <path
            key={route.id}
            d={route.path}
            stroke={route.color}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="1 0"
          />
        ))}

        {/* Draw stations */}
        {stations.map((station) => (
          <g
            key={station.id}
            transform={`translate(${station.x}, ${station.y})`}
            onMouseEnter={() => setHoveredStation(station)}
            onMouseLeave={() => setHoveredStation(null)}
            className="cursor-pointer"
          >
            <circle r="8" fill="white" stroke="#374151" strokeWidth="2" />
            <text x="0" y="25" textAnchor="middle" fontSize="10" fill="#374151" className="pointer-events-none">
              {station.name.split(" ")[0]}
            </text>
          </g>
        ))}

        {/* Draw cargo shipments */}
        {cargoShipments.map((cargo) => {
          const isSelected = selectedCargo?.id === cargo.id
          return (
            <g
              key={cargo.id}
              transform={`translate(${cargo.currentPosition.x}, ${cargo.currentPosition.y})`}
              className={`cursor-pointer transition-transform duration-300 ${isSelected ? "scale-125" : ""}`}
              onClick={() => setSelectedCargo(cargo)}
            >
              <circle
                r="12"
                fill={isSelected ? "#3b82f6" : "white"}
                stroke={isSelected ? "#1e40af" : "#374151"}
                strokeWidth="2"
              />
              <Train
                className={`h-4 w-4 absolute ${isSelected ? "text-white" : "text-gray-700"}`}
                style={{ transform: "translate(-8px, -8px)" }}
              />
            </g>
          )
        })}
      </svg>

      {selectedCargo && (
        <div className="absolute bottom-2 left-2 right-2 bg-white/90 p-3 rounded-md shadow-md">
          <div className="flex items-center justify-between mb-2">
            <div className="font-semibold flex items-center">
              <Package className="h-4 w-4 mr-1" />
              {selectedCargo.type} Shipment
            </div>
            <button onClick={() => setSelectedCargo(null)} className="text-gray-500 hover:text-gray-700">
              ×
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-500">Origin:</span> {selectedCargo.origin}
            </div>
            <div>
              <span className="text-gray-500">Destination:</span> {selectedCargo.destination}
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between text-xs mb-1">
              <span>Progress</span>
              <span>{selectedCargo.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: `${selectedCargo.progress}%` }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
