import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const deliveries = [
	{
		id: "ORD-001",
		date: "2025-01-10",
		from: "15 Victoria Island, Lagos, Nigeria",
		to: "22 Independence Way, Kaduna, Nigeria",
		status: "In Transit",
		cost: "$45.00",
	},
	{
		id: "ORD-002",
		date: "2025-01-09",
		from: "8 Ogbomoso Street, Ibadan, Nigeria",
		to: "31 Niger Bridge Road, Onitsha, Nigeria",
		status: "Delivered",
		cost: "$28.50",
	},
	{
		id: "ORD-003",
		date: "2025-01-09",
		from: "12 Ahmadu Bello Way, Abuja, Nigeria",
		to: "5 New Market Road, Enugu, Nigeria",
		status: "Delivered",
		cost: "$32.75",
	},
	{
		id: "ORD-004",
		date: "2025-01-08",
		from: "18 Sapele Road, Benin City, Nigeria",
		to: "9 Bompai Road, Kano, Nigeria",
		status: "Cancelled",
		cost: "$0.00",
	},
	{
		id: "ORD-005",
		date: "2025-01-08",
		from: "25 Aba Road, Port Harcourt, Nigeria",
		to: "14 Yakubu Gowon Way, Jos, Nigeria",
		status: "Delivered",
		cost: "$41.20",
	},
	{
		id: "ORD-006",
		date: "2025-01-06",
		from: "7 Allen Avenue, Ikeja, Nigeria",
		to: "19 Sokoto Road, Kaduna, Nigeria",
		status: "Delivered",
		cost: "$19.75",
	},
	{
		id: "ORD-007",
		date: "2025-01-05",
		from: "11 Effurun Road, Warri, Nigeria",
		to: "6 Ramat Road, Maiduguri, Nigeria",
		status: "Delivered",
		cost: "$31.25",
	},
]

const statusColorMap: Record<string, string> = {
	Pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
	"In Transit": "bg-blue-100 text-blue-800 hover:bg-blue-100/80",
	Delivered: "bg-green-100 text-green-800 hover:bg-green-100/80",
	Cancelled: "bg-red-100 text-red-800 hover:bg-red-100/80",
}

export function DeliveryHistory() {
	return (
		<div className="rounded-md border">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Order ID</TableHead>
						<TableHead>Date</TableHead>
						<TableHead className="hidden md:table-cell">From</TableHead>
						<TableHead className="hidden md:table-cell">To</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Cost</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{deliveries.map((delivery) => (
						<TableRow key={delivery.id}>
							<TableCell className="font-medium">{delivery.id}</TableCell>
							<TableCell>{delivery.date}</TableCell>
							<TableCell className="hidden md:table-cell max-w-[150px] truncate">
								{delivery.from}
							</TableCell>
							<TableCell className="hidden md:table-cell max-w-[150px] truncate">
								{delivery.to}
							</TableCell>
							<TableCell>
								<Badge className={statusColorMap[delivery.status]}>
									{delivery.status}
								</Badge>
							</TableCell>
							<TableCell>{delivery.cost}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}
