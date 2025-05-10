import AddonsGrid from "@/components/addons/addons-grid"
import { getAddons } from "@/lib/data"

export default async function Home() {
  const addons = await getAddons()

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">Featured Addons</h1>
      <AddonsGrid addons={addons} />
    </div>
  )
}

