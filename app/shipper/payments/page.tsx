import type { Metadata } from "next"
import { ShipperHeader } from "@/components/shipper-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Payment History | RailCargo",
  description: "Shipper payment history for RailCargo system",
}

export default function ShipperPaymentsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <ShipperHeader />
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Payment History</h2>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
        </div>
      </div>
      <Tabs defaultValue="history" className="space-y-4">
        <TabsList>
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="pending">Pending Payments</TabsTrigger>
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
        </TabsList>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>A record of all your payments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Shipment</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentHistory.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>{payment.invoice}</TableCell>
                      <TableCell>{payment.shipment}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={payment.statusClass}>
                          {payment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Payments</CardTitle>
              <CardDescription>Payments that require your attention</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Shipment</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>{payment.dueDate}</TableCell>
                      <TableCell>{payment.invoice}</TableCell>
                      <TableCell>{payment.shipment}</TableCell>
                      <TableCell>{payment.amount}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
                          {payment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm">Pay Now</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="methods" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border rounded-md">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-2 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <path d="M2 10h20" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/25</p>
                    </div>
                  </div>
                  <Badge>Default</Badge>
                </div>

                <div className="flex justify-between items-center p-4 border rounded-md">
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-100 p-2 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-red-600"
                      >
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <path d="M2 10h20" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Mastercard ending in 5555</p>
                      <p className="text-sm text-muted-foreground">Expires 08/24</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Make Default
                  </Button>
                </div>

                <Button className="w-full">Add Payment Method</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const paymentHistory = [
  {
    id: "1",
    date: "Nov 1, 2023",
    invoice: "INV-2023-001",
    shipment: "RC-12345",
    amount: "₦1,250.00",
    status: "Paid",
    statusClass: "bg-green-100 text-green-800",
  },
  {
    id: "2",
    date: "Oct 15, 2023",
    invoice: "INV-2023-002",
    shipment: "RC-12346",
    amount: "₦980.00",
    status: "Paid",
    statusClass: "bg-green-100 text-green-800",
  },
  {
    id: "3",
    date: "Oct 5, 2023",
    invoice: "INV-2023-003",
    shipment: "RC-12347",
    amount: "₦1,500.00",
    status: "Paid",
    statusClass: "bg-green-100 text-green-800",
  },
  {
    id: "4",
    date: "Sep 28, 2023",
    invoice: "INV-2023-004",
    shipment: "RC-12348",
    amount: "₦750.00",
    status: "Paid",
    statusClass: "bg-green-100 text-green-800",
  },
  {
    id: "5",
    date: "Sep 15, 2023",
    invoice: "INV-2023-005",
    shipment: "RC-12349",
    amount: "₦2,100.00",
    status: "Paid",
    statusClass: "bg-green-100 text-green-800",
  },
]

const pendingPayments = [
  {
    id: "1",
    dueDate: "Nov 15, 2023",
    invoice: "INV-2023-006",
    shipment: "RC-12350",
    amount: "₦1,800.00",
    status: "Pending",
  },
  {
    id: "2",
    dueDate: "Nov 20, 2023",
    invoice: "INV-2023-007",
    shipment: "RC-12351",
    amount: "₦950.00",
    status: "Pending",
  },
]
