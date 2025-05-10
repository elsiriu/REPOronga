import AddonCard from "@/components/addons/addon-card"
import type { Addon } from "@/types/addon"

interface AddonsGridProps {
  addons: Addon[]
}

export default function AddonsGrid({ addons }: AddonsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {addons.map((addon) => (
        <AddonCard key={addon.id} addon={addon} />
      ))}
    </div>
  )
}
