import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
  title: "[Title]",
  description:
    "Check out Darkstar's solution for the {challenge name} challenge on Frontend Mentor",

  authors: {
    name: "Darkstar",
    url: "https://github.com/DarkstarXDD",
  },

  openGraph: {
    type: "website",
    url: "https://challenge-name-darkstarxdd.vercel.app/",
    title: "devfinder",

    description:
      "Check out Darkstar's solution for the {challenge name} challenge on Frontend Mentor",

    images: {
      url: "https://challenge-name-darkstarxdd.vercel.app/og-img.jpeg",
      type: "image/jpeg",
      width: 1440,
      height: 756,
    },
  },
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter bg-zinc-800 text-white`}>
        {children}
      </body>
    </html>
  )
}
