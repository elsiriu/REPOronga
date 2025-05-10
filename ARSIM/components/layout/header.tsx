import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/theme-toggle"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UserNav } from "@/components/auth/user-nav"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export default async function Header() {
  const session = await getServerSession(authOptions)

  return (
    <header>
      <div className="border-b">
        <div className="container flex h-12 items-center justify-between">
          <div className="flex gap-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              Contact
            </Link>
            <Link href="/contributing" className="text-sm font-medium">
              Contributing
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {session ? (
              <UserNav user={session.user} />
            ) : (
              <Link href="/admin/login">
                <Button variant="outline" size="sm">
                  Admin Login
                </Button>
              </Link>
            )}
            <ModeToggle />
          </div>
        </div>
      </div>

      <div className="arsim-header">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Image src="/logo.png" alt="ARSIM Logo" width={50} height={50} className="mr-3" />
              <div>
                <h1 className="text-2xl font-bold">ARSIM</h1>
                <p className="text-xs text-muted-foreground">MSFS/XPLANE/P3D Aircraft & More</p>
              </div>
            </div>

            <div className="relative w-full max-w-sm">
              <Input type="search" placeholder="Search Addons..." className="pr-10" />
              <Button size="icon" variant="ghost" className="absolute right-0 top-0 h-full">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
