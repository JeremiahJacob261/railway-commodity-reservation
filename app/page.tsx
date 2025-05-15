import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Train, Package, BarChart3 } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Train className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">RailCargo</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Railway Commodity Management System</h1>
                <p className="text-xl text-muted-foreground">
                  Streamline your railway cargo operations with our comprehensive management platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/register">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur"></div>
                  <div className="relative rounded-xl bg-background p-6">
                    <Train className="h-32 w-32 mx-auto text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-primary" />
                    <CardTitle>Cargo Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Efficiently manage and track all your railway cargo shipments from origin to destination.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Train className="h-5 w-5 text-secondary" />
                    <CardTitle>Railway Operations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Optimize your railway fleet operations with real-time tracking and maintenance scheduling.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-accent" />
                    <CardTitle>Business Intelligence</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Gain valuable insights into your railway cargo operations with comprehensive analytics.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Train className="h-5 w-5 text-primary" />
              <span className="font-semibold">RailCargo</span>
            </div>
            <div className="text-sm text-muted-foreground">© 2025 RailCargo. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
