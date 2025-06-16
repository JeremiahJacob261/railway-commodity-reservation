import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// ...existing code...
export function RecentDeliveries() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>JM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jackson Akpan</p>
          <p className="text-sm text-muted-foreground">15 Victoria Island → 22 Independence Way</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-auto" variant="outline">
            In Progress
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sophia Jamiu</p>
          <p className="text-sm text-muted-foreground">8 Ogbomoso Street → 31 Niger Bridge Road</p>
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
          <p className="text-sm text-muted-foreground">12 Ahmadu Bello Way → 5 New Market Road</p>
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
          <p className="text-sm font-medium leading-none">Adebayo Ogundimu</p>
          <p className="text-sm text-muted-foreground">18 Sapele Road → 9 Bompai Road</p>
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
          <p className="text-sm text-muted-foreground">25 Aba Road → 14 Yakubu Gowon Way</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-auto" variant="outline">
            In Progress
          </Badge>
        </div>
      </div>
    </div>
  )
}
// ...existing code...
