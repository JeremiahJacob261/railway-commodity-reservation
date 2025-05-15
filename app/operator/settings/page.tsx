import { OperatorHeader } from "@/components/operator-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <OperatorHeader title="Settings" />

      <Tabs defaultValue="preferences" className="space-y-4">
        <TabsList>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
          <TabsTrigger value="app">App Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="preferences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Operation Preferences</CardTitle>
              <CardDescription>Customize your train operation experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="operation-range">Maximum Operation Range (km)</Label>
                <Input id="operation-range" type="number" defaultValue="150" />
                <p className="text-sm text-muted-foreground">
                  You'll only be shown train operation jobs within this range from your station.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cargo-types">Preferred Cargo Types</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="cargo-types">
                    <SelectValue placeholder="Select cargo types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="containers">Containers Only</SelectItem>
                    <SelectItem value="bulk">Bulk Materials</SelectItem>
                    <SelectItem value="liquids">Liquid Cargo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-accept">Auto-Accept Preferred Routes</Label>
                  <Switch id="auto-accept" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Automatically accept routes that match your preferences when you're available.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="control-system">Preferred Control System</Label>
                  <Select defaultValue="standard">
                    <SelectTrigger id="control-system" className="w-[180px]">
                      <SelectValue placeholder="Select system" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard System</SelectItem>
                      <SelectItem value="advanced">Advanced Control</SelectItem>
                      <SelectItem value="legacy">Legacy System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="night-shifts">Available for Night Shifts</Label>
                  <Switch id="night-shifts" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Indicate your availability for overnight train operations.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Certification & Skills</CardTitle>
              <CardDescription>Manage your railway certifications and skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="certification-level">Certification Level</Label>
                <Select defaultValue="level2">
                  <SelectTrigger id="certification-level">
                    <SelectValue placeholder="Select certification level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="level1">Level 1 - Basic Operations</SelectItem>
                    <SelectItem value="level2">Level 2 - Standard Operations</SelectItem>
                    <SelectItem value="level3">Level 3 - Advanced Operations</SelectItem>
                    <SelectItem value="level4">Level 4 - Expert/Trainer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Specialized Skills</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="hazmat" />
                    <Label htmlFor="hazmat">Hazardous Materials</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="heavy-cargo" />
                    <Label htmlFor="heavy-cargo">Heavy Cargo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="long-distance" />
                    <Label htmlFor="long-distance">Long Distance</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="mountain-routes" />
                    <Label htmlFor="mountain-routes">Mountain Routes</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Notification Methods</Label>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sms-notifications">SMS Notifications</Label>
                    <Switch id="sms-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="app-notifications">In-App Notifications</Label>
                    <Switch id="app-notifications" defaultChecked />
                  </div>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Notification Types</Label>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="new-assignments">New Route Assignments</Label>
                    <Switch id="new-assignments" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="schedule-changes">Schedule Changes</Label>
                    <Switch id="schedule-changes" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="cargo-updates">Cargo Updates</Label>
                    <Switch id="cargo-updates" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="system-maintenance">System Maintenance</Label>
                    <Switch id="system-maintenance" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Security</CardTitle>
              <CardDescription>Manage your account security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="change-password">Change Password</Label>
                <div className="grid gap-2">
                  <Input id="current-password" type="password" placeholder="Current password" />
                  <Input id="new-password" type="password" placeholder="New password" />
                  <Input id="confirm-password" type="password" placeholder="Confirm new password" />
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label>Two-Factor Authentication</Label>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Enable 2FA</p>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch id="two-factor" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Location Tracking</Label>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Share Location</p>
                    <p className="text-sm text-muted-foreground">Only active during assigned routes</p>
                  </div>
                  <Switch id="location-tracking" defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="app" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>App Settings</CardTitle>
              <CardDescription>Customize application behavior</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <Select defaultValue="system">
                  <SelectTrigger id="theme">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System Default</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="offline-mode">Offline Mode</Label>
                  <Switch id="offline-mode" />
                </div>
                <p className="text-sm text-muted-foreground">Download essential data for offline operation</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="data-saving">Data Saving Mode</Label>
                  <Switch id="data-saving" />
                </div>
                <p className="text-sm text-muted-foreground">Reduce data usage when on cellular networks</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
