import type React from "react"
import { OperatorSidebar } from "@/components/operator-sidebar"
import { MobileSidebar } from "@/components/mobile-sidebar"

export default function OperatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-slate-900">
        <OperatorSidebar />
      </div>
      <div className="md:pl-72 h-full">
        <div className="h-16 md:hidden fixed inset-x-0 top-0 z-[80] bg-white border-b">
          <MobileSidebar>
            <OperatorSidebar />
          </MobileSidebar>
        </div>
        <main className="h-full pt-16 md:pt-0">{children}</main>
      </div>
    </div>
  )
}
