import { AdminHeader } from "@/components/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Download, MapPin, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// ...existing code...
const deliveries = [
  {
    id: "DEL-001",
    orderId: "ORD-001",
    agent: "Alex Johnson",
    customer: "Jackson Akpan",
    pickup: "15 Victoria Island, Lagos, Nigeria",
    dropoff: "22 Independence Way, Kaduna, Nigeria",
    status: "In Transit",
    date: "2025-01-10",
  },
  {
    id: "DEL-002",
    orderId: "ORD-002",
    agent: "Maria Okoro",
    customer: "Sophia Jamiu",
    pickup: "8 Ogbomoso Street, Ibadan, Nigeria",
    dropoff: "31 Niger Bridge Road, Onitsha, Nigeria",
    status: "Assigned",
    date: "2025-01-09",
  },
  {
    id: "DEL-003",
    orderId: "ORD-003",
    agent: "David Lee",
    customer: "William Kim",
    pickup: "12 Ahmadu Bello Way, Abuja, Nigeria",
    dropoff: "5 New Market Road, Enugu, Nigeria",
    status: "Completed",
    date: "2025-01-09",
  },
  {
    id: "DEL-004",
    orderId: "ORD-005",
    agent: "Sarah Wilson",
    customer: "Liam Johnson",
    pickup: "18 Sapele Road, Benin City, Nigeria",
    dropoff: "9 Bompai Road, Kano, Nigeria",
    status: "Completed",
    date: "2025-01-08",
  },
  {
    id: "DEL-005",
    orderId: "ORD-006",
    agent: "Michael Brown",
    customer: "Olivia Brown",
    pickup: "25 Aba Road, Port Harcourt, Nigeria",
    dropoff: "14 Yakubu Gowon Way, Jos, Nigeria",
    status: "In Transit",
    date: "2025-01-07",
  },
  {
    id: "DEL-006",
    orderId: "ORD-007",
    agent: "Jennifer Davis",
    customer: "Noah Davis",
    pickup: "7 Allen Avenue, Ikeja, Nigeria",
    dropoff: "19 Sokoto Road, Kaduna, Nigeria",
    status: "Assigned",
    date: "2025-01-07",
  },
  {
    id: "DEL-007",
    orderId: "ORD-008",
    agent: "Robert Martinez",
    customer: "Ava Wilson",
    pickup: "11 Effurun Road, Warri, Nigeria",
    dropoff: "6 Ramat Road, Maiduguri, Nigeria",
    status: "Completed",
    date: "2025-01-06",
  },
  {
    id: "DEL-008",
    orderId: "ORD-009",
    agent: "Amina Hassan",
    customer: "Olumide Adebayo",
    pickup: "13 Ring Road, Ibadan, Nigeria",
    dropoff: "4 Chestnut Close, Abuja, Nigeria",
    status: "Pending",
    date: "2025-01-05",
  },
]
// ...existing code...

const statusColorMap: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
  Assigned: "bg-blue-100 text-blue-800 hover:bg-blue-100/80",
  "In Transit": "bg-purple-100 text-purple-800 hover:bg-purple-100/80",
  Completed: "bg-green-100 text-green-800 hover:bg-green-100/80",
  Failed: "bg-red-100 text-red-800 hover:bg-red-100/80",
}

export default function DeliveriesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <AdminHeader title="Deliveries" />
      <Card>
        <CardHeader>
          <CardTitle>Delivery Management</CardTitle>
          <CardDescription>Track and manage all deliveries in the system.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search deliveries..." className="w-full pl-8" />
              </div>
              <div className="flex items-center space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="assigned">Assigned</SelectItem>
                    <SelectItem value="in-transit">In Transit</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
              </div>
            </div>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Agent</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="hidden md:table-cell">Location</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deliveries.map((delivery) => (
                    <TableRow key={delivery.id}>
                      <TableCell className="font-medium">{delivery.id}</TableCell>
                      <TableCell>{delivery.orderId}</TableCell>
                      <TableCell>{delivery.agent}</TableCell>
                      <TableCell>{delivery.customer}</TableCell>
                      <TableCell>
                        <Badge className={statusColorMap[delivery.status]}>{delivery.status}</Badge>
                      </TableCell>
                      <TableCell>{delivery.date}</TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MapPin className="h-4 w-4" />
                          <span className="sr-only">View on map</span>
                        </Button>
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
