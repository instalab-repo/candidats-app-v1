"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="alert alert-danger" role="alert">
      <h2>Something went wrong</h2>
      <p>Unable to load the candidates. This can happen if the backend is unreachable.</p>
      <button className="btn btn-primary" onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
}
