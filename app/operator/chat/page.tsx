import type { Metadata } from "next"
import { OperatorHeader } from "@/components/operator-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

export const metadata: Metadata = {
  title: "Communications | RailCargo",
  description: "Operator communications for RailCargo system",
}

export default function OperatorChatPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <OperatorHeader />
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Communications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="flex items-center space-x-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
                >
                  <Avatar>
                    <AvatarFallback>{contact.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.role}</p>
                  </div>
                  {contact.unread > 0 && (
                    <div className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {contact.unread}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="border-b">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarFallback>JM</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Jackson Akpan</CardTitle>
                <p className="text-sm text-muted-foreground">Shipper • Online</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[500px] p-4">
              <div className="space-y-4">
                {messages.map((message, i) => (
                  <div key={i} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${message.sender === "me" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
                    >
                      <p>{message.content}</p>
                      <p className={`text-xs mt-1 ${message.sender === "me" ? "text-blue-100" : "text-gray-500"}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t flex space-x-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button>Send</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const contacts = [
  {
    id: "1",
    name: "Jackson Akpan",
    role: "Shipper",
    initials: "JM",
    unread: 2,
  },
  {
    id: "2",
    name: "Sophia Jamiu",
    role: "Shipper",
    initials: "SA",
    unread: 0,
  },
  {
    id: "3",
    name: "Admin Support",
    role: "Admin",
    initials: "AS",
    unread: 1,
  },
  {
    id: "4",
    name: "Maria Okoro",
    role: "Operator",
    initials: "MG",
    unread: 0,
  },
  {
    id: "5",
    name: "Dispatch Center",
    role: "System",
    initials: "DC",
    unread: 0,
  },
]

const messages = [
  {
    sender: "other",
    content: "Hi there! I'm checking on the status of my coal shipment RC-12345. Has it been loaded yet?",
    time: "10:30 AM",
  },
  {
    sender: "me",
    content:
      "Hello Jackson. Yes, your shipment is currently being loaded at Garki Terminal. It's about 60% complete.",
    time: "10:32 AM",
  },
  {
    sender: "other",
    content: "Great! What's the expected departure time?",
    time: "10:33 AM",
  },
  {
    sender: "me",
    content:
      "We're on schedule for a 2:00 PM departure today. The train should arrive in Onitsha around 10:00 AM tomorrow.",
    time: "10:35 AM",
  },
  {
    sender: "other",
    content: "Perfect, thanks for the update. Will I receive a notification when it departs?",
    time: "10:36 AM",
  },
  {
    sender: "me",
    content:
      "Yes, you'll receive an automatic notification when the train departs Garki and another when it arrives in Onitsha.",
    time: "10:38 AM",
  },
  {
    sender: "other",
    content:
      "Excellent. One more question - is there any way to add another 50 tons to this shipment, or is it too late?",
    time: "10:40 AM",
  },
]
