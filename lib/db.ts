import { supabase } from "./supabase"

// Types based on our database schema
export type User = {
  id: string
  email: string
  full_name: string
  role: "admin" | "operator" | "shipper"
  phone?: string
  profile_image?: string
  created_at: string
  updated_at: string
  last_login?: string
  is_active: boolean
}

export type Train = {
  id: string
  train_number: string
  name: string
  type: "Freight" | "Mixed" | "Maintenance"
  capacity_tons: number
  current_load_tons: number
  status: "In Service" | "Loading" | "Maintenance" | "Out of Service"
  current_station_id?: string
  operator_id?: string
  next_maintenance_date?: string
  maintenance_status: string
  created_at: string
  updated_at: string
}

export type Station = {
  id: string
  name: string
  code: string
  address?: string
  city: string
  state?: string
  country: string
  latitude?: number
  longitude?: number
  has_loading_facility: boolean
  has_storage_facility: boolean
  created_at: string
  updated_at: string
}

export type Commodity = {
  id: string
  name: string
  category: string
  hazardous: boolean
  requires_refrigeration: boolean
  unit_of_measure: string
  created_at: string
  updated_at: string
}

export type Route = {
  id: string
  origin_id: string
  destination_id: string
  distance_km: number
  estimated_duration_hours: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export type Shipment = {
  id: string
  reference_number: string
  shipper_id: string
  origin_id: string
  destination_id: string
  commodity_id: string
  weight_tons: number
  status: "Pending" | "Loading" | "In Transit" | "Delivered" | "Cancelled" | "Delayed"
  train_id?: string
  route_id?: string
  scheduled_departure?: string
  scheduled_arrival?: string
  actual_departure?: string
  actual_arrival?: string
  created_at: string
  updated_at: string
}

export type Payment = {
  id: string
  shipment_id: string
  amount: number
  currency: string
  status: "Pending" | "Completed" | "Failed" | "Refunded"
  payment_method?: string
  transaction_id?: string
  payment_date?: string
  created_at: string
  updated_at: string
}

export type Tracking = {
  id: string
  shipment_id: string
  latitude: number
  longitude: number
  status?: string
  notes?: string
  recorded_at: string
}

export type Notification = {
  id: string
  user_id: string
  title: string
  message: string
  type: string
  is_read: boolean
  related_shipment_id?: string
  created_at: string
}

// User functions
export async function getUsers() {
  const { data, error } = await supabase.from("rail_users").select("*")

  if (error) throw error
  return data as User[]
}

export async function getUserById(id: string) {
  const { data, error } = await supabase.from("rail_users").select("*").eq("id", id).single()

  if (error) throw error
  return data as User
}

// Train functions
export async function getTrains() {
  const { data, error } = await supabase.from("rail_trains").select("*")

  if (error) throw error
  return data as Train[]
}

export async function getTrainById(id: string) {
  const { data, error } = await supabase.from("rail_trains").select("*").eq("id", id).single()

  if (error) throw error
  return data as Train
}

// Station functions
export async function getStations() {
  const { data, error } = await supabase.from("rail_stations").select("*")

  if (error) throw error
  return data as Station[]
}

// Commodity functions
export async function getCommodities() {
  const { data, error } = await supabase.from("rail_commodities").select("*")

  if (error) throw error
  return data as Commodity[]
}

// Shipment functions
export async function getShipments() {
  const { data, error } = await supabase.from("rail_shipments").select("*")

  if (error) throw error
  return data as Shipment[]
}

export async function getShipmentById(id: string) {
  const { data, error } = await supabase.from("rail_shipments").select("*").eq("id", id).single()

  if (error) throw error
  return data as Shipment
}

export async function getShipmentsByShipperId(shipperId: string) {
  const { data, error } = await supabase.from("rail_shipments").select("*").eq("shipper_id", shipperId)

  if (error) throw error
  return data as Shipment[]
}

export async function getShipmentsByTrainId(trainId: string) {
  const { data, error } = await supabase.from("rail_shipments").select("*").eq("train_id", trainId)

  if (error) throw error
  return data as Shipment[]
}

// Route functions
export async function getRoutes() {
  const { data, error } = await supabase.from("rail_routes").select("*")

  if (error) throw error
  return data as Route[]
}

// Payment functions
export async function getPaymentsByShipmentId(shipmentId: string) {
  const { data, error } = await supabase.from("rail_payments").select("*").eq("shipment_id", shipmentId)

  if (error) throw error
  return data as Payment[]
}

// Tracking functions
export async function getTrackingByShipmentId(shipmentId: string) {
  const { data, error } = await supabase
    .from("rail_tracking")
    .select("*")
    .eq("shipment_id", shipmentId)
    .order("recorded_at", { ascending: false })

  if (error) throw error
  return data as Tracking[]
}

// Notification functions
export async function getNotificationsByUserId(userId: string) {
  const { data, error } = await supabase
    .from("rail_notifications")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  if (error) throw error
  return data as Notification[]
}

export async function markNotificationAsRead(id: string) {
  const { error } = await supabase.from("rail_notifications").update({ is_read: true }).eq("id", id)

  if (error) throw error
  return true
}
