import { ReactNode } from 'react'
import { Footer, Header } from './_ui'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <main className="flex-1 px-4">
        <div className="flex-1 w-full max-w-screen-lg mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
