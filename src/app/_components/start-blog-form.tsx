"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function StartBlogForm() {
  const [profession, setProfession] = useState("")
  const [sector, setSector] = useState("")
  const [loading, setLoading] = useState(false)

  // anti-bot
  const [honeypot, setHoneypot] = useState("")     // should stay empty
  const [startedAt, setStartedAt] = useState<number>(Date.now())

  const router = useRouter()

  useEffect(() => {
    // mark when the form became interactive (used for time-gate)
    setStartedAt(Date.now())
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // --- anti-bot checks ---
    const elapsed = Date.now() - startedAt
    const tooFast = elapsed < 1500 // 1.5s threshold; adjust as you like
    const honeyTripped = honeypot.trim().length > 0

    if (tooFast || honeyTripped) {
      // silently drop; optionally report to telemetry
      setLoading(false)
      return
    }
    // ------------------------

    const encodedProfession = encodeURIComponent(profession)
    const encodedSector = encodeURIComponent(sector)

    router.push(`/draft?profession=${encodedProfession}&sector=${encodedSector}`)
  }

  return (
    <>
      <div className="w-full border-t border-gray-200 my-8" />
      <section className="my-12">
        <h2 className="mb-4 text-5xl font-bold">Crear blog dinámico</h2>
        <p className="mt-4 text-lg leading-relaxed mb-4">
          El que no escribe su historia, termina leyendo la de otros. Tú no...
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 md:flex-row md:items-center md:gap-2"
          autoComplete="off" // reduce auto-fill scripts
        >
          {/* honeypot: bots often fill any input named like a URL/website */}
          <label
            htmlFor="website"
            className="absolute left-[-10000px] top-auto w-px h-px overflow-hidden"
            aria-hidden="true"
          >
            Sitio web (deja en blanco)
          </label>
          <input
            id="website"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-10000px] top-auto w-px h-px overflow-hidden"
            aria-hidden="true"
          />

          <input
            id="profession"
            className="flex-1 border p-2"
            value={profession}
            placeholder="Profesión (ej: Desarollador)"
            onChange={(e) => setProfession(e.target.value)}
            required
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
          />

          <input
            id="sector"
            className="flex-1 border p-2"
            placeholder="Sector (ej., AI, Finanzas, Medicina)"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            required
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
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
    </>
  )
}
