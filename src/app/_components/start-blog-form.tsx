"use client"

import { fetchPulse, PulseResponse } from "@/lib/pulse-client";
import { useState } from "react";

export default function StartBlogForm() {
  const [profession, setProfession] = useState("");
  const [sector, setSector] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PulseResponse | null>(null);

  //* This prevents React from rendering nothing or crashing when optional fields from the API response are missing.
  const safe = (value: string | null | undefined) =>
    value && value.trim() !== "" ? value : "N/A"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const data = await fetchPulse({
        lang: "es",
        // TODO: make this dynamic (multilanguage support)
        // Use standard i18n codes: "en", "es", "fr", etc.
        // Option 1: detect browser language
        // Option 2: add a language selector

        profession,
        sector,
      })
      setResult(data)
      console.log("✅ API response:", data)
    } catch (error) {
      console.error("❌ Error:", error)
      setResult(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="my-12">
      <div className="mb-8 border-t border-gray-300"></div>

      <h2 className="mb-4 text-5xl font-bold tracking-tight">
        Crea tu Blog Dinámico
      </h2>

      <p className="mt-4 text-lg leading-relaxed mb-4">
        El que no escribe su historia, termina leyendo la de otros. Tú no...
      </p>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 md:flex-row md:items-center md:gap-2"
      >
        <input
          id="profession"
          className="flex-1 border p-2 rounded"
          placeholder="Profesión (ej. Desarrollador)"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          required
        />
        <input
          id="sector"
          className="flex-1 border p-2 rounded"
          placeholder="Sector (ej. AI, Finanzas, Salud)"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-6 transition-colors duration-200 rounded"
        >
          {loading ? "Generando..." : "Quiero dar el primer paso"}
        </button>
      </form>

      {/* Resultado */}
      {result && (
        <div className="mt-8 p-4 bg-gray-50 rounded shadow-sm whitespace-pre-wrap">
          <h3 className="text-2xl font-semibold mb-2">
            {safe(result.title)} {/* 👈 si no hay title, N/A */}
          </h3>
          <p className="text-gray-700 mb-4">
            {safe(result.summary)} {/* 👈 si no hay summary, N/A */}
          </p>

          <div className="mb-4">
            <h4 className="font-semibold">📰 Noticias:</h4>
            <p>{safe(result.news)}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">💡 Oportunidades:</h4>
            <p>{safe(result.meaning)}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">⚡ Acción diaria:</h4>
            <p>{safe(result.action)}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">🔗 Post LinkedIn:</h4>
            <p>{safe(result.linkedin_post)}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">🛠️ POCs:</h4>
            <p>{safe(result.poc_ideas)}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">📈 Compounding:</h4>
            <p>{safe(result.compounding)}</p>
          </div>

          <div>
            <h4 className="font-semibold">📋 Resumen Final:</h4>
            <p>{safe(result.final_summary)}</p>
          </div>
        </div>
      )}
    </section>
  );
}
