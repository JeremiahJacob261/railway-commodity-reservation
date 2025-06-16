import type { Metadata } from "next"
import { ShipperHeader } from "@/components/shipper-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
  title: "Profile | RailCargo",
  description: "Shipper profile for RailCargo system",
}

export default function ShipperProfilePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <ShipperHeader />
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarFallback>JM</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">Jackson Akpan</h3>
            <p className="text-muted-foreground">Shipper</p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <Badge variant="outline" className="bg-blue-100 text-blue-800">
                Verified
              </Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800">
                Premium
              </Badge>
              <Badge variant="outline" className="bg-purple-100 text-purple-800">
                Bulk Shipper
              </Badge>
            </div>
            <div className="w-full mt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Member Since</span>
                <span className="font-medium">Mar 10, 2020</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipments</span>
                <span className="font-medium">248</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Volume</span>
                <span className="font-medium">45,280 tons</span>
              </div>
            </div>
            <Button className="w-full mt-6">Edit Profile</Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Account Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="personal" className="space-y-4">
              <TabsList>
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="company">Company Info</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" defaultValue="Jackson Akpan" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="shipper1@railcargo.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="555-456-7890" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountId">Account ID</Label>
                    <Input id="accountId" defaultValue="SH-20045" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" defaultValue="456 Commerce St, Garki, IL 60607" />
                  </div>
                </div>
                <Button>Save Changes</Button>
              </TabsContent>

              <TabsContent value="company" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" defaultValue="Akpan Industries" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="taxId">Tax ID</Label>
                    <Input id="taxId" defaultValue="12-3456789" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input id="industry" defaultValue="Manufacturing" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="www.Akpanindustries.com" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="companyAddress">Company Address</Label>
                    <Input id="companyAddress" defaultValue="789 Industrial Pkwy, Garki, IL 60607" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="description">Company Description</Label>
                    <Textarea
                      id="description"
                      defaultValue="Akpan Industries is a leading manufacturer of industrial equipment and components, specializing in heavy machinery for construction and mining operations."
                    />
                  </div>
                </div>
                <Button>Save Changes</Button>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground">Receive updates about your shipments</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <h4 className="font-medium">SMS Alerts</h4>
                      <p className="text-sm text-muted-foreground">Get text messages for important updates</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <h4 className="font-medium">Preferred Payment Method</h4>
                      <p className="text-sm text-muted-foreground">Set your default payment method</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <h4 className="font-medium">Shipping Preferences</h4>
                      <p className="text-sm text-muted-foreground">Set default shipping options</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>
                </div>
                <Button>Save Preferences</Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
