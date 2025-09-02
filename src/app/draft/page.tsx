import { notFound } from "next/navigation"
import DraftBlog from "../_components/draft-blog"
import { fetchPulse, PulseResponse } from "@/lib/pulse-client"
import Container from "../_components/container"
import Header from "../_components/header"
import markdownToHtml from "@/lib/markdownToHtml"


export default async function DraftPage({
  searchParams,
}: {
  searchParams: Promise<{ profession?: string; sector?: string }>
}) {
  const sp = await searchParams
  const profession = sp.profession
  const sector = sp.sector

  if (!profession || !sector) return notFound()

  let data: PulseResponse
  try {
    data = await fetchPulse({
      task: "Daily briefing",
      lang: "es", // TODO: Support Multi-Language 
      profession,
      sector,
    })
  } catch (e) {
    return notFound()
  }

  // Convert Markdown -> HTML for each field
  const processedData: PulseResponse = {
    ...data,
    title: await markdownToHtml(data.title),
    summary: await markdownToHtml(data.summary),
    news: await markdownToHtml(data.news),
    meaning: await markdownToHtml(data.meaning),
    action: await markdownToHtml(data.action),
    linkedin_post: await markdownToHtml(data.linkedin_post),
    poc_ideas: await markdownToHtml(data.poc_ideas),
    compounding: await markdownToHtml(data.compounding),
    final_summary: await markdownToHtml(data.final_summary),
  }

  return (
    <Container>
      <Header />
      <main className="py-12">
        <DraftBlog data={processedData} />
      </main>
    </Container>
  )
}
