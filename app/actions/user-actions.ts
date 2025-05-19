"use server"

import { createServerSupabaseClient } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function createUser(formData: FormData) {
  const supabase = createServerSupabaseClient()

  try {
    const email = formData.get("email") as string
    const passwordHash = formData.get("passwordHash") as string // In a real app, this would be properly hashed
    const fullName = formData.get("fullName") as string
    const role = formData.get("role") as string
    const phone = (formData.get("phone") as string) || null

    const { data, error } = await supabase
      .from("rail_users")
      .insert({
        email,
        password_hash: passwordHash,
        full_name: fullName,
        role,
        phone,
        is_active: true,
      })
      .select()
      .single()

    if (error) throw error

    revalidatePath("/admin/users")

    return { success: true, data }
  } catch (error) {
    console.error("Error creating user:", error)
    return { success: false, error: "Failed to create user" }
  }
}

export async function updateUserStatus(id: string, isActive: boolean) {
  const supabase = createServerSupabaseClient()

  try {
    const { error } = await supabase
      .from("rail_users")
      .update({
        is_active: isActive,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)

    if (error) throw error

    revalidatePath("/admin/users")

    return { success: true }
  } catch (error) {
    console.error("Error updating user status:", error)
    return { success: false, error: "Failed to update user status" }
  }
}
