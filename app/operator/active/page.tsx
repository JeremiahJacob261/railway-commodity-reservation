import { OperatorHeader } from "@/components/operator-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, MessageSquare, Package, User, Train } from "lucide-react"
import { CargoTrackingMap } from "@/components/cargo-tracking-map"

export default function ActiveShipmentsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <OperatorHeader title="Active Shipments" />

      <Tabs defaultValue="current" className="space-y-4">
        <TabsList>
          <TabsTrigger value="current">Current Shipment</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming (2)</TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Shipment Details</CardTitle>
                <CardDescription>Current active cargo information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Order #ORD-001</h3>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100/80">In Transit</Badge>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Package className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Coal - 120 tons</p>
                      <p className="text-xs text-muted-foreground">Category: Bulk Commodity</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Origin</p>
                      <p className="text-sm text-muted-foreground">Garki Terminal</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Destination</p>
                      <p className="text-sm text-muted-foreground">Onitsha Yard</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <User className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Shipper</p>
                      <p className="text-sm text-muted-foreground">Jackson Akpan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Train className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Train</p>
                      <p className="text-sm text-muted-foreground">Eastern Express (TRN-001)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Estimated Time</p>
                      <p className="text-sm text-muted-foreground">2 days (450 miles)</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <Button>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact Shipper
                  </Button>
                  <Button variant="outline">Update Status</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Route Map</CardTitle>
                <CardDescription>Live navigation and tracking</CardDescription>
              </CardHeader>
              <CardContent className="p-0 overflow-hidden rounded-b-lg">
                <CargoTrackingMap selectedCargoId="cargo-1" height="400px" />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Shipment Progress</CardTitle>
              <CardDescription>Track the status of your current cargo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-muted-foreground/20"></div>
                </div>
                <div className="relative flex justify-between">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="mt-2 text-xs">Accepted</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="mt-2 text-xs">Loaded</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-train"
                      >
                        <rect x="4" y="3" width="16" height="16" rx="2" />
                        <path d="M4 11h16" />
                        <path d="M12 3v8" />
                        <path d="M8 19 6 21" />
                        <path d="m16 19 2 2" />
                        <circle cx="8" cy="15" r="1" />
                        <circle cx="16" cy="15" r="1" />
                      </svg>
                    </div>
                    <span className="mt-2 text-xs">In Transit</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-package"
                      >
                        <path d="m7.5 4.27 9 5.15" />
                        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                        <path d="m3.3 7 8.7 5 8.7-5" />
                        <path d="M12 22V12" />
                      </svg>
                    </div>
                    <span className="mt-2 text-xs">Delivered</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check-circle"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                    </div>
                    <span className="mt-2 text-xs">Completed</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Shipments</CardTitle>
              <CardDescription>Your scheduled cargo for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">Order #ORD-002</h3>
                      <p className="text-sm text-muted-foreground">Grain - 85 tons</p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80">Scheduled</Badge>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Origin</p>
                        <p className="text-sm text-muted-foreground">Kaduna Hub</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Destination</p>
                        <p className="text-sm text-muted-foreground">Yola Terminal</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Loading at: 3:30 PM</span>
                    </div>
                    <Button size="sm">Start Loading</Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">Order #ORD-003</h3>
                      <p className="text-sm text-muted-foreground">Lumber - 95 tons</p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80">Scheduled</Badge>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Origin</p>
                        <p className="text-sm text-muted-foreground">Kano North</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">Destination</p>
                        <p className="text-sm text-muted-foreground">Nashville Freight</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Loading at: 4:45 PM</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
