import type { Metadata } from "next"
import { ShipperHeader } from "@/components/shipper-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { Overview } from "@/components/dashboard/overview"
import { ShipmentHistory } from "@/components/dashboard/shipment-history"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export const metadata: Metadata = {
  title: "Shipper Dashboard | RailCargo",
  description: "Shipper dashboard for RailCargo system",
}

export default async function ShipperDashboardPage() {
  const supabase = createServerComponentClient({ cookies })

  // Fetch active shipments count
  const { count: activeShipmentsCount } = await supabase
    .from("rail_shipments")
    .select("*", { count: "exact", head: true })
    .eq("status", "In Transit")

  // Fetch completed shipments count
  const { count: completedShipmentsCount } = await supabase
    .from("rail_shipments")
    .select("*", { count: "exact", head: true })
    .eq("status", "Delivered")

  // Fetch pending payments count
  const { count: pendingPaymentsCount } = await supabase
    .from("rail_payments")
    .select("*", { count: "exact", head: true })
    .eq("status", "Pending")

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <ShipperHeader />
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">Shipment History</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Shipments</CardTitle>
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
                <div className="text-2xl font-bold">{activeShipmentsCount || 0}</div>
                <p className="text-xs text-muted-foreground">+2.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Shipments</CardTitle>
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
                <div className="text-2xl font-bold">{completedShipmentsCount || 0}</div>
                <p className="text-xs text-muted-foreground">+10.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
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
                <div className="text-2xl font-bold">{pendingPaymentsCount || 0}</div>
                <p className="text-xs text-muted-foreground">+19% from last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Shipment History</CardTitle>
                <CardDescription>
                  You have shipped {(activeShipmentsCount || 0) + (completedShipmentsCount || 0)} items this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ShipmentHistory />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="history" className="space-y-4">
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Shipment History</CardTitle>
              <CardDescription>
                You have shipped {(activeShipmentsCount || 0) + (completedShipmentsCount || 0)} items this month.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ShipmentHistory />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Shipment Analytics</CardTitle>
              <CardDescription>Your shipment performance over time</CardDescription>
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
