"use client"

import type React from "react"

import { useState } from "react"
import { ShipperHeader } from "@/components/shipper-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Package, Train } from "lucide-react"
import { cn } from "@/lib/utils"
import  { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function NewShipmentPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [stations, setStations] = useState([])
  const [commodities, setCommodities] = useState([])
  const [departureDate, setDepartureDate] = useState<Date>()
  const { toast } = useToast();
  // Fetch stations and commodities on component mount
  useState(() => {
    const fetchData = async () => {
      const { data: stationsData } = await supabase.from("rail_stations").select("id, name, code").order("name")

      const { data: commoditiesData } = await supabase
        .from("rail_commodities")
        .select("id, name, category")
        .order("name")

      if (stationsData) setStations(stationsData)
      if (commoditiesData) setCommodities(commoditiesData)
    }

    fetchData()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const originId = formData.get("origin") as string
    const destinationId = formData.get("destination") as string
    const commodityId = formData.get("commodity") as string
    const weight = formData.get("weight") as string
    const notes = formData.get("notes") as string

    // Generate a reference number
    const referenceNumber = `SHP-${Math.floor(100000 + Math.random() * 900000)}`

    try {
      const { error } = await supabase.from("rail_shipments").insert({
        reference_number: referenceNumber,
        shipper_id: "8ff64485-0b1c-4e63-8429-01151101d33f", // Replace with actual user ID in production
        origin_id: originId,
        destination_id: destinationId,
        commodity_id: commodityId,
        weight_tons: Number.parseFloat(weight),
        status: "Pending",
        scheduled_departure: departureDate?.toISOString(),
        notes: notes,
      })

      if (error) throw error
      // Show success notification
      toast({
        title: "Shipment Created",
        description: `Your shipment has been created successfully with reference number ${referenceNumber}.`,
        variant: "default",
      });
      // Redirect to tracking page on success
      router.push("/shipper/tracking")
      router.refresh()
    } catch (error) {
      console.error("Error creating shipment:", error)
      alert("Failed to create shipment. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <ShipperHeader title="New Shipment" />

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="mr-2 h-6 w-6" />
            Create New Shipment
          </CardTitle>
          <CardDescription>Fill out the form below to schedule a new cargo shipment.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="origin">Origin Station</Label>
                <Select name="origin" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select origin station" />
                  </SelectTrigger>
                  <SelectContent>
                    {stations.map((station: any) => (
                      <SelectItem key={station.id} value={station.id}>
                        {station.name} ({station.code})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="destination">Destination Station</Label>
                <Select name="destination" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select destination station" />
                  </SelectTrigger>
                  <SelectContent>
                    {stations.map((station: any) => (
                      <SelectItem key={station.id} value={station.id}>
                        {station.name} ({station.code})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="commodity">Commodity Type</Label>
                <Select name="commodity" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select commodity" />
                  </SelectTrigger>
                  <SelectContent>
                    {commodities.map((commodity: any) => (
                      <SelectItem key={commodity.id} value={commodity.id}>
                        {commodity.name} ({commodity.category})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="weight">Weight (tons)</Label>
                <Input
                  id="weight"
                  name="weight"
                  type="number"
                  step="0.01"
                  min="0.01"
                  placeholder="Enter cargo weight"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="departure">Preferred Departure Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !departureDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {departureDate ? format(departureDate, "PPP") : "Select a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={departureDate}
                    onSelect={setDepartureDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Special Instructions</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Enter any special handling instructions or notes"
                className="min-h-[100px]"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading} className="bg-blue-600 hover:bg-blue-700">
              <Train className="mr-2 h-4 w-4" />
              {isLoading ? "Creating Shipment..." : "Create Shipment"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
