import { useRoutes } from 'react-router-dom'
import * as Page from '../pages'
import { Layout } from '../components'

export function RoutesApp() {
  const routes = useRoutes([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Page.Home /> },
        {
          path: '/registrar-produto',
          element: <Page.NewProduct />,
        },
        {
          path: '/detalhes-do-produto/:id',
          element: <Page.ProductDetails />,
        },
      ],
    },
    {
      path: '*',
      element: <Page.NotFound />,
    },
  ])

  return routes
}
