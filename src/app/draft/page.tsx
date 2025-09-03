// draft/page.tsx
import { notFound } from "next/navigation"
import Container from "../_components/container"
import Header from "../_components/header"
import DraftBlogIntro from "../_components/draft-blog-intro"
import DraftBlog from "../_components/draft-blog"
import { fetchBlogIntro, fetchPulse, PulseResponse } from "@/lib/pulse-client"
import { Suspense } from "react"
import markdownToHtml from "@/lib/markdownToHtml"

// --- Procesa y convierte a HTML todas las props
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

// --- Prefetch intro (más rápido, menos campos)
async function BlogIntroSection({ profession, sector }: { profession: string; sector: string }) {
  const data = await fetchBlogIntro({ task: "Daily briefing", lang: "es", profession, sector })
  if (!data) return notFound()

  const formatted = await processMarkdownData(data)
  return <DraftBlogIntro data={formatted} />
}

// --- Fetch body (lento porque son más campos)
async function BlogBodySection({ profession, sector }: { profession: string; sector: string }) {
  const data = await fetchPulse({ task: "Daily briefing", lang: "es", profession, sector })
  if (!data) return notFound()

  const formatted = await processMarkdownData(data)
  return <DraftBlog data={formatted} />
}

export default async function DraftPage({
  searchParams,
}: {
  searchParams: Promise<{ profession?: string; sector?: string }>
}) {
  const sp = await searchParams
  const { profession, sector } = sp

  if (!profession || !sector) return notFound()

  return (
    <Container>
      <Header />
      <main className="py-12 max-w-3xl mx-auto space-y-6">
        {/* Intro siempre primero */}
        <BlogIntroSection profession={profession} sector={sector} />

        {/* Body con fallback épico */}
        <Suspense
          fallback={
            <div className="animate-pulse text-gray-600 italic">
              En segundos vas a leer algo que tus competidores aún no saben...
            </div>
          }
        >
          <BlogBodySection profession={profession} sector={sector} />
        </Suspense>
      </main>
    </Container>
  )
}
