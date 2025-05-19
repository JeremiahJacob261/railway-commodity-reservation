import { OperatorHeader } from "@/components/operator-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { createServerSupabaseClient } from "@/lib/supabase"

async function getRoutes() {
  const supabase = createServerSupabaseClient()

  const { data: routes, error } = await supabase
    .from("rail_routes")
    .select(`
      id,
      distance_km,
      estimated_duration_hours,
      is_active,
      origin:rail_stations!rail_routes_origin_id_fkey(id, name, code),
      destination:rail_stations!rail_routes_destination_id_fkey(id, name, code)
    `)
    .order("created_at", { ascending: false })
    .limit(10)

  if (error) {
    console.error("Error fetching routes:", error)
    return []
  }

  return routes || []
}

export default async function RoutesPage() {
  const routes = await getRoutes()

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <OperatorHeader title="Route Tracking" />

      <Card>
        <CardHeader>
          <CardTitle>Railway Routes</CardTitle>
          <CardDescription>View and track available railway routes for cargo shipments.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search routes..." className="w-full pl-8" />
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Origin</TableHead>
                    <TableHead>Destination</TableHead>
                    <TableHead>Distance (km)</TableHead>
                    <TableHead>Est. Duration (hrs)</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {routes.length > 0 ? (
                    routes.map((route) => (
                      <TableRow key={route.id}>
                        <TableCell>
                          {route.origin?.name} ({route.origin?.code})
                        </TableCell>
                        <TableCell>
                          {route.destination?.name} ({route.destination?.code})
                        </TableCell>
                        <TableCell>{route.distance_km}</TableCell>
                        <TableCell>{route.estimated_duration_hours}</TableCell>
                        <TableCell>
                          <Badge
                            className={route.is_active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                          >
                            {route.is_active ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-4">
                        No routes found. Routes will appear here once created.
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
