"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Train,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  LogOut,
  MapPin,
  MessageSquare,
  Settings,
  User,
  Package,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/operator/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Cargo Assignments",
    icon: ClipboardList,
    href: "/operator/assignments",
    color: "text-violet-500",
  },
  {
    label: "Active Shipments",
    icon: Package,
    href: "/operator/active",
    color: "text-pink-700",
  },
  {
    label: "Train Management",
    icon: Train,
    href: "/operator/trains",
    color: "text-blue-600",
  },
  {
    label: "Route Tracking",
    icon: MapPin,
    href: "/operator/routes",
    color: "text-orange-500",
  },
  {
    label: "Communications",
    icon: MessageSquare,
    href: "/operator/chat",
    color: "text-green-500",
  },
  {
    label: "Earnings",
    icon: CreditCard,
    href: "/operator/earnings",
    color: "text-emerald-500",
  },
  {
    label: "Profile",
    icon: User,
    href: "/operator/profile",
    color: "text-gray-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/operator/settings",
  },
]

export function OperatorSidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/operator/dashboard" className="flex items-center pl-3 mb-14">
          <Train className="h-6 w-6 mr-2" />
          <h1 className="text-xl font-bold">RailCargo</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3 py-2">
        <Button variant="ghost" className="w-full justify-start text-zinc-400 px-3 py-2 text-sm" asChild>
          <Link href="/">
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </Link>
        </Button>
      </div>
    </div>
  )
}
