import { getServerSession as getNextAuthServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

// Re-export getServerSession with authOptions already applied
export async function getServerSession() {
  return getNextAuthServerSession(authOptions)
}
