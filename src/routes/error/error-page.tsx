import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main className='h-screen flex flex-col justify-center items-center'>
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {isRouteErrorResponse(error) && (
          <i>
            {error.status} {error.statusText}
          </i>
        )}
        {error instanceof Error && (
          <i>
            {error.name}: {error.message}
          </i>
        )}
      </p>
    </main>
  );
}
