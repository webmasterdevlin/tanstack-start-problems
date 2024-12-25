import { Outlet, ScrollRestoration, createRootRoute } from '@tanstack/react-router';
import { Meta, Scripts } from '@tanstack/start';
import { type ReactNode } from 'react';
import LoadTime from '@/components/LoadTime';
import ProjectInfo from '@/components/ProjectInfo';
import { getProjectFn } from '@/data/functions/project';

export const Route = createRootRoute({
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
    };
  },
  loader: async () => {
    return {
      project: getProjectFn(),
    };
  }
});

function RootComponent() {

  return (
    <RootDocument>
      <div className={'flex flex-col px-4 py-6 sm:px-16 sm:py-16 xl:px-48 2xl:px-96'}>
        <div className="group flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1>Project information</h1>
            <ProjectInfo />
          </div>
          <div className="h-[1px] bg-primary" />
          <Outlet />
        </div>
        <LoadTime />
        <ScrollRestoration />
        <Scripts />
      </div>
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
