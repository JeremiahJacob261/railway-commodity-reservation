import type { Metadata } from "next"
import { OperatorHeader } from "@/components/operator-header"
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
  description: "Operator profile for RailCargo system",
}

export default function OperatorProfilePage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <OperatorHeader />
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
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">Alex Johnson</h3>
            <p className="text-muted-foreground">Operator</p>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              <Badge variant="outline" className="bg-blue-100 text-blue-800">
                Train Operator
              </Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800">
                Certified
              </Badge>
              <Badge variant="outline" className="bg-purple-100 text-purple-800">
                5+ Years
              </Badge>
            </div>
            <div className="w-full mt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Member Since</span>
                <span className="font-medium">Jan 15, 2018</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipments Completed</span>
                <span className="font-medium">1,245</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Rating</span>
                <span className="font-medium">4.9/5.0</span>
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
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" defaultValue="Alex Johnson" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="operator1@railcargo.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="555-234-5678" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employeeId">Employee ID</Label>
                    <Input id="employeeId" defaultValue="OP-10042" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" defaultValue="123 Railway Ave, Garki, IL 60601" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      defaultValue="Experienced train operator with over 5 years of experience in freight transport. Specialized in long-haul routes and hazardous materials transport."
                    />
                  </div>
                </div>
                <Button>Save Changes</Button>
              </TabsContent>

              <TabsContent value="qualifications" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <h4 className="font-medium">Train Operator License</h4>
                      <p className="text-sm text-muted-foreground">License #TO-58921</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Valid until Dec 2025</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <h4 className="font-medium">Hazardous Materials Certification</h4>
                      <p className="text-sm text-muted-foreground">Cert #HM-12458</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Valid until Aug 2024</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <h4 className="font-medium">Safety Training</h4>
                      <p className="text-sm text-muted-foreground">Advanced Level</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Completed</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <h4 className="font-medium">First Aid Certification</h4>
                      <p className="text-sm text-muted-foreground">Cert #FA-3892</p>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">Renewal Due</Badge>
                  </div>
                </div>
                <Button>Add New Qualification</Button>
              </TabsContent>

              <TabsContent value="documents" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <h4 className="font-medium">Driver's License</h4>
                      <p className="text-sm text-muted-foreground">Uploaded on Jan 10, 2023</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <h4 className="font-medium">Train Operator Certificate</h4>
                      <p className="text-sm text-muted-foreground">Uploaded on Mar 15, 2023</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <h4 className="font-medium">Medical Certificate</h4>
                      <p className="text-sm text-muted-foreground">Uploaded on May 22, 2023</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                <Button>Upload New Document</Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
