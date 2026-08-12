// src/components/ErrorScreen.jsx

import { Link, useRouteError } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const ErrorScreen = () => {
  const error = useRouteError();

  console.error(error);

  const status = error?.status;

  let title = 'Something went wrong';
  let message = 'An unexpected error occurred. Please try again.';

  if (status === 404) {
    title = 'Page Not Found';
    message = 'The page you are looking for does not exist.';
  }

  if (status === 500) {
    title = 'Server Error';
    message = 'Something went wrong on our server. Please try again shortly.';
  }

  const errorMessage = error?.data?.message || error?.statusText || error?.message;

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: '70vh' }}
    >
      <h1
        style={{
          fontSize: '6rem',
          fontWeight: 'bold',
          marginBottom: '0',
        }}
      >
        {status || 'Oops'}
      </h1>

      <h2 className="mb-3">{title}</h2>

      <p className="text-muted mb-4" style={{ maxWidth: '500px' }}>
        {status === 500 ? message : errorMessage || message}
      </p>

      <div className="d-flex gap-2">
        <Button as={Link} to="/" variant="primary">
          Back to Shop
        </Button>

        <Button variant="outline-secondary" onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </div>
    </Container>
  );
};

export default ErrorScreen;
