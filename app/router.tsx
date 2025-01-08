import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { routerWithQueryClient } from '@tanstack/react-router-with-query'
import { QueryClient } from '@tanstack/react-query'

export function createRouter() {
  const queryClient = new QueryClient()

  return routerWithQueryClient(
    createTanStackRouter({
      routeTree,
      context: {
        queryClient
      },
      defaultPreload: 'intent',
      defaultStaleTime: 1000 * 60 * 5, // 5 minutes
      defaultErrorComponent: ({ error }) => {
        return <div>{error.message}</div>;
      },
      defaultNotFoundComponent: () => {
        return <div>404 Not Found</div>;
      },
    }),
    queryClient
  )
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}


