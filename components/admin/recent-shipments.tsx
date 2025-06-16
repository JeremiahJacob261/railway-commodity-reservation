import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// ...existing code...
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
          <p className="text-sm text-muted-foreground">Coal: Lagos → Enugu</p>
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
          <p className="text-sm text-muted-foreground">Grain: Port Harcourt → Kano</p>
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
          <p className="text-sm text-muted-foreground">Lumber: Kaduna → Ibadan</p>
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
          <p className="text-sm text-muted-foreground">Steel: Warri → Jos</p>
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
          <p className="text-sm text-muted-foreground">Chemicals: Lagos → Benin City</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-auto" variant="outline">
            In Transit
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>BO</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Adebayo Ogundimu</p>
          <p className="text-sm text-muted-foreground">Coal: Lagos → Enugu</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-auto" variant="outline">
            In Transit
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>FA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Fatima Aliyu</p>
          <p className="text-sm text-muted-foreground">Grain: Port Harcourt → Kano</p>
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
          <AvatarFallback>CO</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Chinedu Okwu</p>
          <p className="text-sm text-muted-foreground">Lumber: Kaduna → Ibadan</p>
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
          <AvatarFallback>AH</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Amina Hassan</p>
          <p className="text-sm text-muted-foreground">Steel: Warri → Jos</p>
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
          <AvatarFallback>OA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Olumide Adebayo</p>
          <p className="text-sm text-muted-foreground">Chemicals: Lagos → Benin City</p>
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
// ...existing code...