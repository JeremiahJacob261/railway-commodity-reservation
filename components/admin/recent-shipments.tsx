import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentShipments() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>JM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jackson Miller</p>
          <p className="text-sm text-muted-foreground">Coal: Chicago → Detroit</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-auto" variant="outline">
            In Transit
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sophia Anderson</p>
          <p className="text-sm text-muted-foreground">Grain: Kansas City → Houston</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-auto" variant="outline">
            Delivered
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">William Kim</p>
          <p className="text-sm text-muted-foreground">Lumber: Portland → San Francisco</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-auto" variant="outline">
            Pending
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>EM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Emma Martinez</p>
          <p className="text-sm text-muted-foreground">Steel: Pittsburgh → Cleveland</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-auto" variant="outline">
            Delivered
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>LJ</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Liam Johnson</p>
          <p className="text-sm text-muted-foreground">Chemicals: Houston → New Orleans</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-auto" variant="outline">
            In Transit
          </Badge>
        </div>
      </div>
    </div>
  )
}
