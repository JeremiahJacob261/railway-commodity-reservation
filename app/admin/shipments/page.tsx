import { AdminHeader } from "@/components/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Download, MapPin, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// ...existing code...
const shipments = [
  {
    id: "SHP-001",
    orderId: "ORD-001",
    operator: "Alex Johnson",
    shipper: "Jackson Miller",
    origin: "Lagos Terminal",
    destination: "Kano Junction",
    status: "In Transit",
    date: "2025-01-10",
    commodity: "Coal",
    weight: "120 tons",
  },
  {
    id: "SHP-002",
    orderId: "ORD-002",
    operator: "Maria Garcia",
    shipper: "Sophia Anderson",
    origin: "Port Harcourt Hub",
    destination: "Kaduna Terminal",
    status: "Loading",
    date: "2025-01-09",
    commodity: "Grain",
    weight: "85 tons",
  },
  {
    id: "SHP-003",
    orderId: "ORD-003",
    operator: "David Lee",
    shipper: "William Kim",
    origin: "Abuja North",
    destination: "Ibadan Freight",
    status: "Delivered",
    date: "2025-01-09",
    commodity: "Lumber",
    weight: "95 tons",
  },
  {
    id: "SHP-004",
    orderId: "ORD-005",
    operator: "Sarah Wilson",
    shipper: "Liam Johnson",
    origin: "Enugu Junction",
    destination: "Jos Station",
    status: "Delivered",
    date: "2025-01-08",
    commodity: "Automobiles",
    weight: "75 tons",
  },
  {
    id: "SHP-005",
    orderId: "ORD-006",
    operator: "Michael Brown",
    shipper: "Olivia Brown",
    origin: "Benin Gateway",
    destination: "Ibadan Freight",
    status: "In Transit",
    date: "2025-01-07",
    commodity: "Steel",
    weight: "150 tons",
  },
  {
    id: "SHP-006",
    orderId: "ORD-007",
    operator: "Jennifer Davis",
    shipper: "Noah Davis",
    origin: "Lagos Terminal",
    destination: "Enugu Junction",
    status: "Loading",
    date: "2025-01-07",
    commodity: "Chemicals",
    weight: "65 tons",
  },
  {
    id: "SHP-007",
    orderId: "ORD-008",
    operator: "Robert Martinez",
    shipper: "Ava Wilson",
    origin: "Kaduna Terminal",
    destination: "Maiduguri Depot",
    status: "Delivered",
    date: "2025-01-06",
    commodity: "Consumer Goods",
    weight: "90 tons",
  },
  {
    id: "SHP-008",
    orderId: "ORD-009",
    operator: "Emily Taylor",
    shipper: "James Taylor",
    origin: "Warri Yard",
    destination: "Jos Station",
    status: "In Transit",
    date: "2025-01-06",
    commodity: "Coal",
    weight: "130 tons",
  },
  {
    id: "SHP-009",
    orderId: "ORD-010",
    operator: "Daniel Thomas",
    shipper: "Isabella Thomas",
    origin: "Kano Exchange",
    destination: "Maiduguri Depot",
    status: "Delivered",
    date: "2025-01-05",
    commodity: "Machinery",
    weight: "110 tons",
  },
]
// ...existing code...
const statusColorMap: Record<string, string> = {
	Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
	Loading: "bg-blue-100 text-blue-800 hover:bg-blue-100/80",
	"In Transit": "bg-purple-100 text-purple-800 hover:bg-purple-100/80",
	Delivered: "bg-green-100 text-green-800 hover:bg-green-100/80",
	Delayed: "bg-red-100 text-red-800 hover:bg-red-100/80",
}

export default function ShipmentsPage() {
	return (
		<div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
			<AdminHeader title="Shipments" />
			<Card>
				<CardHeader>
					<CardTitle>Shipment Management</CardTitle>
					<CardDescription>Track and manage all cargo shipments in the system.</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col space-y-4">
						<div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:items-center">
							<div className="relative flex-1">
								<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
								<Input type="search" placeholder="Search shipments..." className="w-full pl-8" />
							</div>
							<div className="flex items-center space-x-2">
								<Select defaultValue="all">
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Filter by status" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">All Statuses</SelectItem>
										<SelectItem value="pending">Pending</SelectItem>
										<SelectItem value="loading">Loading</SelectItem>
										<SelectItem value="in-transit">In Transit</SelectItem>
										<SelectItem value="delivered">Delivered</SelectItem>
										<SelectItem value="delayed">Delayed</SelectItem>
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
											<TableHead>Order ID</TableHead>
											<TableHead>Operator</TableHead>
											<TableHead>Shipper</TableHead>
											<TableHead>Commodity</TableHead>
											<TableHead>Weight</TableHead>
											<TableHead>Status</TableHead>
											<TableHead>Date</TableHead>
											<TableHead className="hidden md:table-cell">Route</TableHead>
											<TableHead className="text-right">Actions</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{shipments.map((shipment) => (
											<TableRow key={shipment.id}>
												<TableCell className="font-medium">{shipment.id}</TableCell>
												<TableCell>{shipment.orderId}</TableCell>
												<TableCell>{shipment.operator}</TableCell>
												<TableCell>{shipment.shipper}</TableCell>
												<TableCell>{shipment.commodity}</TableCell>
												<TableCell>{shipment.weight}</TableCell>
												<TableCell>
													<Badge className={statusColorMap[shipment.status]}>{shipment.status}</Badge>
												</TableCell>
												<TableCell>{shipment.date}</TableCell>
												<TableCell className="hidden md:table-cell">
													<div className="flex items-center space-x-1">
														<MapPin className="h-3 w-3 text-muted-foreground" />
														<span className="text-xs">
															{shipment.origin} → {shipment.destination}
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
