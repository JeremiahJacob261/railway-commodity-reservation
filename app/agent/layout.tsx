import type React from "react"
import { OperatorSidebar } from "@/components/operator-sidebar"

export default function OperatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <OperatorSidebar />
      </div>
      <main className="md:pl-72">{children}</main>
    </div>
  )
}
