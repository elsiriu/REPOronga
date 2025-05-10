import type { Addon } from "@/types/addon"

// This is a mock data function. In a real application, you would fetch from a database
export async function getAddons(): Promise<Addon[]> {
  return [
    {
      id: "1",
      slug: "fsdg-monastir",
      title: "FSDG - Monastir Habib Bourguiba International Airport - DTMB",
      imageUrl: "/images/fsdg-monastir.png",
      date: "April 18, 2025",
      comments: 44,
      recommended: true,
      tags: ["FSDG"],
    },
    {
      id: "2",
      slug: "project-russia-eurasia",
      title: "Project Russia - Eurasia UWWW Samara P3DV5",
      imageUrl: "/images/project-russia.png",
      date: "April 13, 2025",
      comments: 163,
      recommended: true,
      tags: ["Project Russia"],
    },
    {
      id: "3",
      slug: "samscene-singapore",
      title: "SAMSCENE - SINGAPORE CITY WOW WSSS FOR FSX P3D4 P3D5",
      imageUrl: "/images/samscene-singapore.png",
      date: "April 13, 2025",
      comments: 304,
      recommended: false,
      tags: ["SAMSCENE"],
    },
    {
      id: "4",
      slug: "flysimware-beechcraft",
      title: "Flysimware – Beechcraft Sierra C24R v1.2.0 (Updated)",
      imageUrl: "/images/placeholder-aircraft.png",
      date: "April 13, 2025",
      comments: 84,
      recommended: false,
      tags: ["Flysimware", "MSFS 2020 Aircraft"],
    },
    {
      id: "5",
      slug: "taogs-hangar-bell",
      title: "Taog's Hangar – Bell UH-1H – Huey v1.2.1",
      imageUrl: "/images/placeholder-helicopter.png",
      date: "April 13, 2025",
      comments: 84,
      recommended: false,
      tags: ["Taog's Hangar", "MSFS 2020 Helicopter"],
    },
    {
      id: "6",
      slug: "aeroplane-heaven-globe-swift",
      title: "Aeroplane Heaven – Globe Swift GC-1A v1.3.9",
      imageUrl: "/images/placeholder-aircraft.png",
      date: "April 13, 2025",
      comments: 25,
      recommended: false,
      tags: ["Aeroplane Heaven", "MSFS 2020 Aircraft"],
    },
  ]
}

export async function getAddonBySlug(slug: string): Promise<Addon | null> {
  const addons = await getAddons()
  return addons.find((addon) => addon.slug === slug) || null
}
