import { NextResponse } from "next/server"

// 👇 Solo manejamos POST (el form de StartBlogForm usa POST)
export async function POST(req: Request) {
  try {
    const body = await req.json()

    // 🔗 Llamada a tu backend FastAPI (corriendo en localhost:8000)
    const response = await fetch("http://127.0.0.1:8000/grow-pulse/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      return NextResponse.json({ error: "Backend error" }, { status: 500 })
    }

    const data = await response.json()
    return NextResponse.json(data) // 👈 esto le llega al frontend
  } catch (err) {
    console.error("API proxy error:", err)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
