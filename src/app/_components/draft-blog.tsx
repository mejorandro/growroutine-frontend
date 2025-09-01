"use client"

import { useEffect, useState } from "react"
import { PulseResponse } from "@/lib/pulse-client"

/**
 * DraftBlog
 *
 * Renders an AI-generated blog draft progressively (ChatGPT-style fade-in).
 * This is meant to be a private preview before publishing.
 *
 * Props:
 * - data: PulseResponse (title, summary, news, meaning, etc.)
 */
export default function DraftBlog({ data }: { data: PulseResponse }) {
  const [step, setStep] = useState(0)

  // Progressive reveal of blog sections (1 per second)
  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 2000),
      setTimeout(() => setStep(3), 3000),
      setTimeout(() => setStep(4), 4000),
      setTimeout(() => setStep(5), 5000),
      setTimeout(() => setStep(6), 6000),
      setTimeout(() => setStep(7), 7000),
      setTimeout(() => setStep(8), 8000),
    ]
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <article className="space-y-6 max-w-3xl mx-auto">
      {/* Blog title */}
      <h1 className="text-4xl font-bold">{data.title || "Draft title"}</h1>

      {/* Blog summary */}
      <p className="text-lg text-gray-700">{data.summary || "Draft summary"}</p>

      {/* Sections appear progressively */}
      {step >= 1 && (
        <section className="animate-fadeIn">
          <h3 className="text-xl font-semibold mb-2">📰 News</h3>
          <p>{data.news}</p>
        </section>
      )}

      {step >= 2 && (
        <section className="animate-fadeIn">
          <h3 className="text-xl font-semibold mb-2">💡 Meaning</h3>
          <p>{data.meaning}</p>
        </section>
      )}

      {step >= 3 && (
        <section className="animate-fadeIn">
          <h3 className="text-xl font-semibold mb-2">⚡ Action</h3>
          <p>{data.action}</p>
        </section>
      )}

      {step >= 4 && (
        <section className="animate-fadeIn">
          <h3 className="text-xl font-semibold mb-2">🔗 LinkedIn</h3>
          <p>{data.linkedin_post}</p>
        </section>
      )}

      {step >= 5 && (
        <section className="animate-fadeIn">
          <h3 className="text-xl font-semibold mb-2">🛠️ POCs</h3>
          <p>{data.poc_ideas}</p>
        </section>
      )}

      {step >= 6 && (
        <section className="animate-fadeIn">
          <h3 className="text-xl font-semibold mb-2">📈 Compounding</h3>
          <p>{data.compounding}</p>
        </section>
      )}

      {step >= 7 && (
        <section className="animate-fadeIn">
          <h3 className="text-xl font-semibold mb-2">📋 Final Summary</h3>
          <p>{data.final_summary}</p>
        </section>
      )}

      {/* Future publish button */}
      {step >= 8 && (
        <div className="mt-8">
          <button
            className="bg-green-600 text-white px-6 py-3 font-bold hover:bg-green-700 transition"
            onClick={() => alert("TODO: Save as Markdown and publish")}
          >
            Publish this blog
          </button>
        </div>
      )}
    </article>
  )
}
