import { notFound } from "next/navigation"
import DraftBlog from "../_components/draft-blog"
import { fetchPulse, fetchBlogIntro, PulseResponse } from "@/lib/pulse-client"
import Container from "../_components/container"
import Header from "../_components/header"
import markdownToHtml from "@/lib/markdownToHtml"
import DraftBlogIntro from "../_components/draft-blog-intro"

async function processMarkdownData(data: PulseResponse): Promise<PulseResponse> {

  return {
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
}

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
  let processedData: PulseResponse

  try {
    data = await fetchBlogIntro({
      task: "Daily briefing",
      lang: "es", // TODO: Support Multi-Language 
      profession,
      sector,
    })
  } catch (e) {
    console.log(e);
    return notFound()
  }

  // Convert Markdown -> HTML for each field
  processedData = await processMarkdownData(data);
  
  /*
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
  
    ////Convert Markdown -> HTML for each field
    processedData = await processMarkdownData(data);*/

  return (
    <Container>
      <Header />
      <main className="py-12">
        <article className="space-y-6 max-w-3xl mx-auto">
          <DraftBlogIntro data={processedData} />
          <DraftBlog data={processedData} />
        </article>
      </main>

    </Container>
  )
}
