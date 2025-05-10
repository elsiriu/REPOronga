import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/admin/login")
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Addons</CardTitle>
            <CardDescription>All addons in the database</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">124</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Comments</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">48</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Reviews</CardTitle>
            <CardDescription>Addons awaiting approval</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">7</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Button asChild>
            <Link href="/admin/addons/new">Add New Addon</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/addons">Manage Addons</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/comments">Moderate Comments</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/admin/settings">Site Settings</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import Link from "next/link"
