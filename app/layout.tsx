import type React from "react"
import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Melhores Apostas Desportivas - Sites de Apostas em Portugal 2025",
  description:
    "Descubra os melhores sites de apostas desportivas em Portugal. Bónus exclusivos, análises especializadas e comparações detalhadas para uma experiência de apostas superior.",
  keywords: "apostas desportivas, sites de apostas Portugal, bónus apostas, casas de apostas portuguesas",
  openGraph: {
    title: "Melhores Apostas Desportivas Portugal",
    description: "Os melhores sites de apostas desportivas em Portugal com bónus exclusivos",
    url: "https://melhoresapostasdesportiva.com",
    siteName: "Melhores Apostas Desportivas",
    locale: "pt_PT",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body>
        <div className="fixed top-0 left-0 right-0 z-50">
          <SiteHeader />
        </div>
        <div className="pt-16">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
