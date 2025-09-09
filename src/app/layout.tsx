import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";
import Script from "next/script";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'GrowRoutine — AI, hábitos y crecimiento sostenible',
  description: 'Tu fuente de inspiración diaria para crear disciplina, constancia y resultados. AI + hábitos + mindset.',
  openGraph: {
    title: "GrowRoutine — Crece 1% cada día",
    description:
      "Tu fuente de inspiración diaria para crear disciplina, constancia y resultados. AI + hábitos + mindset.",
    url: "https://growroutine.com",
    siteName: "GrowRoutine",
    images: [
      {
        url: "/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "GrowRoutine Logo",
      },
    ],
    locale: "es_CR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowRoutine — Crece 1% cada día",
    description:
      "Convierte conocimiento, rutinas y AI en crecimiento sostenible. Tu rutina, tu futuro.",
    images: ["/favicon/android-chrome-512x512.png"],
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/jpg"
          sizes="32x32"
          href="/favicon/favicon-32x32.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32/32"
          href="/favicon/favicon-32x32.jpg"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <ThemeSwitcher />
        <div className="min-h-screen">{children}</div>
        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2LXCNHMGYB"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2LXCNHMGYB', {
              anonymize_ip: true,
              send_page_view: false
            });
          `}
        </Script>
      </body>
    </html>
  );
}
