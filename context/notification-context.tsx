"use client"

import { createContext, useContext, type ReactNode } from "react"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

type NotificationType = "success" | "error" | "warning" | "info"

interface Notification {
  id: string
  title: string
  description?: string
  type: NotificationType
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

interface NotificationContextType {
  showNotification: (
    title: string,
    description?: string,
    type?: NotificationType,
    duration?: number,
    action?: { label: string; onClick: () => void },
  ) => void
  clearNotifications: () => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

export function NotificationProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast()

  const showNotification = (
    title: string,
    description?: string,
    type: NotificationType = "info",
    duration = 5000,
    action?: { label: string; onClick: () => void },
  ) => {
    toast({
      title,
      description,
      variant: type === "error" ? "destructive" : "default",
      duration,
      action: action ? (
        <ToastAction altText={action.label} onClick={action.onClick}>
          {action.label}
        </ToastAction>
      ) : undefined,
    })
  }

  const clearNotifications = () => {
    // The toast hook doesn't provide a way to clear all toasts
    // This is a placeholder for future implementation
  }

  return (
    <NotificationContext.Provider value={{ showNotification, clearNotifications }}>
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotification() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error("useNotification must be used within a NotificationProvider")
  }
  return context
}
