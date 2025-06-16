import { AdminHeader } from "@/components/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Download, Search, Train, AlertCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

// ...existing code...
const trains = [
  {
    id: "TRN-001",
    name: "Lagos Express",
    type: "Freight",
    operator: "Alex Johnson",
    status: "In Service",
    location: "Between Enugu and Jos",
    capacity: "200 tons",
    currentLoad: "180 tons",
    loadPercentage: 90,
    nextMaintenance: "2025-02-15",
    maintenanceStatus: "Good",
  },
  {
    id: "TRN-002",
    name: "Northern Hauler",
    type: "Freight",
    operator: "Maria Okoro",
    status: "In Service",
    location: "Kano Exchange",
    capacity: "250 tons",
    currentLoad: "200 tons",
    loadPercentage: 80,
    nextMaintenance: "2025-02-10",
    maintenanceStatus: "Good",
  },
  {
    id: "TRN-003",
    name: "Eastern Carrier",
    type: "Freight",
    operator: "David Lee",
    status: "In Service",
    location: "Between Abuja and Kaduna",
    capacity: "180 tons",
    currentLoad: "160 tons",
    loadPercentage: 89,
    nextMaintenance: "2025-03-05",
    maintenanceStatus: "Good",
  },
  {
    id: "TRN-004",
    name: "Southern Link",
    type: "Mixed",
    operator: "Sarah Wilson",
    status: "Maintenance",
    location: "Ibadan Freight Yard",
    capacity: "150 tons",
    currentLoad: "0 tons",
    loadPercentage: 0,
    nextMaintenance: "In Progress",
    maintenanceStatus: "Under Repair",
  },
  {
    id: "TRN-005",
    name: "Central Connector",
    type: "Freight",
    operator: "Michael Brown",
    status: "In Service",
    location: "Between Lagos and Enugu",
    capacity: "220 tons",
    currentLoad: "190 tons",
    loadPercentage: 86,
    nextMaintenance: "2025-02-28",
    maintenanceStatus: "Good",
  },
  {
    id: "TRN-006",
    name: "Niger Delta Runner",
    type: "Freight",
    operator: "Jennifer Davis",
    status: "Loading",
    location: "Port Harcourt Terminal",
    capacity: "240 tons",
    currentLoad: "120 tons",
    loadPercentage: 50,
    nextMaintenance: "2025-03-15",
    maintenanceStatus: "Good",
  },
  {
    id: "TRN-007",
    name: "Plateau Climber",
    type: "Freight",
    operator: "Robert Martinez",
    status: "In Service",
    location: "Between Kano and Maiduguri",
    capacity: "200 tons",
    currentLoad: "185 tons",
    loadPercentage: 93,
    nextMaintenance: "2025-02-20",
    maintenanceStatus: "Needs Inspection",
  },
  {
    id: "TRN-008",
    name: "Coastal Connector",
    type: "Mixed",
    operator: "Emily Taylor",
    status: "In Service",
    location: "Kaduna Terminal",
    capacity: "180 tons",
    currentLoad: "150 tons",
    loadPercentage: 83,
    nextMaintenance: "2025-03-10",
    maintenanceStatus: "Good",
  },
  {
    id: "TRN-009",
    name: "Middle Belt Hauler",
    type: "Freight",
    operator: "Daniel Thomas",
    status: "In Service",
    location: "Between Benin City and Ibadan",
    capacity: "230 tons",
    currentLoad: "210 tons",
    loadPercentage: 91,
    nextMaintenance: "2025-02-25",
    maintenanceStatus: "Good",
  },
  {
    id: "TRN-010",
    name: "Savannah Express",
    type: "Freight",
    operator: "Unassigned",
    status: "Out of Service",
    location: "Port Harcourt Hub",
    capacity: "210 tons",
    currentLoad: "0 tons",
    loadPercentage: 0,
    nextMaintenance: "2025-02-05",
    maintenanceStatus: "Major Repairs Needed",
  },
]
// ...existing code...

const statusColorMap: Record<string, string> = {
  "In Service": "bg-green-100 text-green-800 hover:bg-green-100/80",
  Loading: "bg-blue-100 text-blue-800 hover:bg-blue-100/80",
  Maintenance: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
  "Out of Service": "bg-red-100 text-red-800 hover:bg-red-100/80",
}

const maintenanceColorMap: Record<string, string> = {
  Good: "text-green-600",
  "Needs Inspection": "text-yellow-600",
  "Under Repair": "text-blue-600",
  "Major Repairs Needed": "text-red-600",
}

export default function TrainsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <AdminHeader title="Train Management" />
      <Card>
        <CardHeader>
          <CardTitle>Railway Fleet</CardTitle>
          <CardDescription>Manage and monitor all trains in the railway network.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search trains..." className="w-full pl-8" />
              </div>
              <div className="flex items-center space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="in-service">In Service</SelectItem>
                    <SelectItem value="loading">Loading</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="out-of-service">Out of Service</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
              </div>
            </div>
            <div className="rounded-md border overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Operator</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Load</TableHead>
                      <TableHead>Maintenance</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {trains.map((train) => (
                      <TableRow key={train.id}>
                        <TableCell className="font-medium">{train.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Train className="h-4 w-4 mr-2 text-muted-foreground" />
                            {train.name}
                          </div>
                        </TableCell>
                        <TableCell>{train.type}</TableCell>
                        <TableCell>{train.operator}</TableCell>
                        <TableCell>
                          <Badge className={statusColorMap[train.status]}>{train.status}</Badge>
                        </TableCell>
                        <TableCell className="max-w-[180px] truncate">{train.location}</TableCell>
                        <TableCell>
                          <div className="w-24">
                            <div className="flex justify-between text-xs mb-1">
                              <span>{train.loadPercentage}%</span>
                            </div>
                            <Progress value={train.loadPercentage} className="h-2" />
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {train.maintenanceStatus !== "Good" && <AlertCircle className="h-3 w-3 mr-1" />}
                            <span className={maintenanceColorMap[train.maintenanceStatus]}>
                              {train.maintenanceStatus}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
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
