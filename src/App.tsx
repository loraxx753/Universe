import { RouteObject, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { NotFoundBoundary } from './components/NotFoundBoundary'
import * as pages from './components/Pages'
import { PageComponentType } from './lib/types'
import { createAppRouter } from './lib/router'
import './styles/globals.css'

const pageRoutes: RouteObject[] = Object.values(pages).map((page) => {
  const Element = page as PageComponentType
  return {
    path: Element.path,
    element: (
      <Layout>
        <Element />
      </Layout>
    ),
  }
})

pageRoutes.push({
  path: '*',
  element: <NotFoundBoundary />,
})

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined

const router = createAppRouter(pageRoutes, basename)

function App() {
  return (
    <div className="h-full w-full">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
