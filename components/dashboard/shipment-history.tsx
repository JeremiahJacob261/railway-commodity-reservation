"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function ShipmentHistory() {
  return (
    <div className="space-y-8">
      {shipmentHistory.map((shipment) => (
        <div key={shipment.id} className="flex items-center">
          <Avatar className="h-9 w-9 mr-3">
            <AvatarFallback className={shipment.statusColor}>{shipment.commodity.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{shipment.commodity}</p>
            <p className="text-sm text-muted-foreground">
              {shipment.origin} → {shipment.destination}
            </p>
          </div>
          <div className="ml-auto font-medium">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${shipment.statusBg} ${shipment.statusText}`}
            >
              {shipment.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

const shipmentHistory = [
  {
    id: "1",
    commodity: "Coal",
    origin: "Garki",
    destination: "Onitsha",
    status: "Delivered",
    statusColor: "bg-green-500",
    statusBg: "bg-green-100",
    statusText: "text-green-800",
    date: "2023-10-15",
  },
  {
    id: "2",
    commodity: "Grain",
    origin: "Kano",
    destination: "Kaduna",
    status: "In Transit",
    statusColor: "bg-blue-500",
    statusBg: "bg-blue-100",
    statusText: "text-blue-800",
    date: "2023-10-18",
  },
  {
    id: "3",
    commodity: "Steel",
    origin: "Ogbomosho",
    destination: "Detroit",
    status: "Delivered",
    statusColor: "bg-green-500",
    statusBg: "bg-green-100",
    statusText: "text-green-800",
    date: "2023-10-10",
  },
  {
    id: "4",
    commodity: "Lumber",
    origin: "Yola",
    destination: "Gwagwalada City",
    status: "Cancelled",
    statusColor: "bg-red-500",
    statusBg: "bg-red-100",
    statusText: "text-red-800",
    date: "2023-10-05",
  },
  {
    id: "5",
    commodity: "Automobiles",
    origin: "Detroit",
    destination: "Nashville",
    status: "Delivered",
    statusColor: "bg-green-500",
    statusBg: "bg-green-100",
    statusText: "text-green-800",
    date: "2023-10-01",
  },
]
