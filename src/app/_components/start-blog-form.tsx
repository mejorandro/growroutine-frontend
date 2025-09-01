"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function StartBlogForm() {
  const [profession, setProfession] = useState("")
  const [sector, setSector] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const encodedProfession = encodeURIComponent(profession)
    const encodedSector = encodeURIComponent(sector)

    // Redirect to draft page with params
    router.push(`/draft?profession=${encodedProfession}&sector=${encodedSector}`)
  }

  return (
    <section className="my-12">
      <h2 className="mb-4 text-5xl font-bold">
        Create your Dynamic Blog
      </h2>
      <p className="mt-4 text-lg leading-relaxed mb-4">
        El que no escribe su historia, termina leyendo la de otros. Tú no...
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 md:flex-row md:items-center md:gap-2"
      >
        <input
          id="profession"
          className="flex-1 border p-2"
          placeholder="Profession (e.g., Developer)"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          required
        />

        <input
          id="sector"
          className="flex-1 border p-2"
          placeholder="Sector (e.g., AI, Finance, Healthcare)"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-6 transition-colors duration-200"
        >
          {loading ? "Generando..." : "Generar"}
        </button>
      </form>
    </section>
  )
}
