"use client"

import { useState } from "react";

export default function StartBlogForm(){
  const [profession, setProfession] = useState("");
  const [sector, setSector] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); //enable loading!
  };

  return (
    <section className="my-12">
      <div className="mt-8 mb-8 border-t border-gray-300"></div>

      <h2 className="mb-4 text-5xl font-bold tracking-tight">
        Crea tu Blog Dinámico
      </h2>
      
      <p className="mt-4 text-lg leading-relaxed mb-4">El que no escribe su historia, termina leyendo la de otros. Tú no...</p>
      {/* Formulario en línea */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap- md:flex-row md:items-center md:gap-2"
      >
        {/* Input profesión */}
        <input
          id="profession"
          className="flex-1 border p-2 rounded"
          placeholder="Profesión (ej. Desarrollador)"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          required
        />

        {/* Input sector */}
        <input
          id="sector"
          className="flex-1 border p-2 rounded"
          placeholder="Sector (ej. AI, Finanzas, Salud)"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
          required
        />

        {/* Botón estilo CTA (full width en mobile, inline en desktop) */}
        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-6 transition-colors duration-200 rounded"
        >
          {loading ? "Generando..." : "Quiero dar el primer paso"}
        </button>
      </form>

      {/* Resultado debajo */}
      {result && (
        <div className="mt-8 p-4 bg-gray-50 rounded shadow-sm whitespace-pre-wrap">
          <h4 className="font-semibold mb-2">📋 Blog generado:</h4>
          {result}
        </div>
      )}
      <div>

      </div>
    </section>
  );
}
