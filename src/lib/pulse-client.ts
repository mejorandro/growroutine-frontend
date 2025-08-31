// lib/pulse-client.ts
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
    const res = await fetch("/api/pulse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        task: input.task ?? "Daily briefing",
        lang: input.lang,
        profession: input.profession,
        sector: input.sector,
      }),
    })
  
    if (!res.ok) {
      throw new Error(`Pulse API error: ${res.status}`)
    }
  
    return res.json()
  }
  