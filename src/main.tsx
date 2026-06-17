import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { LazyMotion } from 'framer-motion'
import App from './App.tsx'
import { Toaster } from '@/components/ui/toaster'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <LazyMotion features={() => import('./motion-features').then((mod) => mod.default)} strict>
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </LazyMotion>
    </HelmetProvider>
  </StrictMode>
)
