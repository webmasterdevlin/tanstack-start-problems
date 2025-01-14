import globalStyle from '../globals.css?url'
import { Outlet, ScrollRestoration, createRootRouteWithContext } from '@tanstack/react-router';
import { Meta, Scripts } from '@tanstack/start';
import { Suspense, type ReactNode } from 'react';
import LoadTime from '@/components/LoadTime';
import ProjectInfo, { ProjectInfoSkeleton } from '@/components/ProjectInfo';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

interface RootRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RootRouterContext>()({
  component: RootComponent,
  head: () => {
    return {
      meta: [
        {
          charSet: 'utf-8',
        },
        {
          content: 'width=device-width, initial-scale=1',
          name: 'viewport',
        },
        {
          title: 'TanStack Start Starter',
        },
      ],
      links: [{
        rel: 'stylesheet',
        href: globalStyle,
      },]
    };
  },
});

function RootComponent() {

  return (
    <RootDocument>
      <div className={'flex flex-col px-4 py-6 sm:px-16 sm:py-16 xl:px-48 2xl:px-96'}>
        <div className="group flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1>Project information</h1>
            <Suspense fallback={<ProjectInfoSkeleton />}>
              <ProjectInfo />
            </Suspense>
          </div>
          <div className="h-[1px] bg-primary" />
          <Outlet />
        </div>
        <LoadTime />
        <ScrollRestoration />
        <Scripts />
      </div>
      <ReactQueryDevtools buttonPosition="bottom-left" initialIsOpen={false} />
      <TanStackRouterDevtools position="bottom-right" />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
