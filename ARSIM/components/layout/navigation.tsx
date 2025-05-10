import Link from "next/link"

const navItems = [
  { href: "/faq", icon: "❓", label: "FAQ" },
  { href: "/p3d", icon: "✈️", label: "P3D" },
  { href: "/xplane", icon: "✈️", label: "XPLANE" },
  { href: "/msfs", icon: "✈️", label: "MSFS" },
  { href: "/other-files", icon: "📁", label: "Other Files" },
  { href: "/world-map", icon: "📁", label: "World Map" },
]

export default function Navigation() {
  return (
    <nav className="arsim-nav overflow-x-auto">
      <div className="container">
        <div className="flex h-12 items-center space-x-4 whitespace-nowrap">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center text-sm font-medium">
              <span className="mr-1">{item.icon}</span> {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
