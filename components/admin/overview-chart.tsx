"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  {
    name: "Jan 1",
    total: 1200,
    tonnage: 4000,
  },
  {
    name: "Jan 2",
    total: 2100,
    tonnage: 6000,
  },
  {
    name: "Jan 3",
    total: 1800,
    tonnage: 5000,
  },
  {
    name: "Jan 4",
    total: 1600,
    tonnage: 4500,
  },
  {
    name: "Jan 5",
    total: 2400,
    tonnage: 7500,
  },
  {
    name: "Jan 6",
    total: 1500,
    tonnage: 4200,
  },
  {
    name: "Jan 7",
    total: 2000,
    tonnage: 5800,
  },
  {
    name: "Jan 8",
    total: 2200,
    tonnage: 6800,
  },
  {
    name: "Jan 9",
    total: 2800,
    tonnage: 8500,
  },
  {
    name: "Jan 10",
    total: 3000,
    tonnage: 9200,
  },
  {
    name: "Jan 11",
    total: 2700,
    tonnage: 8200,
  },
  {
    name: "Jan 12",
    total: 2500,
    tonnage: 7800,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" name="Revenue ($)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="tonnage" name="Cargo (tons)" fill="#10b981" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
