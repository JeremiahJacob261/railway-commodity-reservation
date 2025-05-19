import { OperatorHeader } from "@/components/operator-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { createServerSupabaseClient } from "@/lib/supabase"

async function getTrains() {
  const supabase = createServerSupabaseClient()

  const { data: trains, error } = await supabase
    .from("rail_trains")
    .select(`
      id,
      train_number,
      name,
      type,
      capacity_tons,
      current_load_tons,
      status,
      current_station:rail_stations(id, name, code)
    `)
    .order("created_at", { ascending: false })
    .limit(10)

  if (error) {
    console.error("Error fetching trains:", error)
    return []
  }

  return trains || []
}

const statusColorMap: Record<string, string> = {
  "In Service": "bg-green-100 text-green-800 hover:bg-green-100/80",
  Loading: "bg-blue-100 text-blue-800 hover:bg-blue-100/80",
  Maintenance: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
  "Out of Service": "bg-red-100 text-red-800 hover:bg-red-100/80",
}

export default async function TrainsPage() {
  const trains = await getTrains()

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <OperatorHeader title="Train Management" />

      <Card>
        <CardHeader>
          <CardTitle>Train Fleet</CardTitle>
          <CardDescription>View and manage trains in your operational fleet.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search trains..." className="w-full pl-8" />
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Train Number</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Capacity (tons)</TableHead>
                    <TableHead>Current Load</TableHead>
                    <TableHead>Current Location</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trains.length > 0 ? (
                    trains.map((train) => (
                      <TableRow key={train.id}>
                        <TableCell className="font-medium">{train.train_number}</TableCell>
                        <TableCell>{train.name}</TableCell>
                        <TableCell>{train.type}</TableCell>
                        <TableCell>{train.capacity_tons}</TableCell>
                        <TableCell>{train.current_load_tons} tons</TableCell>
                        <TableCell>{train.current_station?.name || "In Transit"}</TableCell>
                        <TableCell>
                          <Badge className={statusColorMap[train.status]}>{train.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-4">
                        No trains found. Trains will appear here once added.
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
