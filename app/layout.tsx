import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter, Crimson_Text } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const crimsonText = Crimson_Text({ 
  weight: ["400", "600", "700"],
  subsets: ["latin"], 
  variable: "--font-crimson" 
})

export const metadata: Metadata = {
  title: "Aryan Tomar - Portfolio",
  description: "Software Developer & Machine Learning Engineer",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${inter.variable} ${crimsonText.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
