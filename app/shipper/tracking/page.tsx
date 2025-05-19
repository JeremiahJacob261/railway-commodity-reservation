import { ShipperHeader } from "@/components/shipper-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { createServerSupabaseClient } from "@/lib/supabase"

async function getShipments() {
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
    .order("created_at", { ascending: false })
    .limit(10)

  if (error) {
    console.error("Error fetching shipments:", error)
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

export default async function TrackingPage() {
  const shipments = await getShipments()

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <ShipperHeader title="Track Cargo" />

      <Card>
        <CardHeader>
          <CardTitle>Shipment Tracking</CardTitle>
          <CardDescription>Track the status and location of your cargo shipments.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search by reference number..." className="w-full pl-8" />
              </div>
            </div>

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
                            <MapPin className="h-4 w-4 mr-1" />
                            View Map
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-4">
                        No shipments found. Your shipments will appear here once created.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-end space-x-2">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
