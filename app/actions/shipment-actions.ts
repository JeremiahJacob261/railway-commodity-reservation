"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function createShipment(formData: FormData) {
  const supabase = createServerSupabaseClient()

  try {
    const referenceNumber = `SHP-${Math.floor(100000 + Math.random() * 900000)}`
    const shipperId = formData.get("shipperId") as string
    const originId = formData.get("originId") as string
    const destinationId = formData.get("destinationId") as string
    const commodityId = formData.get("commodityId") as string
    const weightTons = Number.parseFloat(formData.get("weightTons") as string)

    const { data, error } = await supabase
      .from("rail_shipments")
      .insert({
        reference_number: referenceNumber,
        shipper_id: shipperId,
        origin_id: originId,
        destination_id: destinationId,
        commodity_id: commodityId,
        weight_tons: weightTons,
        status: "Pending",
      })
      .select()
      .single()

    if (error) throw error

    revalidatePath("/shipper/dashboard")
    revalidatePath("/shipper/active")

    return { success: true, data }
  } catch (error) {
    console.error("Error creating shipment:", error)
    return { success: false, error: "Failed to create shipment" }
  }
}

export async function updateShipmentStatus(id: string, status: string) {
  const supabase = createServerSupabaseClient()

  try {
    const { error } = await supabase
      .from("rail_shipments")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", id)

    if (error) throw error

    revalidatePath("/admin/shipments")
    revalidatePath("/operator/active")
    revalidatePath("/shipper/active")

    return { success: true }
  } catch (error) {
    console.error("Error updating shipment status:", error)
    return { success: false, error: "Failed to update shipment status" }
  }
}

export async function assignTrainToShipment(shipmentId: string, trainId: string) {
  const supabase = createServerSupabaseClient()

  try {
    const { error } = await supabase
      .from("rail_shipments")
      .update({
        train_id: trainId,
        status: "Loading",
        updated_at: new Date().toISOString(),
      })
      .eq("id", shipmentId)

    if (error) throw error

    revalidatePath("/admin/shipments")
    revalidatePath("/operator/assignments")

    return { success: true }
  } catch (error) {
    console.error("Error assigning train to shipment:", error)
    return { success: false, error: "Failed to assign train to shipment" }
  }
}
