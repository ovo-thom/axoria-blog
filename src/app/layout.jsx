import "./globals.css"
import Footer from "@/components/Footer"

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body>
        {children}
        <Footer />
        </body>
    </html>
  )
}
