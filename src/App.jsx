import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from './routes/router'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
      <Toaster />
    </BrowserRouter>
  )
}

export default App
