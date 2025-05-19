"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function createTrain(formData: FormData) {
  const supabase = createServerSupabaseClient()

  try {
    const trainNumber = formData.get("trainNumber") as string
    const name = formData.get("name") as string
    const type = formData.get("type") as string
    const capacityTons = Number.parseFloat(formData.get("capacityTons") as string)
    const operatorId = (formData.get("operatorId") as string) || null

    const { data, error } = await supabase
      .from("rail_trains")
      .insert({
        train_number: trainNumber,
        name,
        type,
        capacity_tons: capacityTons,
        current_load_tons: 0,
        status: "In Service",
        operator_id: operatorId,
        maintenance_status: "Good",
      })
      .select()
      .single()

    if (error) throw error

    revalidatePath("/admin/trains")

    return { success: true, data }
  } catch (error) {
    console.error("Error creating train:", error)
    return { success: false, error: "Failed to create train" }
  }
}

export async function updateTrainStatus(id: string, status: string) {
  const supabase = createServerSupabaseClient()

  try {
    const { error } = await supabase
      .from("rail_trains")
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)

    if (error) throw error

    revalidatePath("/admin/trains")
    revalidatePath("/operator/trains")

    return { success: true }
  } catch (error) {
    console.error("Error updating train status:", error)
    return { success: false, error: "Failed to update train status" }
  }
}

export async function assignOperatorToTrain(trainId: string, operatorId: string) {
  const supabase = createServerSupabaseClient()

  try {
    const { error } = await supabase
      .from("rail_trains")
      .update({
        operator_id: operatorId,
        updated_at: new Date().toISOString(),
      })
      .eq("id", trainId)

    if (error) throw error

    revalidatePath("/admin/trains")

    return { success: true }
  } catch (error) {
    console.error("Error assigning operator to train:", error)
    return { success: false, error: "Failed to assign operator to train" }
  }
}
