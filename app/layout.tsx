import {
  Geist,
  Geist_Mono,
  Instrument_Sans,
  Manrope,
} from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        manrope.variable,
        instrumentSans.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <div className="flex min-h-svh flex-col bg-[#010103] text-[#ededef]">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
