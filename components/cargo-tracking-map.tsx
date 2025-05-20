"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Train, Package, MapPin } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface TrackingMapProps {
  shipmentId?: string
  showAllShipments?: boolean
}

export function CargoTrackingMap({ shipmentId, showAllShipments = false }: TrackingMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedShipment, setSelectedShipment] = useState<string | null>(shipmentId || null)
  const [shipments, setShipments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchShipments = async () => {
      setLoading(true)

      const query = supabase
        .from("rail_shipments")
        .select(`
          id,
          reference_number,
          status,
          origin:rail_stations!rail_shipments_origin_id_fkey(id, name, code, latitude, longitude),
          destination:rail_stations!rail_shipments_destination_id_fkey(id, name, code, latitude, longitude),
          commodity:rail_commodities(id, name)
        `)
        .order("created_at", { ascending: false })

      if (!showAllShipments && shipmentId) {
        query.eq("id", shipmentId)
      }

      const { data, error } = await query.limit(10)

      if (error) {
        console.error("Error fetching shipments:", error)
      } else {
        setShipments(data || [])
        if (data && data.length > 0 && !selectedShipment) {
          setSelectedShipment(data[0].id)
        }
      }

      setLoading(false)
    }

    fetchShipments()
  }, [shipmentId, showAllShipments])

  useEffect(() => {
    if (mapRef.current && shipments.length > 0) {
      renderMap()
    }
  }, [shipments, selectedShipment])

  const renderMap = () => {
    if (!mapRef.current) return

    const canvas = document.createElement("canvas")
    canvas.width = mapRef.current.clientWidth
    canvas.height = 400
    mapRef.current.innerHTML = ""
    mapRef.current.appendChild(canvas)

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Draw map background
    ctx.fillStyle = "#f0f4f8"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw railway lines
    ctx.strokeStyle = "#888"
    ctx.lineWidth = 2
    ctx.beginPath()

    // Horizontal main line
    ctx.moveTo(50, 200)
    ctx.lineTo(canvas.width - 50, 200)

    // Branch lines
    ctx.moveTo(150, 100)
    ctx.lineTo(150, 300)

    ctx.moveTo(300, 50)
    ctx.lineTo(300, 350)

    ctx.moveTo(450, 150)
    ctx.lineTo(450, 250)

    ctx.moveTo(600, 100)
    ctx.lineTo(600, 300)

    ctx.stroke()

    // Draw stations
    const stationPositions: Record<string, { x: number; y: number }> = {
      CHI: { x: 100, y: 200 },
      PIT: { x: 700, y: 200 },
      KCY: { x: 150, y: 100 },
      PDX: { x: 150, y: 300 },
      MSP: { x: 300, y: 50 },
      NSH: { x: 300, y: 350 },
      DET: { x: 450, y: 150 },
      CLE: { x: 450, y: 250 },
      DEN: { x: 600, y: 100 },
      SLC: { x: 600, y: 300 },
    }

    // Draw all stations
    Object.entries(stationPositions).forEach(([code, pos]) => {
      ctx.fillStyle = "#333"
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = "#333"
      ctx.font = "12px Arial"
      ctx.fillText(code, pos.x - 12, pos.y - 10)
    })

    // Draw selected shipment
    const shipment = shipments.find((s) => s.id === selectedShipment)
    if (shipment) {
      const originCode = shipment.origin?.code
      const destCode = shipment.destination?.code

      if (originCode && destCode && stationPositions[originCode] && stationPositions[destCode]) {
        const origin = stationPositions[originCode]
        const dest = stationPositions[destCode]

        // Highlight origin and destination
        ctx.fillStyle = "#4CAF50"
        ctx.beginPath()
        ctx.arc(origin.x, origin.y, 8, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = "#F44336"
        ctx.beginPath()
        ctx.arc(dest.x, dest.y, 8, 0, Math.PI * 2)
        ctx.fill()

        // Draw route line
        ctx.strokeStyle = "#3B82F6"
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(origin.x, origin.y)

        // Create a simple path between origin and destination
        // In a real app, this would follow the actual railway lines
        if (Math.abs(origin.y - dest.y) < 10) {
          // If on same horizontal line, direct path
          ctx.lineTo(dest.x, dest.y)
        } else {
          // Otherwise, use intermediate points
          const midX = (origin.x + dest.x) / 2
          ctx.lineTo(midX, origin.y)
          ctx.lineTo(midX, dest.y)
          ctx.lineTo(dest.x, dest.y)
        }

        ctx.stroke()

        // Draw train on the route
        if (shipment.status === "In Transit") {
          // Position train somewhere on the route based on departure/arrival times
          const trainPos = 0.6 // 0 to 1, representing progress along route

          let trainX, trainY
          if (Math.abs(origin.y - dest.y) < 10) {
            // If on same horizontal line
            trainX = origin.x + (dest.x - origin.x) * trainPos
            trainY = origin.y
          } else {
            // If using intermediate points
            const midX = (origin.x + dest.x) / 2

            if (trainPos < 0.33) {
              // First segment
              const segmentPos = trainPos * 3
              trainX = origin.x + (midX - origin.x) * segmentPos
              trainY = origin.y
            } else if (trainPos < 0.66) {
              // Second segment (vertical)
              const segmentPos = (trainPos - 0.33) * 3
              trainX = midX
              trainY = origin.y + (dest.y - origin.y) * segmentPos
            } else {
              // Third segment
              const segmentPos = (trainPos - 0.66) * 3
              trainX = midX + (dest.x - midX) * segmentPos
              trainY = dest.y
            }
          }

          // Draw train icon
          ctx.fillStyle = "#3B82F6"
          ctx.beginPath()
          ctx.moveTo(trainX - 10, trainY - 5)
          ctx.lineTo(trainX + 10, trainY - 5)
          ctx.lineTo(trainX + 10, trainY + 5)
          ctx.lineTo(trainX - 10, trainY + 5)
          ctx.closePath()
          ctx.fill()

          // Draw train windows
          ctx.fillStyle = "#fff"
          ctx.fillRect(trainX - 7, trainY - 3, 3, 2)
          ctx.fillRect(trainX - 2, trainY - 3, 3, 2)
          ctx.fillRect(trainX + 3, trainY - 3, 3, 2)
        }

        // Add labels
        ctx.font = "bold 14px Arial"
        ctx.fillStyle = "#000"
        ctx.fillText("Origin: " + shipment.origin.name, 20, 30)
        ctx.fillText("Destination: " + shipment.destination.name, 20, 50)
        ctx.fillText("Status: " + shipment.status, 20, 70)
        ctx.fillText("Cargo: " + shipment.commodity.name, 20, 90)
      }
    }
  }

  const handleShipmentChange = (value: string) => {
    setSelectedShipment(value)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Cargo Tracking Map
            </CardTitle>
            <CardDescription>Real-time visualization of cargo shipments on railway network.</CardDescription>
          </div>

          {showAllShipments && shipments.length > 0 && (
            <div className="w-[200px]">
              <Select value={selectedShipment || undefined} onValueChange={handleShipmentChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select shipment" />
                </SelectTrigger>
                <SelectContent>
                  {shipments.map((shipment) => (
                    <SelectItem key={shipment.id} value={shipment.id}>
                      {shipment.reference_number}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="h-[400px] w-full flex items-center justify-center bg-slate-100 rounded-md">
            <div className="text-center">
              <Train className="h-10 w-10 mx-auto mb-2 text-slate-400 animate-pulse" />
              <p className="text-slate-500">Loading map data...</p>
            </div>
          </div>
        ) : shipments.length === 0 ? (
          <div className="h-[400px] w-full flex items-center justify-center bg-slate-100 rounded-md">
            <div className="text-center">
              <Package className="h-10 w-10 mx-auto mb-2 text-slate-400" />
              <p className="text-slate-500">No shipments found to display on map.</p>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div ref={mapRef} className="h-[400px] w-full rounded-md overflow-hidden" />

            {selectedShipment && (
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded-md shadow-md">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-green-100 text-green-800">Origin</Badge>
                  <Badge className="bg-red-100 text-red-800">Destination</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-blue-100 text-blue-800">
                    <Train className="h-3 w-3 mr-1" />
                    Train Position
                  </Badge>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
