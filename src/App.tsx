import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
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
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
