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

    return (<>
        {data.news && (
            <section className="animate-fadeIn">
                <h3 className="text-xl font-semibold mb-2">Avances que no puedes ignorar</h3>
                <p dangerouslySetInnerHTML={{ __html: data.news }} />
            </section>)}


        {data.meaning && (
            <section className="animate-fadeIn">
                <h3 className="text-xl font-semibold mb-2">El valor real detrás</h3>
                <p dangerouslySetInnerHTML={{ __html: data.meaning }} />
            </section>
        )}

        {data.action && (
            <section className="animate-fadeIn">
                <h3 className="text-xl font-semibold mb-2">Tu micro-acción del día</h3>
                <p dangerouslySetInnerHTML={{ __html: data.action }} />
            </section>
        )}
        {data.linkedin_post && (
            <section className="animate-fadeIn">
                <h3 className="text-xl font-semibold mb-2">Inspira con tu voz</h3>
                <p dangerouslySetInnerHTML={{ __html: data.linkedin_post }} />
            </section>
        )}
        {data.poc_ideas && (
            <section className="animate-fadeIn">
                <h3 className="text-xl font-semibold mb-2">Ideas que puedes testear ya</h3>
                <p dangerouslySetInnerHTML={{ __html: data.poc_ideas }} />
            </section>
        )}
        {data.compounding && (
            <section className="animate-fadeIn">
                <h3 className="text-xl font-semibold mb-2">De pasos pequeños a impacto grande</h3>
                <p dangerouslySetInnerHTML={{ __html: data.compounding }} />
            </section>
        )}
        {data.final_summary && (
            <section className="animate-fadeIn">
                <h3 className="text-xl font-semibold mb-2">Resumen con propósito</h3>
                <p dangerouslySetInnerHTML={{ __html: data.final_summary }} />
            </section>
        )}
    </>
    )
}
