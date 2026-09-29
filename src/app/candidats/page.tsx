import { Suspense } from "react";
import ListeAsync from "./ListeAsync";

export default function Candidats() {
  return (
    <div>
      <p className="text-muted">The list below is streamed from the server.</p>
      <Suspense fallback={<p>Loading list...</p>}>
        <ListeAsync />
      </Suspense>
    </div>
  );
}
