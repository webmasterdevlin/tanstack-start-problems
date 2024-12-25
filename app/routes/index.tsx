import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home
});

function Home() {
  return <>HOME</>;
}
