import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { queryCleint } from './lib/react-query'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="system">
        <Toaster richColors position="top-center" />
        <Helmet
          titleTemplate="%s | Pizza Shop"
          defaultTitle="Pizza Shop - Seja um parceiro e começe as suas vendas!"
        >
          <meta
            name="description"
            content="Genrencie com mais facilidade as suas vendas!"
          />
        </Helmet>
        <QueryClientProvider client={queryCleint}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
