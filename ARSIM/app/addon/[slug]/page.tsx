import { notFound } from "next/navigation"
import Image from "next/image"
import { getAddonBySlug } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface AddonPageProps {
  params: {
    slug: string
  }
}


export default async function AddonPage({ params }: AddonPageProps) {
  const addon = await getAddonBySlug(params.slug)

  if (!addon) {
    notFound()
  }

  return (
    <div className="container py-8">
      <Card className="arsim-card">
        <div className="relative h-[300px] w-full">
          <Image
            src={addon.imageUrl || "/placeholder.svg"}
            alt={addon.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1200px"
          />
        </div>
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-4">{addon.title}</h1>

          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <span>{addon.date}</span>
            <span className="mx-2">|</span>
            <span>{addon.comments} Comments</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {addon.recommended && (
              <Badge variant="outline" className="bg-primary/10 text-primary">
                👍 ARSIM Recommended
              </Badge>
            )}
            {addon.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose prose-invert max-w-none">
            <p>
              {addon.description ||
                "Detailed description of the addon would go here. This would include information about features, compatibility, installation instructions, and more."}
            </p>

            <h2>Features</h2>
            <ul>
              <li>High-quality 3D modeling with PBR textures</li>
              <li>Custom sound effects recorded from the real aircraft</li>
              <li>Detailed cockpit with working instruments</li>
              <li>Compatible with P3D v5, v4, and FSX</li>
              <li>Includes documentation and tutorials</li>
            </ul>

            <h2>System Requirements</h2>
            <ul>
              <li>Windows 10 (64-bit)</li>
              <li>Prepar3D v5/v4 or FSX</li>
              <li>CPU: Intel Core i5 or equivalent</li>
              <li>RAM: 8GB minimum, 16GB recommended</li>
              <li>GPU: 4GB VRAM minimum</li>
              <li>Storage: 2GB available space</li>
            </ul>

            <h2>Installation</h2>
            <p>
              Download the installer from the link below and follow the on-screen instructions. The addon will be
              automatically installed to your simulator directory.
            </p>

            <div className="not-prose mt-6">
              <a
                href="#download"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Download Now
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
