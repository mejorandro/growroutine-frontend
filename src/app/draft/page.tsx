import { notFound } from "next/navigation"
import DraftBlog from "../_components/draft-blog";
import { PulseResponse } from "@/lib/pulse-client"

export default async function DraftPage({
  searchParams,
}: {
  searchParams: Promise<{ profession?: string; sector?: string }>
}) {
  const sp = await searchParams
  const profession = sp.profession
  const sector = sp.sector

  if (!profession || !sector) return notFound()

  // Build absolute URL for server-side fetch
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

  const res = await fetch(`${baseUrl}/api/pulse`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      task: "Daily briefing",
      lang: "es", // TODO: support dynamic multilanguage
      profession,
      sector,
    }),
    cache: "no-store", // avoid stale data for drafts
  })

  if (!res.ok) return notFound()

  const data: PulseResponse = await res.json()

  return (
    <main className="py-12">
      <DraftBlog data={data} />
    </main>
  )
}
