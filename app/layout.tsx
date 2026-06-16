import './globals.css'
// import { Providers } from './providers'
import Navbar from '@/components/site/Navbar'
import Footer from '@/components/site/Footer'

export const metadata = {
  title: 'Sangchal — Women & Child Welfare NGO',
  description: 'Sangchal is a non-profit dedicated to maternal health, child education, and women empowerment. Join us in building stronger communities.',
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* <Providers> */}
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        {/* </Providers> */}
      </body>
    </html>
  )
}
