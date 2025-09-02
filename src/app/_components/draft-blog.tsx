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
export default async function DraftBlog({ data }: { data: PulseResponse }) {

    return (
        <article className="space-y-6 max-w-3xl mx-auto">
            <h1 dangerouslySetInnerHTML={{ __html: data.title }} className="text-4xl font-bold" />
            <p dangerouslySetInnerHTML={{ __html: data.summary }} className="text-lg text-gray-700" />

            <section className="animate-fadeIn">
                <h3 className="text-xl font-semibold mb-2">Avances que no puedes ignorar</h3>
                <p dangerouslySetInnerHTML={{ __html: data.news }} />
            </section>

            <section className="animate-fadeIn">
                <h3 className="text-xl font-semibold mb-2">El valor real detrás</h3>
                <p dangerouslySetInnerHTML={{ __html: data.meaning }} />
            </section>

            <section className="animate-fadeIn">
                <h3 className="text-xl font-semibold mb-2">Tu micro-acción del día</h3>
                <p dangerouslySetInnerHTML={{ __html: data.action }} />
            </section>

            <section className="animate-fadeIn">
                <h3 className="text-xl font-semibold mb-2">Inspira con tu voz</h3>
                <p dangerouslySetInnerHTML={{ __html: data.linkedin_post }} />
            </section>


            <section className="animate-fadeIn">
                <h3 className="text-xl font-semibold mb-2">Ideas que puedes testear ya</h3>
                <p dangerouslySetInnerHTML={{ __html: data.poc_ideas }} />
            </section>

            <section className="animate-fadeIn">
                <h3 className="text-xl font-semibold mb-2">De pasos pequeños a impacto grande</h3>
                <p dangerouslySetInnerHTML={{ __html: data.compounding }} />
            </section>

            <section className="animate-fadeIn">
                <h3 className="text-xl font-semibold mb-2">Resumen con propósito</h3>
                <p dangerouslySetInnerHTML={{ __html: data.final_summary }} />
            </section>

            <div className="mt-8">
                <button
                    className="bg-green-600 text-white px-6 py-3 font-bold hover:bg-green-700 transition"
                    onClick={() => alert("TODO: Save as Markdown and publish")}
                >
                    Publicar Blog: Tu voz importa!
                </button>
            </div>
        </article>
    )
}
