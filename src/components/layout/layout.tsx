import { Footer, Header } from './_ui'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <div className="h-full flex flex-col">
      <Header />
      <main className="flex-1 px-4">
        <div className="flex-1 w-full max-w-screen-lg mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
