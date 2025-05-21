import { type NextRequest, NextResponse } from "next/server"
import { checkRouteAvailability } from "@/lib/shipment-utils"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const originId = formData.get("originId") as string
    const destinationId = formData.get("destinationId") as string
    const weightTons = Number.parseFloat(formData.get("weightTons") as string)
    const departureDateStr = formData.get("departureDate") as string
    const departureDate = departureDateStr ? new Date(departureDateStr) : new Date()

    if (!originId || !destinationId || isNaN(weightTons) || !departureDate) {
      return NextResponse.json({ available: false, message: "Missing required parameters" }, { status: 400 })
    }

    const availabilityResult = await checkRouteAvailability(originId, destinationId, departureDate, weightTons)

    return NextResponse.json(availabilityResult)
  } catch (error) {
    console.error("Error checking availability:", error)
    return NextResponse.json({ available: false, message: "Error checking availability" }, { status: 500 })
  }
}
