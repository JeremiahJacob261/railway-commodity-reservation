import type { Metadata } from "next"
import { ShipperHeader } from "@/components/shipper-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Settings | RailCargo",
  description: "Shipper settings for RailCargo system",
}

export default function ShipperSettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <ShipperHeader />
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>

      <Tabs defaultValue="account" className="space-y-4">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account settings and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="america_chicago">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="america_chicago">America/Chicago</SelectItem>
                    <SelectItem value="america_new_york">America/New York</SelectItem>
                    <SelectItem value="america_los_angeles">America/Los Angeles</SelectItem>
                    <SelectItem value="europe_london">Europe/London</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable dark mode for the interface</p>
                </div>
                <Switch id="dark-mode" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="compact-view">Compact View</Label>
                  <p className="text-sm text-muted-foreground">Use a more compact layout</p>
                </div>
                <Switch id="compact-view" />
              </div>

              <Button>Save Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-shipment">Shipment Updates (Email)</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email notifications for shipment status changes
                  </p>
                </div>
                <Switch id="email-shipment" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sms-shipment">Shipment Updates (SMS)</Label>
                  <p className="text-sm text-muted-foreground">Receive SMS notifications for shipment status changes</p>
                </div>
                <Switch id="sms-shipment" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-payment">Payment Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications for payment events</p>
                </div>
                <Switch id="email-payment" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-marketing">Marketing Communications</Label>
                  <p className="text-sm text-muted-foreground">Receive updates about new features and promotions</p>
                </div>
                <Switch id="email-marketing" />
              </div>

              <Button>Save Notification Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipping" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Preferences</CardTitle>
              <CardDescription>Configure your default shipping settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="default-origin">Default Origin Station</Label>
                <Select defaultValue="chicago">
                  <SelectTrigger id="default-origin">
                    <SelectValue placeholder="Select origin station" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="chicago">Chicago Terminal</SelectItem>
                    <SelectItem value="pittsburgh">Pittsburgh Yard</SelectItem>
                    <SelectItem value="kansas_city">Kansas City Hub</SelectItem>
                    <SelectItem value="portland">Portland Terminal</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="default-commodity">Default Commodity</Label>
                <Select defaultValue="coal">
                  <SelectTrigger id="default-commodity">
                    <SelectValue placeholder="Select commodity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="coal">Coal</SelectItem>
                    <SelectItem value="grain">Grain</SelectItem>
                    <SelectItem value="lumber">Lumber</SelectItem>
                    <SelectItem value="steel">Steel</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="insurance">Default Insurance</Label>
                  <p className="text-sm text-muted-foreground">Automatically add insurance to shipments</p>
                </div>
                <Switch id="insurance" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="express-shipping">Express Shipping</Label>
                  <p className="text-sm text-muted-foreground">Prioritize shipments when possible</p>
                </div>
                <Switch id="express-shipping" />
              </div>

              <Button>Save Shipping Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>

              <div className="space-y-1">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>

              <div className="space-y-1">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <Switch id="two-factor" />
              </div>

              <Button>Update Security Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
