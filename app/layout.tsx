import { Metadata } from 'next'
import '@styles/globals.css'

export default function Layout({ children }) {
  return (
    <html lang="en-US" data-theme="winter">
      <body>
        <main className="min-h-screen min-w-[100vw] flex  bg-slate-300 items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}

export let metadata: Metadata = {
  title: 'Canvas explorations',
  icons: [
    {
      url: '/favicon.ico',
      rel: 'shortcut icon',
    },
  ],
}
