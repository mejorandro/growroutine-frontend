"use client"

import { PulseResponse } from "@/lib/pulse-client"

/**
 * DraftBlogIntro
 *
 * Renders only the blog title and summary.
 * Useful for showing a quick preview before loading the full content.
 *
 * Props:
 * - data: Partial<PulseResponse> (title, summary)
 */
export default function DraftBlogIntro({ data }: { data: Partial<PulseResponse> }) {
  return (<>
            <h1
              dangerouslySetInnerHTML={{ __html: data.title || "" }}
              className="text-4xl font-bold"
            />
            <p
              dangerouslySetInnerHTML={{ __html: data.summary || "" }}
              className="text-lg text-gray-700"
            />
          </>
  )
}
