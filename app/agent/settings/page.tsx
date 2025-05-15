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
                <Label htmlFor="delivery-radius">Maximum Operation Range (km)</Label>
                <Input id="delivery-radius" type="number" defaultValue="150" />
                <p className="text-sm text-muted-foreground">
                  You'll only be shown train operation jobs within this range from your station.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-types">Preferred Cargo Types</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="job-types">
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
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <Switch id="email-notifications" />
                </div>
                <p className="text-sm text-muted-foreground">Receive important updates and alerts via email.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <Switch id="push-notifications" />
                </div>
                <p className="text-sm text-muted-foreground">Get real-time notifications on your mobile device.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Security</CardTitle>
              <CardDescription>Manage your privacy settings and security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <Switch id="two-factor" />
                </div>
                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="data-sharing">Data Sharing Preferences</Label>
                  <Switch id="data-sharing" />
                </div>
                <p className="text-sm text-muted-foreground">Control how your data is shared with third parties.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="app">
          <Card>
            <CardHeader>
              <CardTitle>App Settings</CardTitle>
              <CardDescription>Customize your app experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="app-language">App Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="app-language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <Select defaultValue="system">
                  <SelectTrigger id="theme">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="system">System</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
