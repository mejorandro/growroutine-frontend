export type PulseInput = {
  task?: string
  lang: "es" | "en"
  profession: string
  sector: string
}

export type PulseResponse = {
  title: string
  summary: string
  news: string
  meaning: string
  action: string
  linkedin_post: string
  poc_ideas: string
  compounding: string
  final_summary: string
}

export async function fetchPulse(input: PulseInput): Promise<PulseResponse> {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"

  const res = await fetch(`${baseUrl}/api/pulse`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      task: input.task ?? "Daily briefing",
      lang: input.lang,
      profession: input.profession,
      sector: input.sector,
    }),
    cache: "no-store", // avoid stale data
  })

  if (!res.ok) {
    throw new Error(`Pulse API error: ${res.status}`)
  }

  return res.json()
}

export async function fetchBlogIntro(input: PulseInput): Promise<PulseResponse> {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  console.log(`${baseUrl}/api/pulse/title`);
  const res = await fetch(`${baseUrl}/api/pulse/blog-intro`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      task: input.task ?? "Daily briefing",
      lang: input.lang,
      profession: input.profession,
      sector: input.sector,
    }),
    cache: "no-store", // avoid stale data
  })

  if (!res.ok) {
    throw new Error(`Pulse API error: ${res.status}`)
  }

  return res.json()
}