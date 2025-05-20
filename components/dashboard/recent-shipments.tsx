"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentShipments() {
  return (
    <div className="space-y-8">
      {recentShipments.map((shipment) => (
        <div key={shipment.id} className="flex items-center">
          <Avatar className="h-9 w-9 mr-3">
            <AvatarFallback className={shipment.statusColor}>{shipment.origin.charAt(0)}</AvatarFallback>
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

const recentShipments = [
  {
    id: "1",
    commodity: "Coal",
    origin: "Chicago",
    destination: "Pittsburgh",
    status: "In Transit",
    statusColor: "bg-blue-500",
    statusBg: "bg-blue-100",
    statusText: "text-blue-800",
  },
  {
    id: "2",
    commodity: "Grain",
    origin: "Minneapolis",
    destination: "Kansas City",
    status: "Loading",
    statusColor: "bg-yellow-500",
    statusBg: "bg-yellow-100",
    statusText: "text-yellow-800",
  },
  {
    id: "3",
    commodity: "Steel",
    origin: "Cleveland",
    destination: "Detroit",
    status: "Delivered",
    statusColor: "bg-green-500",
    statusBg: "bg-green-100",
    statusText: "text-green-800",
  },
  {
    id: "4",
    commodity: "Lumber",
    origin: "Portland",
    destination: "Salt Lake City",
    status: "Pending",
    statusColor: "bg-gray-500",
    statusBg: "bg-gray-100",
    statusText: "text-gray-800",
  },
  {
    id: "5",
    commodity: "Automobiles",
    origin: "Detroit",
    destination: "Nashville",
    status: "In Transit",
    statusColor: "bg-blue-500",
    statusBg: "bg-blue-100",
    statusText: "text-blue-800",
  },
]
