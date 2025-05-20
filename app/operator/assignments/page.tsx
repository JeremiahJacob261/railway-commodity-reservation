import type { Metadata } from "next"
import { OperatorHeader } from "@/components/operator-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export const metadata: Metadata = {
  title: "Cargo Assignments | RailCargo",
  description: "Manage your cargo assignments",
}

export default async function OperatorAssignmentsPage() {
  const supabase = createServerComponentClient({ cookies })

  // In a real app, we would fetch assignments from the database
  // For now, we'll use mock data
  const pendingAssignments = [
    {
      id: "1",
      reference: "RC-12345",
      commodity: "Coal",
      weight: "250 tons",
      origin: "Chicago Terminal",
      destination: "Pittsburgh Yard",
      departureDate: "2023-11-05",
      status: "Pending",
    },
    {
      id: "2",
      reference: "RC-12346",
      commodity: "Grain",
      weight: "180 tons",
      origin: "Minneapolis North",
      destination: "Kansas City Hub",
      departureDate: "2023-11-06",
      status: "Pending",
    },
    {
      id: "3",
      reference: "RC-12347",
      commodity: "Lumber",
      weight: "120 tons",
      origin: "Portland Terminal",
      destination: "Salt Lake Depot",
      departureDate: "2023-11-07",
      status: "Pending",
    },
  ]

  const acceptedAssignments = [
    {
      id: "4",
      reference: "RC-12340",
      commodity: "Steel",
      weight: "300 tons",
      origin: "Cleveland Station",
      destination: "Detroit Junction",
      departureDate: "2023-11-03",
      status: "Accepted",
    },
    {
      id: "5",
      reference: "RC-12341",
      commodity: "Automobiles",
      weight: "45 units",
      origin: "Detroit Junction",
      destination: "Nashville Freight",
      departureDate: "2023-11-04",
      status: "Accepted",
    },
  ]

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <OperatorHeader />
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Cargo Assignments</h2>
      </div>
      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="accepted">Accepted</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reference</TableHead>
                    <TableHead>Commodity</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead>Origin</TableHead>
                    <TableHead>Destination</TableHead>
                    <TableHead>Departure</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingAssignments.map((assignment) => (
                    <TableRow key={assignment.id}>
                      <TableCell className="font-medium">{assignment.reference}</TableCell>
                      <TableCell>{assignment.commodity}</TableCell>
                      <TableCell>{assignment.weight}</TableCell>
                      <TableCell>{assignment.origin}</TableCell>
                      <TableCell>{assignment.destination}</TableCell>
                      <TableCell>{assignment.departureDate}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                          {assignment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" className="mr-2">
                          Accept
                        </Button>
                        <Button size="sm" variant="outline">
                          Decline
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="accepted" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Accepted Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reference</TableHead>
                    <TableHead>Commodity</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead>Origin</TableHead>
                    <TableHead>Destination</TableHead>
                    <TableHead>Departure</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {acceptedAssignments.map((assignment) => (
                    <TableRow key={assignment.id}>
                      <TableCell className="font-medium">{assignment.reference}</TableCell>
                      <TableCell>{assignment.commodity}</TableCell>
                      <TableCell>{assignment.weight}</TableCell>
                      <TableCell>{assignment.origin}</TableCell>
                      <TableCell>{assignment.destination}</TableCell>
                      <TableCell>{assignment.departureDate}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                          {assignment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm">Start Transit</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Completed Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-8 text-muted-foreground">
                No completed assignments yet
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
