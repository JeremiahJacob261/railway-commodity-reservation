import { ShipperHeader } from "@/components/shipper-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import { createServerSupabaseClient } from "@/lib/supabase"
import { CargoTrackingMap } from "@/components/cargo-tracking-map"

async function getActiveShipments() {
  const supabase = createServerSupabaseClient()

  const { data: shipments, error } = await supabase
    .from("rail_shipments")
    .select(`
      id,
      reference_number,
      origin:rail_stations!rail_shipments_origin_id_fkey(id, name, code),
      destination:rail_stations!rail_shipments_destination_id_fkey(id, name, code),
      commodity:rail_commodities(id, name),
      weight_tons,
      status,
      scheduled_departure,
      scheduled_arrival
    `)
    .in("status", ["Pending", "Loading", "In Transit", "Delayed"])
    .order("created_at", { ascending: false })
    .limit(5)

  if (error) {
    console.error("Error fetching active shipments:", error)
    return []
  }

  return shipments || []
}

const statusColorMap: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
  Loading: "bg-blue-100 text-blue-800 hover:bg-blue-100/80",
  "In Transit": "bg-purple-100 text-purple-800 hover:bg-purple-100/80",
  Delivered: "bg-green-100 text-green-800 hover:bg-green-100/80",
  Cancelled: "bg-red-100 text-red-800 hover:bg-red-100/80",
  Delayed: "bg-orange-100 text-orange-800 hover:bg-orange-100/80",
}

export default async function ActiveShipmentsPage() {
  const shipments = await getActiveShipments()

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <ShipperHeader title="Active Shipments" />

      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
        <CargoTrackingMap showAllShipments={true} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Shipments</CardTitle>
          <CardDescription>Monitor your currently active cargo shipments.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Reference #</TableHead>
                  <TableHead>Origin</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Commodity</TableHead>
                  <TableHead>Weight (tons)</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shipments.length > 0 ? (
                  shipments.map((shipment) => (
                    <TableRow key={shipment.id}>
                      <TableCell className="font-medium">{shipment.reference_number}</TableCell>
                      <TableCell>
                        {shipment.origin?.name} ({shipment.origin?.code})
                      </TableCell>
                      <TableCell>
                        {shipment.destination?.name} ({shipment.destination?.code})
                      </TableCell>
                      <TableCell>{shipment.commodity?.name}</TableCell>
                      <TableCell>{shipment.weight_tons}</TableCell>
                      <TableCell>
                        <Badge className={statusColorMap[shipment.status]}>{shipment.status}</Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Contact
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-4">
                      No active shipments found. Create a new shipment to get started.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
