import { NextResponse } from "next/server"

/**
 * Proxy for Blog Intro
 *
 * Frontend calls:  /api/pulse/blog-intro
 * Backend target:  http://127.0.0.1:8000/grow-pulse/title
 */
export async function POST(req: Request) {
  try {
    const body = await req.json()

    // 🔗 Forward request to FastAPI `/grow-pulse/title`
    const response = await fetch("http://127.0.0.1:8000/grow-pulse/blog-intro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: `Backend error: ${response.status}` },
        { status: 500 }
      )
    }

    const data = await response.json()
    return NextResponse.json(data) // 👈 send response back to frontend
  } catch (err) {
    console.error("API proxy error (/pulse/blog-intro):", err)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
