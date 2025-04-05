import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "Interactive Card Details Form",
  description:
    "Check out Darkstar's solution for the Interactive Card Details Form challenge on Frontend Mentor",

  authors: {
    name: "Darkstar",
    url: "https://github.com/DarkstarXDD",
  },

  openGraph: {
    type: "website",
    url: "https://interactive-card-details-form-darkstarxdd.vercel.app/",
    title: "Interactive Card Details Form",

    description:
      "Check out Darkstar's solution for the Interactive Card Details Form challenge on Frontend Mentor",

    images: {
      url: "https://interactive-card-details-form-darkstarxdd.vercel.app/og-img.jpeg",
      type: "image/jpeg",
      width: 1440,
      height: 756,
    },
  },
}

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} font-space-grotesk bg-zinc-800 text-white`}
      >
        {children}
      </body>
    </html>
  )
}
