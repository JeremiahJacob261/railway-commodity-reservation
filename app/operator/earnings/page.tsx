import type { Metadata } from "next"
import { OperatorHeader } from "@/components/operator-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { Overview } from "@/components/dashboard/overview"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export const metadata: Metadata = {
  title: "Earnings | RailCargo",
  description: "Operator earnings for RailCargo system",
}

export default function OperatorEarningsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <OperatorHeader />
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Earnings</h2>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Month</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$5,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Year to Date</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$42,891.25</div>
                <p className="text-xs text-muted-foreground">+180.1% from last year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,250.00</div>
                <p className="text-xs text-muted-foreground">To be paid on Nov 15</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Earnings Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Payments</CardTitle>
                <CardDescription>Your most recent earnings</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Shipment</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentPayments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>{payment.shipment}</TableCell>
                        <TableCell className="text-right">{payment.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>A record of all your earnings</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Shipment</TableHead>
                    <TableHead>Route</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paymentHistory.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>{payment.shipment}</TableCell>
                      <TableCell>{payment.route}</TableCell>
                      <TableCell>{payment.status}</TableCell>
                      <TableCell className="text-right">{payment.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Earnings Analytics</CardTitle>
              <CardDescription>Your earnings performance over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const recentPayments = [
  {
    id: "1",
    date: "Nov 1, 2023",
    shipment: "RC-12340",
    amount: "$850.00",
  },
  {
    id: "2",
    date: "Oct 28, 2023",
    shipment: "RC-12335",
    amount: "$1,200.00",
  },
  {
    id: "3",
    date: "Oct 25, 2023",
    shipment: "RC-12330",
    amount: "$950.00",
  },
  {
    id: "4",
    date: "Oct 20, 2023",
    shipment: "RC-12325",
    amount: "$1,100.00",
  },
  {
    id: "5",
    date: "Oct 15, 2023",
    shipment: "RC-12320",
    amount: "$780.00",
  },
]

const paymentHistory = [
  {
    id: "1",
    date: "Nov 1, 2023",
    shipment: "RC-12340",
    route: "Cleveland to Detroit",
    status: "Paid",
    amount: "$850.00",
  },
  {
    id: "2",
    date: "Oct 28, 2023",
    shipment: "RC-12335",
    route: "Chicago to Pittsburgh",
    status: "Paid",
    amount: "$1,200.00",
  },
  {
    id: "3",
    date: "Oct 25, 2023",
    shipment: "RC-12330",
    route: "Minneapolis to Kansas City",
    status: "Paid",
    amount: "$950.00",
  },
  {
    id: "4",
    date: "Oct 20, 2023",
    shipment: "RC-12325",
    route: "Detroit to Nashville",
    status: "Paid",
    amount: "$1,100.00",
  },
  {
    id: "5",
    date: "Oct 15, 2023",
    shipment: "RC-12320",
    route: "Portland to Salt Lake City",
    status: "Paid",
    amount: "$780.00",
  },
  {
    id: "6",
    date: "Oct 10, 2023",
    shipment: "RC-12315",
    route: "Chicago to Cleveland",
    status: "Paid",
    amount: "$920.00",
  },
  {
    id: "7",
    date: "Oct 5, 2023",
    shipment: "RC-12310",
    route: "Kansas City to Denver",
    status: "Paid",
    amount: "$1,050.00",
  },
  {
    id: "8",
    date: "Oct 1, 2023",
    shipment: "RC-12305",
    route: "Pittsburgh to Cleveland",
    status: "Paid",
    amount: "$800.00",
  },
]
