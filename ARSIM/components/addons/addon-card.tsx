import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Addon } from "@/types/addon"

interface AddonCardProps {
  addon: Addon
}

export default function AddonCard({ addon }: AddonCardProps) {
  return (
    <Card className="arsim-card overflow-hidden">
      <div className="relative h-[180px] overflow-hidden">
        <Image
          src={addon.imageUrl || "/placeholder.svg"}
          alt={addon.title}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <h2 className="text-lg font-bold mb-2">
          <Link href={`/addon/${addon.slug}`} className="hover:text-primary">
            {addon.title}
          </Link>
        </h2>
        <div className="text-sm text-muted-foreground mb-3">
          <span>{addon.date}</span>
          <span className="mx-2">|</span>
          <span>{addon.comments} Comments</span>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-1.5 p-4 pt-0">
        {addon.recommended && (
          <Badge variant="outline" className="bg-primary/10 text-primary">
            👍 ARSIM Recommended
          </Badge>
        )}
        {addon.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}
